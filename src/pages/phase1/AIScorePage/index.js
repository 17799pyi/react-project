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
                <h3 className="mb-0">AI採点結果</h3>
            </Col>
            <Col xs="7" className="text-right">
                <BackButton title="リトライ" className="mr-3"/>
                <HistoryButton title="履歴一覧" />
            </Col>
        </Row>
        <div className="cmn-bg-box mt-3">
            <div className="cmn-bg-box-inr">
                <p className="font-16 font-weight-bold mb-3">スコア(プロセス別)</p>
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2">
                        <BackgroundBlueLabel label="プロセス" />
                    </Col>
                    <Col xs="8">
                        <BackgroundBlueLabel label="評価" />
                    </Col>
                    <Col xs="2">
                        <BackgroundBlueLabel label="ポイント" />
                    </Col>
                </Row>
                <Row className="smallest-padding-box02 mb-3">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">介護の発生頻度</p>
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
                                <BackgroundBlueChip label="がんという病気" className="mr-2"/>
                                <BackgroundWhiteChip label="2人に1人" className="mr-2"/>
                                <BackgroundBlueChip label="がんの発生率" className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label="年齢とともに高く" className="mr-2"/>
                                <BackgroundWhiteChip label="平均在院日数" className="mr-2"/>
                                <BackgroundBlueChip label="高齢" className="mr-2"/>
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
                <Row className="smallest-padding-box02 mb-3">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">寿命と健康的な寿命</p>
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
                                <BackgroundBlueChip label="がんという病気" className="mr-2"/>
                                <BackgroundWhiteChip label="2人に1人" className="mr-2"/>
                                <BackgroundBlueChip label="がんの発生率" className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label="年齢とともに高く" className="mr-2"/>
                                <BackgroundWhiteChip label="平均在院日数" className="mr-2"/>
                                <BackgroundBlueChip label="高齢" className="mr-2"/>
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
                <Row className="smallest-padding-box02 mb-3">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">介護の原因</p>
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
                                <BackgroundBlueChip label="がんという病気" className="mr-2"/>
                                <BackgroundWhiteChip label="2人に1人" className="mr-2"/>
                                <BackgroundBlueChip label="がんの発生率" className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label="年齢とともに高く" className="mr-2"/>
                                <BackgroundWhiteChip label="平均在院日数" className="mr-2"/>
                                <BackgroundBlueChip label="高齢" className="mr-2"/>
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
                <Row className="smallest-padding-box02 mb-3">
                    <Col xs="2" className="d-flex">
                        <div  className="cmn-bg-box-inr">
                            <p className="font-16 font-weight-bold">介護期間</p>
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
                                <BackgroundBlueChip label="がんという病気" className="mr-2"/>
                                <BackgroundWhiteChip label="2人に1人" className="mr-2"/>
                                <BackgroundBlueChip label="がんの発生率" className="mr-2"/>
                            </div>
                            <div>
                                <BackgroundBlueChip label="年齢とともに高く" className="mr-2"/>
                                <BackgroundWhiteChip label="平均在院日数" className="mr-2"/>
                                <BackgroundBlueChip label="高齢" className="mr-2"/>
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
                        <p className="font-16 font-weight-bold">発話箇所</p>
                        <ChatLog/>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default AIScorePage;