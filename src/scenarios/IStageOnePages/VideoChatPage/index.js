import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BrowserRouter as Router, Link, useParams, useHistory } from "react-router-dom";
import Countdown, { zeroPad } from 'react-countdown';

import Checkbox from "../../../constituents/ICheckbox"
import InsuranceTypeLabel from "../../../constituents/ILabel/InsuranceTypeLabel"
import BackButton from "../../../constituents/IButton/BackButton"
import HistoryButton from "../../../constituents/IButton/HistoryButton"
import GeneralButton from "../../../constituents/IButton/GeneralButton"

import PdfIcon from "../../../property/images/icons/pdf_icon.png"
import ChatPeople1 from "../../../property/images/chat_people01.png"
import ChatPeople2 from "../../../property/images/chat_people02.png"
import wave_icon from '../../../property/images/chatlog/waveform_img.png'
import MicIcon from "../../../property/images/icons/mic_icon.png"
import UpArrowIcon from "../../../property/images/chatlog/send_icon.png"
import done_icon from "../../../property/images/chatlog/done_icon.png";
import play_icon from "../../../property/images/play_icon.svg"
import cancel_icon from "../../../property/images/chatlog/cancel_icon.png";
import TimeIcon from "../../../property/images/icons/time_icon.png"
import './styles.css';
import WebCam from '../../../constituents/IWebCam/Index';
import ChatApi from "../../../request/chatApi";
import { startChat, postTexhToSpeech, upArrow, finishScoring, getAiScoreHistoryChats } from '../../../request/api';
import ChatLog from '../AIScorePage/ChatLog';
const VideoChatPage = () => {

    const { t } = useTranslation();

    let lastId = 0;
    const autoId = (prefix = 'video-chat-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();
    let { lessonId } = useParams();

    const history = useHistory();
    const [vChatMsg, setChatMsg] = useState('');
    const [vRecording, setRecording] = useState(false);
    const [vIsplayed, setIsplayed] = useState(false);
    const [vOutputAudio, setOutputAudio] = useState(false);
    const [vTask, setTask] = useState(null);
    const [vLabelMsg, setLabelMsg] = useState('');
    const [speakerId, setSpeakerId] = useState('');
    const [messages, setMessages] = useState();
    const [vProcesses, setProcesses] = useState();
    const [chatPerson, setChatPerson] = useState();
    const [matchedKeyword, setMatchedKeyword] = useState('');
    const countdownRef = useRef();

    const [vCountdownTime, setCountdownTime] = useState(Date.now());
    const [isStartCountdown, setCountdownStarting] = useState();

    const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
        return (
            <>
                <img src={TimeIcon} alt="Time Icon" id="time_icon" name="time_icon"/>
                <input type="text" value={`${zeroPad(minutes)} : ${zeroPad(seconds)}`} className="time_text_box ml-2" id="time" name="time" />
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

    const dealIconShow = () => {
        if (vIsplayed) {
            // start
            setRecording(true);
            startConnection();
        }
    }
    const dealIconHide = () => {
        //end
        setRecording(false);
        ChatApi.sendBackTranscription();
    }

    const dealCancel = () => {
        setChatMsg('');
        setRecording(false);
        ChatApi.sendBackTranscription();
    }

    useEffect(() => {
        if (vLabelMsg && vTask) {
            GetAudio();
        }
    }, [vOutputAudio]);

    useEffect(() => {
        GetTask();
    }, []);

    const GetTask = async () => {
        const response = await startChat(taskID);
        // const sp_id = response.data.chat.section.persona.gender == 'MALE' ? 309 : 308;
        const sp_id = response.data?.chat?.section?.persona?.gender == 'MALE' ? 309 : 308;
        const cht_person = sp_id == 309 ? ChatPeople1 : ChatPeople2
        setTask(response.data);
        BuildProcesses(response.data.processes);
        GetAudio(sp_id, response.data.incomingMessages[0].text);
        setSpeakerId(sp_id);
        setChatPerson(cht_person);
        let msgArray = new Array();
        msgArray.push(response.data.incomingMessages[0]);
        setMessages(msgArray);
    }

    const GetAudio = async (id, value) => {
        const response = await postTexhToSpeech({
            text: value ? value : vLabelMsg,
            speakerId: id ? id : speakerId
        });
        setLabelMsg(value ? value : vLabelMsg);
        var snd = Sound("data:audio/wav;base64," + response.data.audio);
        snd.play();
    }

    const dealScoring = () => {
        finishScoring(vTask.chat.id);
        history.replace(`/ai-score/${taskID}/${lessonId}`);
    }

    const dealBreak = () => {
        history.replace('');
    }
    const sendMsg = async () => {
        let new_msg = messages;
        new_msg.push({ type: "something", chatId: vTask.chat.id, text: vChatMsg, speakerType: "CUSTOMER" });
        setMessages(new_msg);
        const response = await upArrow(vTask.chat.id, { text: vChatMsg });
        setLabelMsg(response.data.replies[0].text);
        new_msg.push({ type: "IncomingMessage", chatId: vTask.chat.id, text: response.data.replies[0].text, speakerType: "CUSTOMER" })
        setChatMsg('');
        setOutputAudio(!vOutputAudio);
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
            let TempProcess = [...vProcesses]
            for (let index = 0; index < TempProcess.length; index++) {
                const checkbox = TempProcess[index].keywords;
                for (let i = 0; i < checkbox.length; i++) {
                    const keyword = checkbox[i];
                    for (let c = 0; c < matchedWords.length; c++) {
                        const word = matchedWords[c].word;
                        if (word == keyword) {
                            setMatchedKeyword(word);
                            TempProcess[index].matched = true;
                        }
                    }
                }
                setProcesses(TempProcess);
            }

        }
    }

    const startCall = () => {
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
                    <h3 className="mb-32" id="role_play_implementing" name="role_play_implementing">{t('videochat.role_play_implmenting')}</h3>
                    <BackButton title={t('general.return')} onClick={goBack} className="mb-4" onClick={dealBreak} />
                    <div className="cmn-bg-box mb-3 px-4 pt-4 pb-2">
                        <Row>
                            <Col>
                                <div className="mb-4">
                                    <p className="font-16 font-weight-bold mb-3" id="ongoing_section" name="ongoing_section">{t('videochat.ongoing_section')}</p>
                                    <InsuranceTypeLabel label={t('videochat.current_long_term_care_insurance')} className="mb-0 font-weight-bold" id="long_term_care_insurance" name="long_term_care_insurance" />
                                </div>
                                <div>
                                    <p className="font-16 font-weight-bold mb-3" id="process" name="process">{t('videochat.process')}</p>
                                    {vProcesses && vProcesses.map((item, index) => {
                                        return (
                                            <div id={`checkbox_div_${index+1}`} name={`checkbox_div_${index+1}`} className="cmn-bg-box-inr px-2 py-3 mb-3" key={index}>
                                                <FormControlLabel style={styles.root} label={<span style={styles.label} className="font-weight-bold" id={`check_process_${index+1}`} name={`check_process_${index+1}`}>{item.name}</span>} control={
                                                    <Checkbox
                                                        value={0}
                                                        checked={item.matched}
                                                        name={`checkbox-button_${index+1}`}
                                                        color="default"
                                                        id={`checkbox-button_${index+1}`}
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
                        <p className="font-16 font-weight-bold mb-3" id="sale_tools" name="sale_tools">{t('videochat.sale_tools')}</p>
                        <Row className="smallest-padding-box01">
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id="pdf_icon_1" name="pdf_icon_1" /></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id="pdf_icon_2" name="pdf_icon_2" /></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id="pdf_icon_3" name="pdf_icon_3" /></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="chat_img_sec mb-3">
                        <img src={chatPerson} alt="Chat People" className="main_chat_people" id="chat_person" name="chat_person" />
                        <p className="start_text" id="label_message" name="label_message">{vLabelMsg}</p>
                        {!vIsplayed && <img src={play_icon} alt="Play Button" onClick={startCall} className="main_chat_play_button" id="play_icon" name="play_icon" />}
                        <div className="chat_people_box">
                            {vIsplayed ? <WebCam /> : <></>}
                        </div>
                    </div>
                    <div className="mb-32 chat_text_box">
                        <input disabled={!vIsplayed} type="text" placeholder={t('videochat.reply')} value={vChatMsg} onChange={(e) => onChatMsgType(e)} id="reply" name="reply" />
                        {vRecording ?
                            <div className="chat_text_box_recording">
                                <img src={wave_icon} alt="wave icon" id="wave_icon" name="wave_icon" className="pr-2" />
                                <img src={cancel_icon} alt="cancel icon" onClick={dealCancel} id="cancel_icon" name="cancel_icon" />
                                <img src={done_icon} alt="stop recording" onClick={dealIconHide} id="done_icon" name="done_icon" />
                            </div>
                            : <></>}
                        {
                            (vChatMsg == '') ?
                                (vRecording) ? <></> : <img src={MicIcon} className="pointer_cursor" alt="Mic" onClick={dealIconShow} id="mic" name="mic" />
                                : (vRecording) ? <></> : <img src={UpArrowIcon} className="pointer_cursor" alt="Up arrow" onClick={sendMsg} id={autoId()} />
                        }
                    </div>
                    <div className="text-right">
                        <Countdown
                            key="countdown"
                            ref={countdownRef}
                            autoStart={false}
                            date={vCountdownTime}
                            zeroPadTime={2}
                            onComplete={onCompleteCountdown}
                            renderer={countdownRenderer}
                            overtime={true}
                        />
                        <div className="d-block d-lg-inline-block mt-3 mt-lg-0">
                            <BackButton title={t('videochat.break')} className="ml-4" idName="break" onClick={dealBreak} />
                            <GeneralButton title={t('videochat.resume')} onClick={() => { window.location.reload(); }} className="mx-2" idName="resume" />
                            <HistoryButton title={t('videochat.score')} idName="score" onClick={dealScoring} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3 m-lg-0">
                    <p className="font-16 font-weight-bold mb-3 mt-4" id="utterance" name="utterance">{t('aiscore.utterance')}</p>
                    {messages && <ChatLog selectKeyword={matchedKeyword} id="chat_log" messages={messages} bot_person={chatPerson} />}
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