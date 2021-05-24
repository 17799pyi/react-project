import classes from './styles.module.css'
import React from 'react'
import { Row, Col } from 'reactstrap';
import sample1_img from '../../assets/images/smaple_1.png'
import smileImg from '../../assets/icons/smile.png'
import starImg from '../../assets/icons/star.png'

function RateOfRisk() {
    return (
        <div className={classes.rate_of_risk_container} >
            <div className={`p-4 ${classes.content}`}>
                <Row className="mt-1">
                    <Col xs="3">
                        <span className={classes.top_btn}>処理する</span>
                    </Col>
                    <Col xs="3">
                        <span className={classes.top_btn}>ポイント</span>
                    </Col>
                    <Col xs="6">
                        <span className={classes.top_btn}>使用する材料・ツール</span>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="3">
                        <div className={`${classes.content_bottom_extra} ${classes.top_btn}`}>介護の発生頻度</div>
                    </Col>
                    <Col xs="3">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li>sdvsdvd</li>
                                <li>sdvsdvd</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li className="mt-1">
                                    <span>xxx</span>
                                    <img src={sample1_img} className="ml-2"/>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="3">
                        <div className={`${classes.content_bottom_extra} ${classes.top_btn}`}>寿命と健康的な寿命</div>
                    </Col>
                    <Col xs="3">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li>sdvsdvd</li>
                                <li>sdvsdvd</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li className="mt-1">
                                    <span>xxx</span>
                                    <img src={sample1_img} className="ml-2"/>
                                    <img src={sample1_img} className="ml-2"/>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="3">
                        <div className={`${classes.content_bottom_extra} ${classes.top_btn}`}>寿命と健康的な寿命</div>
                    </Col>
                    <Col xs="3">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li>sdvsdvd</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className={classes.content_outline}>
                            -
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="3">
                        <div className={`${classes.content_bottom_extra} ${classes.top_btn}`}>寿命と健康的な寿命</div>
                    </Col>
                    <Col xs="3">
                        <div className={classes.content_outline}>
                            <ul className={classes.content_list}>
                                <li>sdvsdvd</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className={classes.content_outline}>
                            -
                        </div>
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
                </Row>
                
                <Row>
                    <button className={classes.bottom_btn_submit}>次へ進む</button>
                </Row>
            </div>
        </div>
    )
}

export default RateOfRisk
