import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import BackgroundBlueLabel from "../../../components/Label/BackgroundBlueLabel"
import ScoreBar from "../../../components/ScoreBar"

import sample1_img from '../../../assets/images/smaple_1.png'
import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'

import classes from './styles.module.css'

const RateOfRiskPage = () => {

    const { t } = useTranslation();
    return (
        <>
        <Row className="align-items-start mb-32 pb-2">  
            {/* <Col>
                <h3 className="">{t('rateOfRisk.header_1')}</h3>    
            </Col>     */}
            <Col>
                <div className={classes.purpose_sec}>
                    <span>{t('rateOfRisk.header_1')} <br/><span className="font-weight-normal font-white">{t('rateOfRisk.header_2')}</span></span>
                    <span>x x x</span>
                </div>
            </Col>                
        </Row>
        <div className="cmn-bg-box p-4">
            <Row className="smallest-padding-box02">
                <Col xs="3">                    
                    <BackgroundBlueLabel label={t('rateOfRisk.s_header_1')} className="font-18"/>
                </Col>
                <Col xs="3">
                    <BackgroundBlueLabel label={t('rateOfRisk.s_header_2')} className="font-18"/>
                </Col>
                <Col xs="6">
                    <BackgroundBlueLabel label={t('rateOfRisk.s_header_3')} className="font-18"/>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>{t('rateOfRisk.frequency_of_long_term_care')}</div>
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
                                <img src={sample1_img} className=""/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>{t('rateOfRisk.lifespan_and_healthy_lifespan')}</div>
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
                                <img src={sample1_img} className="mr-2"/>
                                <img src={sample1_img} className="mr-2"/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>{t('rateOfRisk.causes_of_long_term_care')}</div>
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
                        -
                    </div>
                </Col>
            </Row>
            <Row className="smallest-padding-box02 mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn} ${classes.content_bottom_extra} ${classes.top_btn_no_triagle}`}>{t('rateOfRisk.long_term_care_period')}</div>
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
                        -
                    </div>
                </Col>
            </Row>
            
            <Row className="mt-4 mb-32 pb-4">
                <Col lg="10" className="mx-auto">
                    <Link to="/AIScore"><ScoreBar className="mb-3" percentage="75"/></Link>
                    <Link to="/AIScore"> <ScoreBar percentage="65"/></Link>
                </Col>
            </Row>
            
            <Row>
                <Col className="text-center pt-2">        
                    <button className={classes.bottom_btn_submit}><Link to="/VideoChat">{t('rateOfRisk.proceed_to_the_next')}</Link></button>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RateOfRiskPage;