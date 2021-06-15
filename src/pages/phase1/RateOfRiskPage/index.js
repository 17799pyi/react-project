import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

import BackgroundBlueLabel from "../../../components/Label/BackgroundBlueLabel"
import ScoreBar from "../../../components/ScoreBar"

import sample1_img from '../../../assets/images/smaple_1.png'
import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'

import classes from './styles.module.css'
import eventBus from '../../../EventBus'
import { getRateOfRiskScoreBar } from '../../../api/api'

const RateOfRiskPage = () => {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'rate-of-risk-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();
    const [aiScore, setaiScore] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    setaiScore(res.data)
                    setLoading(false)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        scoreBarData()
    }, [taskID])

    return (
        <>
        <Row className="align-items-start mb-32 pb-2">  
            {/* <Col>
                <h3 className="">{t('rateOfRisk.header_1')}</h3>    
            </Col>     */}
            <Col>
                <div className={classes.purpose_sec}>
                    <span id={autoId()}>{t('rateOfRisk.header_1')} <br/><span className="font-weight-normal font-white">{t('rateOfRisk.header_2')}</span></span>
                    <span id={autoId()}>x x x</span>
                </div>
            </Col>                
        </Row>
        <div className="cmn-bg-box p-4">
            <Row className="smallest-padding-box02">
                <Col xs="3">                    
                    <BackgroundBlueLabel key={1} label={t('rateOfRisk.s_header_1')} className="font-18" id={autoId()}/>
                </Col>
                <Col xs="3">
                    <BackgroundBlueLabel key={2} label={t('rateOfRisk.s_header_2')} className="font-18" id={autoId()}/>
                </Col>
                <Col xs="6">
                    <BackgroundBlueLabel key={3} label={t('rateOfRisk.s_header_3')} className="font-18" id={autoId()}/>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
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
            
            <Row className="mt-4 mb-32 pb-4">
                <Col lg="10" className={`mx-auto ${classes.score_wrapper}`}>
                    {
                        !loading ?
                        aiScore.map((item, index) => {
                            return <Link to={{pathname:`/ai-score/${taskID}`,state:{item} }} key={index}><ScoreBar key={index} className="mb-3" item={item} id={autoId()}/></Link>
                        })
                        :
                        'Loading'
                    }
                </Col>
            </Row>
            
            <Row>
                <Col className="text-center pt-2">        
                    <button className={classes.bottom_btn_submit} id={autoId()}><Link to={`/VideoChat/${taskID}`}>{t('rateOfRisk.proceed_to_the_next')}</Link></button>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RateOfRiskPage;