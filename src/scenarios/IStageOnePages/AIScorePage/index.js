import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {  Row, Col } from 'reactstrap';

import HistoryButton from "../../../constituents/IButton/HistoryButton"
import BackButton from "../../../constituents/IButton/BackButton"
import ScoreBar from "../../../constituents/IScoreBar"
import ChatLog from "./ChatLog"

import classes from './styles.module.css';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { getRateOfRiskCirclePercent, getRateOfRiskScoreBar, getAiScoreHistoryChats } from '../../../request/api'
import eventShuttle from '../../../eventShuttle'
import CircleChart from './CircleChart'
import Table from './Table'
import { useLocation, useHistory } from "react-router-dom";
import CustomChart from './CustomChart/index';
import logger from 'redux-logger';
import avatarStatus from '../../../property/images/avatar_status.png'
import { connect } from 'react-redux'
import { selectTask } from '../../../storage/reduxActions/index'
import avatars from '../../../property/dynamicImages'
import store from '../../../storage';

const AIScorePage = ({select_task, selectTask}) => {

    const { state } = useLocation();
    const location = useLocation();
    const history = useHistory();
    const { t } = useTranslation();
    let { taskID } = useParams();
    let { lessonId } = useParams();
    const [vPrecisionPercent, setPrecisionPercent] = useState(0);
    const [vBestUserPrecision, setBestUserPrecision] = useState(0);
    const [vAiScore, setaiScore] = useState([]);
    const [vSelectScore, setSelectScore] = useState({});
    const [vScoreLoading, setScoreLoading] = useState(true);
    const [vMessages, setMessages] = useState([]);
    const [vGetAllMessages, setGetAllMessages] = useState([]);
    const [vSelectKeyword, setSelectKeyword] = useState(null);
    const [vShowStoryImg, setShowStoryImg] = useState(false);
    let [vAvatar, setAvatar] = useState('');

    const clickKeyword = (keyword) => {
        setSelectKeyword(keyword)
    }
    //get chart list
    const scoreBarData = async () => {
        try {
            const data = getRateOfRiskScoreBar(taskID).then(res => {
                if(res.data){
                    setaiScore(res.data)
                    setScoreLoading(false)
                } else {
                    // logger.error("getRateOfRiskHistoryList error, response format is not legal.")
                    logger.error("リスク率履歴リストのエラーです。応答形式が正しくありません。")
                }
            })
        } catch (error) {
            eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
        }
    };
    //get message for chat history
    const getMessages = async () => {
        try {
            const data = getAiScoreHistoryChats(taskID).then(res => {
                if(res.data){
                    setGetAllMessages(res.data)
                } else {
                    // logger.error("getHistoryMessages error, response format is not legal.")
                    logger.error("メッセージ履歴エラーです。応答形式が正しくありません。")
                }
            })
        } catch (error) {
            eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
        }
    };
    const setPercentData = async () => {
        try {
            const data = getRateOfRiskCirclePercent(taskID).then(res => {
                if(res.data){
                    // if comes from other pages, do not cover data fetched from redux
                    if(state.item == undefined){
                        setPrecisionPercent((res.data.recentUserPrecision*100).toFixed(0))
                    }
                    setBestUserPrecision((res.data.bestUserPrecision*100).toFixed(0))
                } else {
                    logger.error("パーセントデータエラーです。応答形式が正しくありません。")
                }
            })
        } catch (error) {
            eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            scoreBarData()
            getMessages()
            setPercentData()
        }, 500);
    }, [location])
    
    useEffect(() => {
        //get select scroe value
        if(state.item != undefined)
        {
            setSelectScore(state.item)
            setPrecisionPercent((state.item.score?.precision*100).toFixed(0))
            let chatID = state.item.recordId
            for (const [key, value] of Object.entries(vGetAllMessages)) {
                if(value.id == chatID)
                {
                    setMessages(value.messages)
                }
            }
        }else{
            if(vAiScore.length >= 1)
            {   
                let latestRecord = {};
                vAiScore.forEach(item=>{
                    if(!latestRecord.recordId || item.recordId > latestRecord.recordId){
                        latestRecord = JSON.parse(JSON.stringify(item));
                    }
                })

                setSelectScore(latestRecord)
                let chatID = latestRecord.recordId
                for (const [key, value] of Object.entries(vGetAllMessages)) {
                    if(value.id == chatID)
                    {
                        setMessages(value.messages)
                    }
                }
            }
        }
        if(state.isShowStory != undefined)
        {
            setShowStoryImg(state.isShowStory)
        }
        if(vAiScore.length >= 1)
        {
            selectTask(vAiScore[0].section)
        }
    }, [vAiScore])

    useEffect(()=>{
        // dynamic show result persona pictures by user's choice
        let cur_persona = 'boy';
        let temp_cur_persona = store.getState().currentChosedPersona ? store.getState().currentChosedPersona.name : '松尾さん';
        switch(temp_cur_persona){
            case '松尾さん':
                cur_persona = 'boy';
                break;
            case '岡田さん':
                cur_persona = 'old_man';
                break;
            case '安田さん':
                cur_persona = 'girl';
                break;
        }
        if(vPrecisionPercent >= 0 && vPrecisionPercent <= 59)
        {
            setAvatar(avatars[`avatar_${cur_persona}_denied`]);
        }else if(vPrecisionPercent >= 60 && vPrecisionPercent <= 69)
        {
            setAvatar(avatars[`avatar_${cur_persona}_passed`]);
        }else if(vPrecisionPercent >= 70 && vPrecisionPercent <= 100)
        {
            setAvatar(avatars[`avatar_${cur_persona}_great`]);
        }
    },[vPrecisionPercent])

    function scoreClickHandle(item) {
        setSelectScore(item)
        if(item.score)
        {
            setPrecisionPercent((item.score.precision*100).toFixed(0))
        }
    }
    
    useEffect(() => {
        let chatID = vSelectScore.recordId
        for (const [key, value] of Object.entries(vGetAllMessages)) {
            if(value.id == chatID)
            {
                setMessages(value.messages)
            }
        }
    }, [vGetAllMessages, vSelectScore])
    
    return (
        <>
        <Row className="align-items-center mb-32 pb-2">
            <Col lg="5" className="mb-3 mb-lg-0">
                <h3 className="mb-0 font-24 font-weight-bold" id="ai_score_header" name="ai_score_header">
                {/* {select_task.folder} */}
                {select_task.name}
                {/* {t('aiscore.ai_scoring_result')} */}
                </h3>
            </Col>
            <Col lg="7" className="text-right">
                <Link to="/start-new-role-play"><BackButton title="コース一覧" className="w-auto" idName="link_to_scenario_selection"/></Link>

                <Link to={{pathname:`/start-new-role-play`,state:{lessonId} }}><BackButton title="セクション一覧" className="mx-2 w-auto px-3" id="link_to_persona_selection"/></Link>
                
                <Link to={`/video-chat/${taskID}/${lessonId}`}><HistoryButton title="リトライ" idName="link_to_video_chat"/></Link>
            </Col>
        </Row>
        {
            vShowStoryImg ?
            <div className={`mb-3 ${classes.avatar_status_box}`}>
                <Row>
                    <Col xs="12" className="d-flex justify-content-center">
                        <img src={vAvatar} alt="Avatar Status" />
                    </Col>
                </Row>
            </div> : ""
        }
        <div className="cmn-bg-box">
            <Row>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr d-flex align-items-center">
                        <div className={classes.inner_circle_wrapper} id="circle_chart_container" name="circle_chart_container">
                            <CircleChart precisionPercent={vPrecisionPercent} bestUserPrecision={vBestUserPrecision}></CircleChart>
                        </div>
                    </div>           
                </Col>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr" id="line_chart_container" name="line_chart_container">
                        <p className="font-16 font-weight-bold text-center m-0" id="line_chart_header" name="line_chart_header">{t('aiscore.chartbar.header')}</p>
                        <CustomChart f_scoreClickHandle={scoreClickHandle} aiScore={vAiScore}></CustomChart>
                    </div>
                </Col>
            </Row>
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3" id="table_header" name="table_header">{t('aiscore.score_by_process')}</p>
                
                <Table selectScore={vSelectScore} messages={vMessages} clickKeyword={clickKeyword}></Table>

                {/* <p className="font-16 font-weight-bold mb-5 mt-6" id="table_header" name="table_header">
                {t('aiscore.chartbar.header')}
                </p>
                <Row className={`mb-32 cmn-scroll-bar ${classes.score_container}`}>
                    <Col xl="10" className={`mx-auto ${classes.score_wrapper}`} id="rate_of_risk_chat_list_container" name="rate_of_risk_chat_list_container" >
                        {
                            !vScoreLoading ?
                            vAiScore
                            .sort((a, b) => b.recordId > a.recordId ? 1 : -1)
                            .map((item, index) => {
                                return  <button key={index} className="w-100 m-0 p-0 border-0 bg-transparent" onClick={() => scoreClickHandle(item)}>
                                            <ScoreBar  key={index} className="mt-3" item={item} id={`ai_score_${index}`} v_selectScore={vSelectScore} />
                                        </button>
                            })
                            :
                            'Loading'
                        }
                    </Col>
                </Row> */}
                <Row>
                    <Col id="chat_container" name="chat_container">
                        <p className="font-16 font-weight-bold mb-3 mt-6" id="chat_wrapper" name="chat_wrapper">{t('aiscore.utterance')}</p>
                        <ChatLog messages={vMessages} id="chat_list" selectKeyword={vSelectKeyword} MsgSelectScore={vSelectScore}/>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

const stateToProps = state => {
    return {
        select_task: state.select_task,
    }
}

const dispatchToProps = dispatch => {
    return {
        selectTask: (select_task) => {
            dispatch(selectTask(select_task));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(AIScorePage)