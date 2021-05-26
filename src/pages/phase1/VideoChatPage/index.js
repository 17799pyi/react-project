import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import Checkbox from "../../../components/Checkbox"
import InsuranceTypeLabel from "../../../components/Label/InsuranceTypeLabel"
import BackButton from "../../../components/Button/BackButton"
import HistoryButton from "../../../components/Button/HistoryButton"
import GeneralButton from "../../../components/Button/GeneralButton"
import GeneralTextbox from "../../../components/Textboxes/GeneralTextbox"

import PdfIcon from "../../../assets/images/icons/pdf_icon.png"
import ChatPeople1 from "../../../assets/images/chat_people01.png"
import ChatPeople2 from "../../../assets/images/chat_people02.png"
import MicIcon from "../../../assets/images/icons/mic_icon.png"
import TimeIcon from "../../../assets/images/icons/time_icon.png"
import './styles.css';

const VideoChatPage = ({ }) => {

    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col lg="4">
                    <h3 className="mb-32">ロープレ実施中</h3>
                    <div className="cmn-bg-box mb-3 pb-2">
                        <Row>
                            <Col>
                                <div className="mb-24">
                                    <p className="font-16 font-weight-bold mb-3">実施中のシナリオ</p>
                                    <InsuranceTypeLabel label="実施中のシナリオ" />
                                </div>
                                <div>
                                    <p className="font-16 font-weight-bold mb-3">処理する</p>
                                    <div className="cmn-bg-box-inr p-3 mb-3">
                                        {/* <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold">介護の発生頻度</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={`style-1`}
                                            />
                                        }/>   */}
                                    </div>
                                    <div className="cmn-bg-box-inr p-3 mb-3">
                                        {/* <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold">寿命と健康的な寿命</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={`style-1`}
                                            />
                                        }/>   */}
                                    </div>
                                    <div className="cmn-bg-box-inr p-3 mb-3">
                                        {/* <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold">介護の原因</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={`style-1`}
                                            />
                                        }/>   */}
                                    </div>
                                    <div className="cmn-bg-box-inr p-3 mb-3">
                                        {/* <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold">介護期間</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={`style-1`}
                                            />
                                        }/>   */}
                                    </div>
                                </div>
                            </Col>
                        </Row>                    
                    </div>
                    <div className="cmn-bg-box">
                        <p className="font-16 font-weight-bold mb-3">採用資料</p>
                        <Row className="smallest-padding-box01">
                            <Col md="3" sm="4">
                                <a><img src={PdfIcon} alt="Pdf Icon"/></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a><img src={PdfIcon} alt="Pdf Icon"/></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a><img src={PdfIcon} alt="Pdf Icon"/></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="chat_img_sec mb-3">
                        <img src={ChatPeople1} alt="Chat People" className="main_chat_people"/>
                        <div className="chat_people_box">
                            <img src={ChatPeople2} alt="Chat People" className="main_chat_people"/>
                        </div>
                    </div>
                    <div className="mb-32 chat_text_box">
                        <input type="text" placeholder="応答" className=""/>
                        <img src={MicIcon} alt="Mic Icon" />
                    </div>
                    <div className="text-right">
                        <img src={TimeIcon} alt="Time Icon" />
                        {/* <GeneralTextbox value="00 : 32" className="w-auto"/> */}
                        <input type="text" value="00 : 32" className="time_text_box ml-2"/>
                        <BackButton title="ブレーク" className="ml-4"/>     
                        <GeneralButton title="履歴書" className="mx-2"/>                   
                        <HistoryButton title="採点する"/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

const styles = {
    root: {
        marginLeft: 0,
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    container: {
        width: '100%',
        padding: 10,
        display: 'flex',
        alignItems: 'stretch',
    },
    label: {
        marginButtom: 0,
        fontSize: '16px',
        paddingLeft: 8
    }
};
export default VideoChatPage;