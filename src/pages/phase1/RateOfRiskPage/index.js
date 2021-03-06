import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import BackgroundBlueLabel from "../../../components/Label/BackgroundBlueLabel"
import ScoreBar from "../../../components/ScoreBar"

import sample1_img from '../../../assets/images/smaple_1.png'
import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'

import classes from './styles.module.css'

const RateOfRiskPage = ({ }) => {

    const { t } = useTranslation();
    return (
        <>
        <Row className="align-items-center mb-32 pb-2">  
            <Col>
                <h3 className="mb-3">介護リスク率発生</h3>          
                <h3 className="mb-0 font-weight-normal d-block">-このセクションの目的-</h3>
            </Col>          
        </Row>
        <div className="cmn-bg-box p-4">
            <Row className="">
                <Col xs="3">                    
                    <BackgroundBlueLabel label="処理する" className="font-18"/>
                </Col>
                <Col xs="3">
                    <BackgroundBlueLabel label="ポイント" className="font-18"/>
                </Col>
                <Col xs="6">
                    <BackgroundBlueLabel label="使用する材料・ツール" className="font-18"/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>介護の発生頻度</div>
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
                        <Row>
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
                    {/* <div className={classes.content_outline}>
                        <ul className={classes.content_list}>
                            <li className="mt-1">
                                <span>xxx</span>
                                <img src={sample1_img} className="ml-2"/>
                            </li>
                        </ul>
                    </div> */}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>寿命と健康的な寿命</div>
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
                        {/* <ul className={classes.content_list}>
                            <li className="mt-1">
                                <span>xxx</span>
                                <img src={sample1_img} className="ml-2"/>
                                <img src={sample1_img} className="ml-2"/>
                            </li>
                        </ul> */}                        
                        <Row>
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
            <Row className="mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn}`}>寿命と健康的な寿命</div>
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
            <Row className="mt-2">
                <Col xs="3">
                    <div className={`${classes.top_btn} ${classes.content_bottom_extra} ${classes.top_btn_no_triagle}`}>寿命と健康的な寿命</div>
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

            {/* <Row className={`${classes.bottom_line} m-0 mt-3`}>
                <Col xs="1"><span>月 .日</span></Col>
                <Col xs="2"><span>11：00 - 11：12</span></Col>
                <Col xs="2"><span>正解率：80%</span></Col>
                <Col xs="2">
                    <img src={smileImg} className={classes.w_19}/>
                </Col>
                <Col></Col>
                <Col xs="2" className="text-center">
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                </Col>
                <Col xs="2">
                    <button className={classes.bottom_line_btn}>受け入れ中</button>
                </Col>
            </Row>
            <Row className={`${classes.bottom_line} m-0 mt-3`}>
                <Col xs="1"><span>月 .日</span></Col>
                <Col xs="2"><span>11：00 - 11：12</span></Col>
                <Col xs="2"><span>正解率：80%</span></Col>
                <Col xs="2">
                    <img src={smileImg} className={classes.w_19}/>
                </Col>
                <Col></Col>
                <Col xs="2" className="text-center">
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                </Col>
                <Col xs="2">
                    <button className={classes.bottom_line_btn}>受け入れ中</button>
                </Col>
            </Row> */}
            
            <Row className="mt-4 mb-32">
                <Col>
                    <ScoreBar className="mb-3" />
                    <ScoreBar/>
                </Col>
            </Row>
            
            <Row>
                <Col className="text-center pt-2">
                    <button className={classes.bottom_btn_submit}>次へ進む</button>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RateOfRiskPage;