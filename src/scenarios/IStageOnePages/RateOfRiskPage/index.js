import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, useParams, useLocation } from "react-router-dom";

import BackgroundBlueLabel from "../../../constituents/ILabel/BackgroundBlueLabel"
import ScoreBar from "../../../constituents/IScoreBar"

import sample1_img from '../../../property/images/smaple_1.png'
import smileImg from '../../../property/images/icons/smile.png'
import starImg from '../../../property/images/icons/star.png'

import classes from './styles.module.css'
import eventShuttle from '../../../eventShuttle'
import { getRateOfRiskScoreBar } from '../../../request/api'
import BackButton from "../../../constituents/IButton/BackButton"

const RateOfRiskPage = () => {

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

    useEffect(() => {
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    setaiScore(res.data)
                    setLoading(false)
                    if(res.data.length)
                    {
                        setTask(res.data[0].section)
                    }
                })
            } catch (error) {
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        scoreBarData()
        if(state != undefined)
        {
            setTask(state.task)
        }
    }, [taskID])

    useEffect(() => {
        if(vAiScore.length >= 1)
        {
            setTableRows(vAiScore[0].recordScoreTable)
            setTableLoading(false)
        }
    }, [vAiScore])

    return (
        <>
        <Row className="align-items-start mb-32 pb-2">  
            {/* <Col>
                <h3 className="">{t('rateOfRisk.header_1')}</h3>    
            </Col>     */}
            <Col>
                <div className={classes.purpose_sec}>
                    <span id="rate_of_risk_header" name="rate_of_risk_header">
                        {/* {t('rateOfRisk.header_1')}  */}
                        {task.folder}({task.name})<br/>
                        <span className="font-weight-normal font-white" id="header2" name="header2">{t('rateOfRisk.header_2')}</span>
                    </span>
                    <span id="secondary_header" name="secondary_header">x x x</span>
                </div>
            </Col>                
        </Row>
        <div className="cmn-bg-box p-4">
            <Row className="mb-4">
                <Col>
                    <Link to={{pathname:`/`,state:{lessonId} }}><BackButton idName="rate_of_risk_back_button" title={t('scenario.return')} className="mr-3" id={autoId()}/></Link>
                </Col>
            </Row>
            <div id="record_score_table_container" name="record_score_table_container">
            <Row className="smallest-padding-box02">
                <Col xs="3">                    
                    <BackgroundBlueLabel key={1} label={t('rateOfRisk.s_header_1')} className="font-18" id={"table_first_header"}/>
                </Col>
                <Col xs="3">
                    <BackgroundBlueLabel key={2} label={t('rateOfRisk.s_header_2')} className="font-18" id={"table_second_header"}/>
                </Col>
                <Col xs="6">
                    <BackgroundBlueLabel key={3} label={t('rateOfRisk.s_header_3')} className="font-18" id={"table_third_header"}/>
                </Col>
            </Row>
            {
                !tableLoading && tableRows ?
                tableRows.map((tableRow, index) => {
                    return <Row className="smallest-padding-box02 mt-2" key={index} id={`table_row_${index}`} name={`table_row_${index}`}>
                                <Col xs="3">
                                    <div className={`${classes.top_btn} ${classes.content_bottom_extra} ${classes.top_btn_no_triagle}`} id={`table_col_name_${index}`} name={`table_col_name_${index}`}>
                                        {/* {t('rateOfRisk.frequency_of_long_term_care')} */}
                                        {tableRow.name}
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className={classes.content_outline}>
                                        <ul className="point-list">
                                            <li>**</li>
                                            <li>**</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className={classes.content_outline}>
                                        <Row className="w-100">
                                            <Col md="2" className="d-flex align-items-center">
                                                <ul className="point-list">
                                                    <li>**</li>
                                                </ul>
                                            </Col>
                                            <Col md="10">
                                                <img src={sample1_img} alt="Sample Image" className=""/>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                })
                : 'loading....'
            }
            </div>
            {/* <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`} id={autoId()}>{t('rateOfRisk.frequency_of_long_term_care')}</div>
                </Col>
                <Col xs="3">
                    <div className={classes.content_outline}>
                        <ul className="point-list">
                            <li id={autoId()}>**</li>
                            <li id={autoId()}>**</li>
                        </ul>
                    </div>
                </Col>
                <Col xs="6">
                    <div className={classes.content_outline}>
                        <Row className="w-100">
                            <Col md="2" className="d-flex align-items-center">
                                <ul className="point-list">
                                    <li id={autoId()}>**</li>
                                </ul>
                            </Col>
                            <Col md="10">
                                <img src={sample1_img} alt="Sample Image" className="" id={autoId()}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`} id={autoId()}>{t('rateOfRisk.lifespan_and_healthy_lifespan')}</div>
                </Col>
                <Col xs="3">
                    <div className={classes.content_outline}>
                        <ul className="point-list">
                            <li id={autoId()}>**</li>
                            <li id={autoId()}>**</li>
                        </ul>
                    </div>
                </Col>
                <Col xs="6">
                    <div className={classes.content_outline}>
                        <Row className="w-100">
                            <Col md="2" className="d-flex align-items-center">
                                <ul className="point-list">
                                    <li id={autoId()}>**</li>
                                </ul>
                            </Col>
                            <Col md="10">
                                <img src={sample1_img} alt="Sample Image" className="mr-2" id={autoId()}/>
                                <img src={sample1_img} alt="Sample Image" className="mr-2" id={autoId()}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`} id={autoId()}>{t('rateOfRisk.causes_of_long_term_care')}</div>
                </Col>
                <Col xs="3">
                    <div className={classes.content_outline}>
                        <ul className="point-list">
                            <li id={autoId()}>**</li>
                            <li id={autoId()}>**</li>
                        </ul>
                    </div>
                </Col>
                <Col xs="6">
                    <div className={classes.content_outline} id={autoId()}>
                        -
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn} ${classes.content_bottom_extra} ${classes.top_btn_no_triagle}`} id={autoId()}>{t('rateOfRisk.long_term_care_period')}</div>
                </Col>
                <Col xs="3">
                    <div className={classes.content_outline}>
                     <ul className="point-list">
                        <li id={autoId()}>**</li>
                        <li id={autoId()}>**</li>
                    </ul>
                    </div>
                </Col>
                <Col xs="6">
                    <div className={classes.content_outline} id={autoId()}>
                        -
                    </div>
                </Col>
            </Row>
             */}
            <Row className="mt-4 mb-32 pb-4">
                <Col lg="10" className={`mx-auto ${classes.score_wrapper}`} id="record_history_lists" name="record_history_lists">
                    {
                        !vLoading && vAiScore ?
                        vAiScore.map((item, index) => {
                            return <Link to={{pathname:`/ai-score/${taskID}/${item.section.persona.id}`,state:{item} }} key={index}>
                                <ScoreBar key={index} className="mb-3" item={item} id={`record_history_list_${index}`}/>
                                </Link>
                        })
                        :
                        'Loading'
                    }
                </Col>
            </Row>
            
            <Row>
                <Col className="text-center pt-2">        
                <Link to={`/video-chat/${taskID}/${lessonId}`}><button className={classes.bottom_btn_submit} id="video_chat_page_link" name="video_chat_page_link">{t('rateOfRisk.proceed_to_the_next')}</button></Link>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RateOfRiskPage;