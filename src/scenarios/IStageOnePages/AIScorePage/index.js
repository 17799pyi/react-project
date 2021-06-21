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
import { useLocation } from "react-router-dom";
import LineChart from './LineChart';
import logger from 'redux-logger';
import avatarStatus from '../../../property/images/avatar_status.png'

const AIScorePage = () => {

    const { state } = useLocation();
    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'ai-score-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
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

    const clickKeyword = (keyword) => {
        setSelectKeyword(keyword)
    }
    
    useEffect(() => {
        const setPercentData = async () => {
            try {
                const data = getRateOfRiskCirclePercent(taskID).then(res => {
                    if(res.data){
                        setPrecisionPercent((res.data.precision*100).toFixed(2))
                        setBestUserPrecision((res.data.bestUserPrecision*100).toFixed(2))
                    } else {
                        logger.error("getPercentData error, response format is not legal.")
                    }
                })
            } catch (error) {
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        setPercentData()
    })

    useEffect(() => {
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    setaiScore(res.data)
                    setScoreLoading(false)
                })
            } catch (error) {
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        scoreBarData()
    })

    useEffect(() => {
        if(state)
        {
            setSelectScore(state.item)
        }
    })

    function scoreClickHandle(item) {
        setSelectScore(item)
    }

    useEffect(() => {
        //get message for chat history
        const getMessages = async () => {
            try {
                const data = getAiScoreHistoryChats(taskID).then(res => {
                    setGetAllMessages(res.data)
                })
            } catch (error) {
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        getMessages()
    })
    
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
                <h3 className="mb-0" id="ai_score_header" name="ai_score_header">{t('aiscore.ai_scoring_result')}</h3>
            </Col>
            <Col lg="7" className="text-right">
                <Link to="/"><BackButton title="コース一覧" className="w-auto" idName="link_to_scenario_selection"/></Link>

                <Link to={{pathname:`/`,state:{lessonId} }}><BackButton title="セクション一覧" className="mx-2 w-auto px-3" id="link_to_persona_selection"/></Link>
                
                <Link to={`/video-chat/${taskID}/${lessonId}`}><HistoryButton title="リトライ" idName="link_to_video_chat"/></Link>
            </Col>
        </Row>
        <div className={`mb-3 ${classes.avatar_status_box}`}>
            <Row>
                <Col xs="6" className="d-flex justify-content-center">
                    <img src={avatarStatus} alt="Avatar Status" />
                </Col>
                <Col xs="6" className="d-flex align-items-center">
                    <h3 className={classes.avatar_status_text}>合格やったね、おめでとう!</h3>
                </Col>
            </Row>
        </div>
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
                        <LineChart aiScore={vAiScore}></LineChart>
                    </div>
                </Col>
            </Row>
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3" id="table_header" name="table_header">{t('aiscore.score_by_process')}</p>
                
                <Table selectScore={vSelectScore} messages={vMessages} clickKeyword={clickKeyword}></Table>

                <Row className="mb-32">
                    <Col xl="10" className={`mx-auto ${classes.score_wrapper}`} id="rate_of_risk_chat_list_container" name="rate_of_risk_chat_list_container">
                        {
                            !vScoreLoading ?
                            vAiScore.map((item, index) => {
                                return  <button key={index} className="w-100 m-0 p-0 border-0 bg-transparent" onClick={() => scoreClickHandle(item)}>
                                            <ScoreBar  key={index} className="mt-3" item={item} id={`ai_score_${index}`}/>
                                        </button>
                            })
                            :
                            'Loading'
                        }
                    </Col>
                </Row>
                <Row>
                    <Col id="chat_container" name="chat_container">
                        <p className="font-16 font-weight-bold mb-3" id="chat_wrapper" name="chat_wrapper">{t('aiscore.utterance')}</p>
                        <ChatLog messages={vMessages} id="chat_list" selectKeyword={vSelectKeyword} />
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default AIScorePage;