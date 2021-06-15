import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BrowserRouter as Router, Link, useParams, useHistory } from "react-router-dom";
import Countdown, { zeroPad } from 'react-countdown';

import Checkbox from "../../../components/Checkbox"
import InsuranceTypeLabel from "../../../components/Label/InsuranceTypeLabel"
import BackButton from "../../../components/Button/BackButton"
import HistoryButton from "../../../components/Button/HistoryButton"
import GeneralButton from "../../../components/Button/GeneralButton"

import PdfIcon from "../../../assets/images/icons/pdf_icon.png"
import ChatPeople1 from "../../../assets/images/chat_people01.png"
import ChatPeople2 from "../../../assets/images/chat_people02.png"
import wave_icon from '../../../assets/images/chatlog/waveform_img.png'
import MicIcon from "../../../assets/images/icons/mic_icon.png"
import UpArrowIcon from "../../../assets/images/chatlog/send_icon.png"
import done_icon from "../../../assets/images/chatlog/done_icon.png";
import play_icon from "../../../assets/images/play_icon.svg"
import cancel_icon from "../../../assets/images/chatlog/cancel_icon.png";
import TimeIcon from "../../../assets/images/icons/time_icon.png"
import './styles.css';
import WebCam from '../../../components/WebCam/Index';
import ChatApi from "../../../api/chatApi";
import { startChat, postTexhToSpeech, upArrow, finishScoring } from '../../../api/api';
const VideoChatPage = () => {

    const { t } = useTranslation();

    let lastId = 0;
    const autoId = (prefix = 'video-chat-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();

    const history = useHistory();
    const [chatMsg, setChatMsg] = useState('');
    const [recording, setRecording] = useState(false);
    const [isplayed, setIsplayed] = useState(false);
    const [outputAudio, setOutputAudio] = useState(false);
    const [task, setTask] = useState(null);
    const [labelMsg, setLabelMsg] = useState('');
    const [speakerId, setSpeakerId] = useState('');
    const [processes, setProcesses] = useState();
    const countdownRef = useRef();

    const [countdownTime, setCountdownTime] = useState(Date.now());
    const [isStartCountdown, setCountdownStarting] = useState();

    const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
        return (
            <>
                <img src={TimeIcon} alt="Time Icon" id={autoId()} />
                <input type="text" value={`${zeroPad(minutes)} : ${zeroPad(seconds)}`} className="time_text_box ml-2" id={autoId()} />
            </>
        )
    }

    const startCountdown = (e) => {
        countdownRef.current?.start();
        setCountdownStarting(true);
    }

    const pauseCountdown = (e) => {
        countdownRef.current?.pause();
        setCountdownStarting(false);
    }

    const onCompleteCountdown = () => {
        setCountdownTime(Date.now());
        setCountdownStarting(undefined);
    }

    const onChatMsgType = (e) => {
        setChatMsg(e.target.value);
    }
    const SAMPLING_RATE = 4096;
    const audioContextRef = useRef(AudioContext);
    const streamRef = useRef(MediaStream);
    const streamSourceRef = useRef(MediaStreamAudioSourceNode);
    const processorRef = useRef(AudioWorkletNode);
    const processAudio = useCallback((event) => {
        const buffer = event.inputBuffer.getChannelData(0) || new Float32Array(SAMPLING_RATE);
        const toSend = new Int16Array(buffer.length);
        for (let index = buffer.length; index >= 0;) {
            toSend[index] = 32767 * Math.min(1, buffer[index]);
            index -= 1;
        }
        ChatApi.sendData(toSend.buffer);
    }, []);

    var Sound = (function () {
        var df = document.createDocumentFragment();
        return function Sound(src) {
            var snd = new Audio(src);
            df.appendChild(snd);
            snd.addEventListener('ended', function () { df.removeChild(snd); });
            snd.play();
            return snd;
        }
    }());


    function startConnection() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) {
            console.log("This browser does not support mic recording");
        }
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                streamRef.current = stream;
                audioContextRef.current = new AudioContext();
                streamSourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
                processorRef.current = audioContextRef.current.createScriptProcessor(SAMPLING_RATE, 1, 1);
                processorRef.current.onaudioprocess = processAudio;

                streamSourceRef.current.connect(processorRef.current);
                processorRef.current.connect(audioContextRef.current.destination);
                ChatApi.startConnection(audioContextRef.current.sampleRate);
                ChatApi.setupTranscriptionCallback(processTranscription);
                ChatApi.sendBackTranscription();
            })
            .catch((error) => {
                audioContextRef.current?.close().then(() => {
                    audioContextRef.current = undefined;
                });
                console.log(error.message);
            });
    }

    function closeConnection() {
        ChatApi.endConnection();
        processorRef.current?.disconnect();
        streamSourceRef.current?.disconnect();

        streamRef.current?.getTracks().forEach((track) => {
            track.stop();
        });
        streamRef.current = undefined;

        audioContextRef.current?.close().then(() => {
            audioContextRef.current = undefined;
            streamSourceRef.current = undefined;
            processorRef.current = undefined;
        });
    }

    const processTranscription = useCallback(
        (transcription) => {
            if (transcription.isFinal) {
                setChatMsg(transcription.transcription);
                closeConnection();
            }
        },
        []
    );

    const handleIconShow = () => {
        // start
        setRecording(true);
        startConnection();
    }
    const handleIconHide = () => {
        //end
        setRecording(false);
        ChatApi.sendBackTranscription();
    }

    const handleCancel = () => {
        setChatMsg('');
        setRecording(false);
        ChatApi.sendBackTranscription();
    }

    useEffect(() => {
        if (labelMsg && task) {
            GetAudio();
        }
    }, [outputAudio]);

    useEffect(() => {
        GetTask();
    }, []);

    const GetTask = async () => {
        const response = await startChat(taskID);
        setTask(response.data);
        BuildProcesses(response.data.processes);
        GetAudio(response.data.incomingMessages[0].text);
        setSpeakerId(response.data.incomingMessages[0].id);
    }

    //speaker id hardcoded
    const GetAudio = async (value) => {
        const response = await postTexhToSpeech({
            text: value ? value : labelMsg,
            speakerId: 309
        });
        setLabelMsg(value ? value : labelMsg);
        var snd = Sound("data:audio/wav;base64," + response.data.audio);
        snd.play();
    }

    const handleScoring = () => {
        finishScoring();
        history.replace(`/rate-of-risk/${taskID}`); 
    }

    const handleBreak = () => {
        history.replace('');
    }
    const sendMsg = async () => {
        const response = await upArrow(task.chat.id, { text: chatMsg });
        setLabelMsg(response.data.replies[0].text);
        setChatMsg('');
        setOutputAudio(!outputAudio);
        checkKeywordMatching(response.data.message.matchedWords);
    }

    const BuildProcesses = (processes) => {
        if (processes) {
            let data = [];
            processes.map((item) => {
                item.matched = false;
                data.push(item);
            })
            setProcesses(data);
        }

    }

    const checkKeywordMatching = (matchedWords) => {
        if (matchedWords) {
            let TempProcess = [...processes]
            for (let index = 0; index < TempProcess.length; index++) {
                const checkbox = TempProcess[index].keywords;
                for (let i = 0; i < checkbox.length; i++) {
                    const keyword = checkbox[i];
                    for (let c = 0; c < matchedWords.length; c++) {
                        const word = matchedWords[c].word;
                        if (word == keyword) {
                            TempProcess[index].matched = true;
                        }
                    }
                }
                setProcesses(TempProcess);
            }

        }
    }

    const startCall = () =>{
        startCountdown();
        setIsplayed(true);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <Row>
                <Col lg="4" className="mb-3 m-lg-0">
                    <h3 className="mb-32 inline_header " id={autoId()}>{t('videochat.role_play_implmenting')}</h3>
                    <BackButton title={t('general.return')} onClick={goBack} className="ml-2" id={autoId()} onClick={handleBreak} />
                    <div className="cmn-bg-box mb-3 px-4 pt-4 pb-2">
                        <Row>
                            <Col>
                                <div className="mb-4">
                                    <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.ongoing_section')}</p>
                                    <InsuranceTypeLabel label={t('videochat.current_long_term_care_insurance')} className="mb-0 font-weight-bold" id={autoId()} />
                                </div>
                                <div>
                                    <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.process')}</p>
                                    {processes && processes.map((item, index) => {
                                        return (
                                            <div className="cmn-bg-box-inr px-2 py-3 mb-3" key={index}>
                                                <FormControlLabel style={styles.root} label={<span style={styles.label} className="font-weight-bold" id={autoId()}>{item.name}</span>} control={
                                                    <Checkbox
                                                        value={0}
                                                        checked={item.matched}
                                                        name="checkbox-button"
                                                        color="default"
                                                        id={autoId()}
                                                    />
                                                } />
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="cmn-bg-box p-4">
                        <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.sale_tools')}</p>
                        <Row className="smallest-padding-box01">
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()} /></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()} /></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()} /></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="chat_img_sec mb-3">
                        <img src={ChatPeople1} alt="Chat People" className="main_chat_people" id={autoId()} />
                        <p className="start_text" id={autoId()}>{labelMsg}</p>
                        {!isplayed && <img src={play_icon} alt="Play Button" onClick={startCall} className="main_chat_play_button" id={autoId()} />}
                        <div className="chat_people_box">
                            {isplayed ? <WebCam /> : <></>}
                        </div>
                    </div>
                    <div className="mb-32 chat_text_box">
                        <input type="text" placeholder={t('videochat.reply')} value={chatMsg} onChange={(e) => onChatMsgType(e)} id={autoId()} />
                        {recording ?
                            <div className="chat_text_box_recording">
                                <img src={wave_icon} alt="wave icon" id={autoId()} className="pr-2" />
                                <img src={cancel_icon} alt="cancel icon" onClick={handleCancel} id={autoId()} />
                                <img src={done_icon} alt="stop recording" onClick={handleIconHide} id={autoId()} />
                            </div>

                            : <></>}
                        {

                            (chatMsg == '') ?
                                (recording) ? <></> : <img src={MicIcon} className="pointer_cursor" alt="Mic" onClick={handleIconShow} id={autoId()} />
                                : (recording) ? <></> : <img src={UpArrowIcon} className="pointer_cursor" alt="Up arrow" onClick={sendMsg} id={autoId()} />
                        }
                    </div>
                    <div className="text-right">
                        <Countdown
                            key="countdown"
                            ref={countdownRef}
                            autoStart={false}
                            date={countdownTime}
                            zeroPadTime={2}
                            onComplete={onCompleteCountdown}
                            renderer={countdownRenderer}
                            overtime={true}
                        />
                        <div className="d-block d-lg-inline-block mt-3 mt-lg-0">
                            <BackButton title={t('videochat.break')} className="ml-4" id={autoId()} onClick={handleBreak} />
                            <GeneralButton title={t('videochat.resume')} onClick={() => { window.location.reload(); }} className="mx-2" id={autoId()} />
                            <HistoryButton title={t('videochat.score')} id={autoId()} onClick={handleScoring} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

const styles = {
    root: {
        marginLeft: 0,
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    container: {
        width: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'stretch',
    },
    label: {
        marginButtom: 0,
        fontSize: '16px',
        paddingLeft: 8
    }
};
export default VideoChatPage;