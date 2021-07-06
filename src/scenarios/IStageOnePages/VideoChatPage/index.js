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
import ConfirmDialog from "../../../constituents/IConfirmDialog";

import man_avatar from '../../../property/images/persona/avatar/man_avatar.png'
import old_man_avatar from '../../../property/images/persona/avatar/old_man_avatar.png'
import woman_avatar from '../../../property/images/persona/avatar/woman_avatar.png'

import man_full_body from '../../../property/images/persona/full_body_color/man_full_body_color.png';
import old_man_full_body from '../../../property/images/persona/full_body_color/old_man_full_body_color.png';
import woman_full_body from '../../../property/images/persona/full_body_color/woman_full_body_color.png';

import persona_gifs from '../../../property/dynamicImages'

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
import { startChat, postTexhToSpeech, upArrow, finishScoring, getMaterialToken } from '../../../request/api';
import ChatLog from './ChatLog';
import store from '../../../storage'
import { UPDATE_TRANSCRIPTION } from '../../../storage/consts';

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
    const [chatPersonAvatar, setChatPersonAvatar] = useState(man_avatar);
    const [matchedKeyword, setMatchedKeyword] = useState('');
    const [isModal, setIsModal] = useState(false);
    const [fileToken, setFileToken] = useState();
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false);
    const countdownRef = useRef();

    const [vCountdownTime, setCountdownTime] = useState(Date.now());
    const [isStartCountdown, setCountdownStarting] = useState();
    let [curPersona, setCurPersona] = useState('man');

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
        return (
            <>
                <img src={TimeIcon} alt="Time Icon" id="time_icon" name="time_icon" />
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
            let tempTrans = store.getState().transcript_one_time;
            if (transcription.isFinal) {
                store.dispatch({ type: UPDATE_TRANSCRIPTION, transcript: tempTrans + transcription.transcription })
                return;
            }

            setChatMsg(tempTrans + transcription.transcription);
            // if (transcription.isFinal) {
            //     setChatMsg(transcription.transcription);
            //     closeConnection();
            // }
        }, []
    );

    const dealIconShow = () => {
        // start recording
        if (vIsplayed) {
            setRecording(true);
            startConnection();
        }
    }
    const dealIconHide = () => {
        // stop recording
        store.dispatch({ type: UPDATE_TRANSCRIPTION, transcript: '' })
        setRecording(false);
        closeConnection();
    }

    const dealCancel = () => {
        // cancel recording
        setChatMsg('');
        store.dispatch({ type: UPDATE_TRANSCRIPTION, transcript: '' })
        setRecording(false);
        closeConnection();
    }

    const getFileToken = async () => {
        const token = await getMaterialToken();
        console.log(token.data, 'token');
        setFileToken(token.data);
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
        await getFileToken();
        let sp_id = 309;
        let chat_person = '';
        let chat_person_avatar = '';
        switch (store.getState().currentChosedPersona?.name) {
            case '松尾さん':
                // 松尾
                sp_id = 309;
                setCurPersona('man');
                chat_person = man_full_body;
                chat_person_avatar = man_avatar;
                break;
            case '岡田さん':
                // 岡田
                sp_id = 307;
                chat_person = old_man_full_body;
                chat_person_avatar = old_man_avatar;
                setCurPersona('old_man');
                break;
            case '安田さん':
                // 安田
                sp_id = 308;
                chat_person = woman_full_body;
                chat_person_avatar = woman_avatar;
                setCurPersona('woman');
                break;
            default:
                sp_id = 309;
                setCurPersona('man');
                chat_person = man_full_body;
                chat_person_avatar = man_avatar;
                break;
        }

        setTask(response.data);
        BuildProcesses(response.data.processes);
        setSpeakerId(sp_id);
        setChatPerson(chat_person);
        setChatPersonAvatar(chat_person_avatar);
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

    const dealScoring = async () => {
        await finishScoring(vTask.chat.id);
        setIsOpenConfirmDialog(false);
        history.replace({ pathname: `/ai-score/${taskID}/${lessonId}`, state: { isShowStory: true } });
    }

    const dealBreak = () => {
        // history.replace(`/rate-of-risk/${taskID}/${lessonId}`);
        history.replace({ pathname: `/start-new-role-play`, state: { lessonId } });
    }
    const sendMsg = async () => {
        let new_msg = messages;
        new_msg.push({ type: "something", chatId: vTask.chat.id, text: vChatMsg, speakerType: "CUSTOMER" });
        setMessages(new_msg);
        const response = await upArrow(vTask.chat.id, { text: vChatMsg });

        // はい for nod,
        // いいえ for shaking head,
        // 悩む for thinking or wondering,
        // クチパク for starting to speak,
        // オーバーアクション for jumping up and celebrating
        switch (response?.data?.replies[0]?.personaAction) {
            case 'はい':
                setChatPerson(persona_gifs[`${curPersona}_nod`]);
                break;
            case 'いいえ':
                setChatPerson(persona_gifs[`${curPersona}_shake_head`]);
                break;
            case '悩む':
                setChatPerson(persona_gifs[`${curPersona}_think`]);
                break;
            case 'クチパク':
                setChatPerson(persona_gifs[`${curPersona}_talk`]);
                break;
            case 'オーバーアクション':
                setChatPerson(persona_gifs[`${curPersona}_celebrate`]);
                break;
            default:
                break;
        }

        let chat_person = man_full_body;
        switch (curPersona) {
            case 'man':
                chat_person = man_full_body;
                break;
            case 'old_man':
                chat_person = old_man_full_body;
                break;
            case 'woman':
                chat_person = woman_full_body;
                break;
        }
        setTimeout(() => {
            setChatPerson(chat_person)
        }, 3000);

        setLabelMsg(response.data.replies[0].text);
        new_msg.push({ type: "IncomingMessage", chatId: vTask.chat.id, text: response.data.replies[0].text, speakerType: "CUSTOMER" })
        setChatMsg('');
        store.dispatch({ type: UPDATE_TRANSCRIPTION, transcript: '' })
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

    const [listStyle, setListStyle] = useState({
        opacity: 1
    })
    useEffect(()=>{
        // update background-color according to count of matched keywords
        if(vProcesses){
            let i = 1;
            vProcesses.forEach(item =>{
                if(item.matched){
                    i = i - 0.1
                }
            })
            setListStyle({
                opacity: i
            })
        }
    },[vProcesses])

    const startCall = () => {
        startCountdown();
        setIsplayed(true);
        GetAudio(null, vTask.incomingMessages[0].text);
        let msgArray = new Array();
        msgArray.push(vTask.incomingMessages[0]);
        setMessages(msgArray);
        setLabelMsg(vTask.incomingMessages[0].text);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <Row>
                <Col lg="4" className="mb-3 m-lg-0">
                    <div style={listStyle} className="cmn-bg-box mb-3 px-4 pt-4 pb-2 video-left-list">
                        <Row>
                            <Col>
                                <div className="mb-4">
                                    <p className="font-16 font-weight-bold mb-3" id="ongoing_section" name="ongoing_section">{t('videochat.ongoing_section')}</p>
                                    <span className="video-chat-top-buttons">
                                        <div title={vTask && `${vTask.chat.section.name}`} className="mx-2 video-chat-btn-tips" id="long_term_care_insurance" name="long_term_care_insurance">{vTask && `${vTask.chat.section.name}`}</div>
                                        <GeneralButton title={t('general.return')} className="mx-2 video-chat-btn-click-back" onClick={dealBreak} />
                                    </span>
                                </div>
                                <div>
                                    <p className="font-16 font-weight-bold mb-3" id="process" name="process">{t('videochat.process')}</p>
                                    {vProcesses && vProcesses.map((item, index) => {
                                        return (
                                            <div id={`checkbox_div_${index + 1}`} name={`checkbox_div_${index + 1}`} className="cmn-bg-box-inr px-2 py-3 mb-3" key={index}>
                                                <FormControlLabel style={styles.root} label={<span style={styles.label} className="font-weight-bold" id={`check_process_${index + 1}`} name={`check_process_${index + 1}`}>{item.name}</span>} control={
                                                    <Checkbox
                                                        value={0}
                                                        checked={item.matched}
                                                        name={`checkbox-button_${index + 1}`}
                                                        color="default"
                                                        id={`checkbox-button_${index + 1}`}
                                                    />
                                                } />
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="chat_img_sec mb-3">
                        <img src={chatPerson} alt="Chat People" className="main_chat_people" id="chat_person" name="chat_person" key={Math.random() * 100} />
                        {vLabelMsg && <p className="start_text" id="label_message" name="label_message">{vLabelMsg}</p>}
                        {!vIsplayed &&
                            <>
                                <img src={play_icon} alt="Play Button" onClick={startCall} className="main_chat_play_button" id="play_icon" name="play_icon" />
                                <HistoryButton title={t('videochat.start_button')} alt="Start Button" onClick={startCall} className="main_chat_start_button" id="start_button" name="start_button" />
                            </>}
                        <div className="chat_people_box">
                            {vIsplayed ? <WebCam /> : <></>}
                        </div>
                    </div>
                    <div className="mb-32 chat_text_box">
                        <textarea disabled={!vIsplayed || vRecording} type="text" placeholder={t('videochat.reply')} value={vChatMsg} onChange={(e) => onChatMsgType(e)} id="reply" name="reply" autoComplete="off" />
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
                            <BackButton title={t('videochat.break')} className="ml-4 w-auto" idName="break" onClick={dealBreak} />
                            <GeneralButton title={t('videochat.resume')} onClick={() => { window.location.reload(); }} className="mx-2" idName="resume" />
                            <HistoryButton title={t('videochat.score')} idName="score" onClick={() => setIsOpenConfirmDialog(true)} />
                        </div>
                        <ConfirmDialog
                            title={t("videochat.to_score_confirmation")}
                            open={isOpenConfirmDialog}
                            setOpen={setIsOpenConfirmDialog}
                            onReturn={dealScoring}
                        />
                    </div>
                </Col>
            </Row>
            {/* <Row>
                <Col className="mb-3 m-lg-0">
                    {messages &&
                        <>
                            <p className="font-16 font-weight-bold mb-3 mt-4" id="utterance" name="utterance">{t('aiscore.utterance')}</p>
                            <ChatLog selectKeyword={matchedKeyword} id="chat_log" messages={messages} bot_person={chatPersonAvatar} />
                        </>}
                </Col>
            </Row> */}
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