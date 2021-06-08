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
import SampleChart2 from "../../../assets/images/sample_chart2.png"
import classes from './styles.module.css';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { CircularProgressbar, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { getRateOfRiskCirclePercent, getRateOfRiskScoreBar } from '../../../api/api'
import eventBus from '../../../EventBus'

const AIScorePage = () => {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'ai-score-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    let { taskID } = useParams();
    const [precisionPercent, setPrecisionPercent] = useState(0);
    const [bestUserPrecision, setBestUserPrecision] = useState(0);
    const [scores, setScores] = useState([]);
    
    useEffect(() => {
        const setPercentData = async () => {
            try {
                const data = getRateOfRiskCirclePercent(taskID).then(res => {
                    setPrecisionPercent(res.data.precision*100)
                    setBestUserPrecision(res.data.bestUserPrecision*100)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        setPercentData()
        const scoreBarData = async () => {
            try {
                const data = getRateOfRiskScoreBar(taskID).then(res => {
                    console.log(res, 'score')
                    setScores(res.data)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        scoreBarData()
    }, [taskID])
    
    console.log(taskID, 'taskID')


    
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
                        {/* <div className="percentage_circle">
                            <div>
                                <div>
                                    <p id={autoId()}>{t('aiscore.cicle_percentage.header_1')}</p>
                                    <p className="percent_txt mb-3" id={autoId()}>80%</p>
                                    <p id={autoId()}>{t('aiscore.cicle_percentage.header_2')}</p>
                                    <p className="percent_txt" id={autoId()}>85%</p>
                                </div>
                            </div>
                        </div> */}
                        <div className={classes.inner_circle_wrapper}>
                            <CircularProgressbarWithChildren value={precisionPercent} styles={{
                                path: {
                                    // Path color
                                    stroke: '#00A5D9',
                                    strokeLinecap: 'unset',
                                },
                                trail: {
                                    stroke: '#E9FAFF',
                                    strokeLinecap: 'unset',
                                }
                            }}>
                                <div className={classes.inner_circle}>
                                    <div className={classes.inner_circle_text_content}>
                                        <span className={classes.inner_circle_text}>Correct Answer Rate</span>
                                        <span className={classes.inner_circle_p_text}>{precisionPercent}%</span>
                                    </div>
                                    <div className={classes.inner_circle_text_content}>
                                        <span className={classes.inner_circle_text}>Personal Best of Time</span>
                                        <span className={classes.inner_circle_p_text}>{bestUserPrecision}%</span>
                                    </div>
                                </div>
                            </CircularProgressbarWithChildren>
                            {/* <CircularProgressbar value={circlePercentage} text={`${circlePercentage}%`} /> */}
                        </div>
                        {/* <img src={SampleChart2} alt="Sample Chart" className="d-block mx-auto" id={autoId()} /> */}
                    </div>           
                </Col>
                <Col lg="6" className="mb-4 d-flex">
                    <div className="cmn-bg-box-inr">
                        <p className="font-16 font-weight-bold text-center" id={autoId()}>{t('aiscore.chartbar.header')}</p>
                        <img src={SampleChart} alt="Sample Chart" className="d-block mx-auto" id={autoId()}/>
                    </div>
                </Col>
            </Row>
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('aiscore.score_by_process')}</p>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.process')} id={autoId()}/>
                    </Col>
                    <Col xs="8">
                        <BackgroundBlueLabel label={t('aiscore.evaluation')} id={autoId()}/>
                    </Col>
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.point')} id={autoId()}/>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold mb-0" id={autoId()}>{t('aiscore.card_title.long_term_care_frequency')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            <p className="font-weight-bold mb-0 font-24" id={autoId()}>〇</p>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2" id={autoId()}/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2" id={autoId()}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li id={autoId()}>**</li>
                                <li id={autoId()}>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold" id={autoId()}>{t('aiscore.card_title.lifespan_and_healthy_lifespan')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            <img src={EvaluationIcon1} alt="Evaluation Icon3" className="mw-100" id={autoId()}/>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2" id={autoId()}/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2" id={autoId()}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li id={autoId()}>**</li>
                                <li id={autoId()}>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold" id={autoId()}>{t('aiscore.card_title.long_term_care_causes')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                            <p className="font-weight-bold mb-0 font-24" id={autoId()}>×</p>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2" id={autoId()}/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')}className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2" id={autoId()}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li id={autoId()}>**</li>
                                <li id={autoId()}>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-32">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                            <p className="font-16 font-weight-bold" id={autoId()}>{t('aiscore.card_title.long_term_care_period')}</p>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16" id={autoId()}>
                        </div>
                    </Col>
                    <Col xs="6" className="d-flex">
                        <div  className="cmn-bg-box-inr pb-3 px-32">
                            <div>
                                <BackgroundBlueChip label={t('aiscore.disease_called_cancer')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.two_in_one')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.cancer_incidence')} className="mr-2" id={autoId()}/>
                            </div>
                            <div>
                                <BackgroundBlueChip label={t('aiscore.higher_with_age')} className="mr-2" id={autoId()}/>
                                <BackgroundWhiteChip label={t('aiscore.average_no_of_days_hospital')} className="mr-2" id={autoId()}/>
                                <BackgroundBlueChip label={t('aiscore.elderly')} className="mr-2" id={autoId()}/>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                            <ul className="point-list">
                                <li id={autoId()}>**</li>
                                <li id={autoId()}>**</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-32">
                    <Col xl="10" className="mx-auto">
                        {
                            scores.length ?
                            scores.map((item, index) => {
                                return <ScoreBar key={index} className="mb-3" item={item} id={autoId()}/>
                            })
                            :
                            'Loading'
                        }
                        {/* <ScoreBar className="mb-3" percentage="80" id={autoId()}/>
                        <ScoreBar percentage="60" id={autoId()}/> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('aiscore.utterance')}</p>
                        <ChatLog id={autoId()}/>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default AIScorePage;