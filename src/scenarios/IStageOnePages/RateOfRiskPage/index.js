import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, useParams, useLocation } from "react-router-dom";
import ScoreBar from "../../../constituents/IScoreBar"
import classes from './styles.module.css'
import eventShuttle from '../../../eventShuttle'
import { getRateOfRiskScoreBar, getProcessToken } from '../../../request/api'
import { connect } from 'react-redux'
import { selectTask } from '../../../storage/reduxActions/index'
import Table from './Table'
import BackButton from "../../../constituents/IButton/BackButton"

const RateOfRiskPage = ({selectTask, select_task}) => {
    const { t } = useTranslation();
    const { state } = useLocation();
    let lastId = 0;
    const autoId = (prefix = 'rate-of-risk-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();
    let { lessonId } = useParams();
    const [vAiScore, setaiScore] = useState([]);
    const [vLoading, setLoading] = useState(true);
    const [tableRows, setTableRows] = useState([]);
    const [tableLoading, setTableLoading] = useState(true);
    const [task, setTask] = useState(true);
    const [vProcessToken, setProcessToken] = useState();

    const GetProcessToken = async () => {
      const response = await getProcessToken();
      setProcessToken(response.data);
    };

    useEffect(() => {
        GetProcessToken()
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    // setaiScore(res.data)
                    let sorting = res.data.sort((a, b) => b.recordId - a.recordId)
                    setaiScore(sorting);
                    setLoading(false)
                    setTableLoading(false)
                })
            } catch (error) {
                // eventShuttle.dispatch("something_went_wrong");
                eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
            }
        };
        scoreBarData()
        if(state != undefined)
        {
            // selectTask(state.task)
            setTask(state.task)
        }
    }, [taskID])

    useEffect(() => {
        if(vAiScore.length >= 1)
        {
            setTableRows(vAiScore[0].recordScoreTable)
        }
    }, [vAiScore])

    const contextSplit = (item) => {
        return item.split("\n");
    }

    
    return (
        <>
        <Row className="mb-3">
            <Col lg="4">
                <Link to={{pathname:`/start-new-role-play`,state:{lessonId} }}><BackButton idName="rate_of_risk_back_button" title={t('scenario.return')} className="mr-3 mb-5" id={autoId()}/></Link>
            </Col>
            <Col className="ml-6">        
                <Link to={`/video-chat/${taskID}/${lessonId}`}><button className={classes.bottom_btn_submit} id="video_chat_page_link" name="video_chat_page_link">{t('rateOfRisk.proceed_to_the_next')}</button></Link>
            </Col>
        </Row>
            
            {/* <Row>
            </Row> */}
        <Row className="align-items-start mb-32 pb-2">  
            {/* <Col>
                <h3 className="">{t('rateOfRisk.header_1')}</h3>    
            </Col>     */}
            <Col>
                <div className={classes.purpose_sec}>
                    <span id="rate_of_risk_header" name="rate_of_risk_header">
                        {/* {t('rateOfRisk.header_1')}  */}
                        {/* {select_task.folder} */}
                        {select_task.name}
                        <br/>
                        <span className="font-weight-normal font-white" id="header2" name="header2">{t('rateOfRisk.header_2')}</span>
                    </span>
                    <span>
                    {
                        select_task &&
                        contextSplit(select_task.context).map((v, k) => {
                            return <span key={k} className="font-black d-block" id="secondary_header" name="secondary_header">{v}</span>
                        })
                    }
                    </span>
                    
                </div>
            </Col>                
        </Row>
        <div className="cmn-bg-box p-4">
            <Table scoreTable={tableRows} processToken={vProcessToken} lessonId={lessonId} taskId={taskID}></Table>
        </div>
        <div className="cmn-bg-box p-4 mt-5">
            <p className="font-16 font-weight-bold mb-5" id="table_header" name="table_header">
            {t('aiscore.chartbar.header')}
            </p>
            <Row className={`mt-4 mb-32 pb-4 cmn-scroll-bar ${classes.scroll_container}`}>
                <Col lg="10" className={`mx-auto ${classes.score_wrapper} `} id="record_history_lists" name="record_history_lists">
                    {
                        vAiScore.map((item, index) => {
                            return <Link to={{pathname:`/ai-score/${taskID}/${item.section.persona.id}`,state:{item} }} key={index}>
                                <ScoreBar key={index} className="mb-3" item={item} id={`record_history_list_${index}`}/>
                                </Link>
                        })
                    }
                </Col>
            </Row>
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

export default connect(stateToProps, dispatchToProps)(RateOfRiskPage)