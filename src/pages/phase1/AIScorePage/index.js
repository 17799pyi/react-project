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

import EvaluationIcon1 from "../../../assets/images/evaluation_icon1.png"
import EvaluationIcon2 from "../../../assets/images/evaluation_icon2.png"
import EvaluationIcon3 from "../../../assets/images/evaluation_icon3.png"
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
                <BackButton title="リトライ" className="mr-3"/>
                <HistoryButton title="履歴一覧" />
            </Col>
        </Row>
        <div className="cmn-bg-box mt-3">
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
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.long_term_care_frequency')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr text-center">
                            <img src={EvaluationIcon1} alt="Evaluation Icon1" className="mw-100"/>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3">
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
                        <div  className="cmn-bg-box-inr">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.lifespan_and_healthy_lifespan')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr text-center">
                            <img src={EvaluationIcon2} alt="Evaluation Icon2" className="mw-100"/>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3">
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
                        <div  className="cmn-bg-box-inr">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.long_term_care_causes')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr text-center">
                            <img src={EvaluationIcon3} alt="Evaluation Icon3" className="mw-100"/>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3">
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
                        <div  className="cmn-bg-box-inr">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-4">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">{t('aiscore.card_title.long_term_care_period')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr text-center">
                            {/* <img src={EvaluationIcon3} alt="Evaluation Icon3" className="mw-100"/> */}
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3">
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
                        <div  className="cmn-bg-box-inr">
                            <ul className="point-list">
                                <li>**</li>
                                <li>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
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