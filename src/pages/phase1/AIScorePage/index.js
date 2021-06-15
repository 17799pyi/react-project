import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {  Row, Col } from 'reactstrap';

import HistoryButton from "../../../components/Button/HistoryButton"
import BackButton from "../../../components/Button/BackButton"
import ScoreBar from "../../../components/ScoreBar"
import ChatLog from "./ChatLog"

import classes from './styles.module.css';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { getRateOfRiskCirclePercent, getRateOfRiskScoreBar, getAiScoreHistoryChats } from '../../../api/api'
import eventBus from '../../../EventBus'
import CircleChart from './CircleChart'
import Table from './Table'
import { useLocation } from "react-router-dom";
import LineChart from './LineChart';

const AIScorePage = () => {

    const { state } = useLocation();
    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'ai-score-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();
    const [precisionPercent, setPrecisionPercent] = useState(0);
    const [bestUserPrecision, setBestUserPrecision] = useState(0);
    const [aiScore, setaiScore] = useState([]);
    const [selectScore, setSelectScore] = useState({});
    const [scoreLoading, setScoreLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [getAllMessages, setGetAllMessages] = useState([]);
    const [selectKeyword, setSelectKeyword] = useState(null);

    const clickKeyword = (keyword) => {
        setSelectKeyword(keyword)
    }
    
    useEffect(() => {
        const setPercentData = async () => {
            try {
                const data = getRateOfRiskCirclePercent(taskID).then(res => {
                    setPrecisionPercent((res.data.precision*100).toFixed(2))
                    setBestUserPrecision(res.data.bestUserPrecision*100)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        setPercentData()
    }, [taskID])

    useEffect(() => {
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    setaiScore(res.data)
                    setScoreLoading(false)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        scoreBarData()
    }, [taskID])

    useEffect(() => {
        if(state)
        {
            setSelectScore(state.item)
        }
    }, [taskID])

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
                eventBus.dispatch("something_went_wrong");
            }
        };
        getMessages()
    }, [taskID])
    
    useEffect(() => {
        let chatID = selectScore.chatId
        for (const [key, value] of Object.entries(getAllMessages)) {
            if(value.id == chatID)
            {
                setMessages(value.messages)
            }
        }
    }, [getAllMessages, selectScore, taskID])


    return (
        <>
        <Row className="align-items-center mb-32 pb-2">
            <Col lg="5" className="mb-3 mb-lg-0">
                <h3 className="mb-0" id={autoId()}>{t('aiscore.ai_scoring_result')}</h3>
            </Col>
            <Col lg="7" className="text-right">
                <BackButton title="コース一覧" id={autoId()}/>
                <BackButton title="セクション一覧" className="mx-2 w-auto px-3" id={autoId()}/>
                <HistoryButton title="リトライ" id={autoId()}/>
            </Col>
        </Row>
        <div className="cmn-bg-box">
            <Row>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr">
                        <div className={classes.inner_circle_wrapper}>
                            <CircleChart precisionPercent={precisionPercent} bestUserPrecision={bestUserPrecision}></CircleChart>
                        </div>
                    </div>           
                </Col>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr">
                        <p className="font-16 font-weight-bold text-center m-0" id={autoId()}>{t('aiscore.chartbar.header')}</p>
                        <LineChart aiScore={aiScore}></LineChart>
                        {/* <img src={SampleChart} alt="Sample Chart" className="d-block mx-auto" id={autoId()}/> */}
                    </div>
                </Col>
            </Row>
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('aiscore.score_by_process')}</p>
                
                <Table selectScore={selectScore} messages={messages} clickKeyword={clickKeyword}></Table>

                <Row className="mb-32">
                    <Col xl="10" className={`mx-auto ${classes.score_wrapper}`}>
                        {
                            !scoreLoading ?
                            aiScore.map((item, index) => {
                                return  <button key={index} className="w-100 m-0 p-0 border-0 bg-transparent" onClick={() => scoreClickHandle(item)}>
                                            <ScoreBar  key={index} className="mt-3" item={item} id={autoId()}/>
                                        </button>
                            })
                            :
                            'Loading'
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('aiscore.utterance')}</p>
                        <ChatLog messages={messages} id={autoId()} selectKeyword={selectKeyword} />
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default AIScorePage;