import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import HistoryButton from "../../../components/Button/HistoryButton"
import BackButton from "../../../components/Button/BackButton"
import BackgroundBlueLabel from "../../../components/Label/BackgroundBlueLabel"
import BackgroundBlueChip from "../../../components/Label/BackgroundBlueChip"
import BackgroundWhiteChip from "../../../components/Label/BackgroundWhiteChip"
import ScoreBar from "../../../components/ScoreBar"
import ChatLog from "./ChatLog"

import EvaluationIcon1 from "../../../assets/images/evaluation_icon3.svg"
import SampleChart from "../../../assets/images/sample_chart.png"
import './styles.css';

const AIScorePage = ({ }) => {

    const { t } = useTranslation();
    return (
        <>
        <Row className="align-items-center pb-3">
            <Col xs="5">
                <h3 className="mb-0">{t('aiscore.ai_scoring_result')}</h3>
            </Col>
            <Col xs="7" className="text-right">
                {/* <BackButton title="リトライ" className="mr-3"/> */}
                <HistoryButton title="リトライ" />
            </Col>
        </Row>
        <div className="cmn-bg-box mt-3">
            <Row>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr">
                        <div className="percentage_circle">
                            <div>
                                <div>
                                    <p>{t('aiscore.cicle_percentage.header_1')}</p>
                                    <p className="percent_txt mb-3">80%</p>
                                    <p>{t('aiscore.cicle_percentage.header_2')}</p>
                                    <p className="percent_txt">85%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr">
                        <p className="font-16 font-weight-bold text-center">{t('aiscore.chartbar.header')}</p>
                        <img src={SampleChart} alt="Sample Chart"/>
                    </div>
                </Col>
            </Row>
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3">{t('aiscore.score_by_process')}</p>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.process')} />
                    </Col>
                    <Col xs="8">
                        <BackgroundBlueLabel label={t('aiscore.evaluation')} />
                    </Col>
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.point')} />
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold mb-0">{t('aiscore.card_title.long_term_care_frequency')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            {/* <img src={EvaluationIcon1} alt="Evaluation Icon1" className="mw-100"/> */}
                            <p className="font-weight-bold mb-0 font-24">〇</p>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.lifespan_and_healthy_lifespan')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            <img src={EvaluationIcon1} alt="Evaluation Icon3" className="mw-100"/>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.long_term_care_causes')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            {/* <img src={EvaluationIcon3} alt="Evaluation Icon3" className="mw-100"/> */}
                            <p className="font-weight-bold mb-0 font-24">×</p>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')}className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-32">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.long_term_care_period')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            {/* <img src={EvaluationIcon3} alt="Evaluation Icon3" className="mw-100"/> */}
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2"/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2"/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2"/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-32">
                    <Col lg="11" className="mx-auto">
                        <ScoreBar className="mb-3" />
                        <ScoreBar/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="font-16 font-weight-bold mb-3">{t('aiscore.utterance')}</p>
                        <ChatLog/>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default AIScorePage;