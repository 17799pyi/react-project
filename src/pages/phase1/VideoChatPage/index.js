import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Checkbox from "../../../components/Checkbox"
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
import WebCam from '../../../components/WebCam/Index';

const VideoChatPage = () => {

    const { t } = useTranslation();
    
    let lastId = 0;
    const autoId = (prefix = 'video-chat-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    
    return (
        <>
            <Row>
                <Col lg="4" className="mb-3 m-lg-0">
                    <h3 className="mb-32" id={autoId()}>{t('videochat.role_play_implmenting')}</h3>
                    <div className="cmn-bg-box mb-3 px-4 pt-4 pb-2">
                        <Row>
                            <Col>
                                <div className="mb-4">
                                    <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.ongoing_section')}</p>
                                    <InsuranceTypeLabel label={t('videochat.current_long_term_care_insurance')} className="mb-0 font-weight-bold" id={autoId()}/>
                                </div>
                                <div>
                                    <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.process')}</p>
                                    <div className="cmn-bg-box-inr px-2 py-3 mb-3">
                                        <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold" id={autoId()}>{t('videochat.frequency_long_term_care')}</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={autoId()}
                                            />
                                        }/>  
                                    </div>
                                    <div className="cmn-bg-box-inr px-2 py-3 mb-3">
                                        <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold" id={autoId()}>{t('videochat.lifespan_and_helthy_lifespan')}</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={autoId()}
                                            />
                                        }/>  
                                    </div>
                                    <div className="cmn-bg-box-inr px-2 py-3 mb-3">
                                        <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold" id={autoId()}>{t('videochat.causes_long_term_care')}</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={autoId()}
                                            />
                                        }/>  
                                    </div>
                                    <div className="cmn-bg-box-inr px-2 py-3 mb-3">
                                        <FormControlLabel style={styles.root}  label={<span style={styles.label} className="font-weight-bold" id={autoId()}>{t('videochat.period_long_term_care')}</span>}  control={
                                            <Checkbox
                                                value="1"
                                                name="checkbox-button"
                                                color="default"
                                                id={autoId()}
                                            />
                                        }/>  
                                    </div>
                                </div>
                            </Col>
                        </Row>                    
                    </div>
                    <div className="cmn-bg-box p-4">
                        <p className="font-16 font-weight-bold mb-3" id={autoId()}>{t('videochat.sale_tools')}</p>
                        <Row className="smallest-padding-box01">
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()}/></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()}/></a>
                            </Col>
                            <Col md="3" sm="4">
                                <a href="#"><img src={PdfIcon} alt="Pdf Icon" id={autoId()}/></a>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="chat_img_sec mb-3">
                        <img src={ChatPeople1} alt="Chat People" className="main_chat_people" id={autoId()}/>
                        <p className="start_text" id={autoId()}>{t('videochat.let_get_started')}</p>
                        <div className="chat_people_box">
                            {/* <WebCam /> */}
                            <img src={ChatPeople2} alt="Chat People" className="" id={autoId()}/>
                        </div>
                    </div>
                    <div className="mb-32 chat_text_box">
                        <input type="text" placeholder={t('videochat.reply')} className="" id={autoId()}/>
                        <img src={MicIcon} alt="Mic Icon" id={autoId()}/>
                    </div>
                    <div className="text-right">
                        <img src={TimeIcon} alt="Time Icon" id={autoId()}/>
                        {/* <GeneralTextbox value="00 : 32" className="w-auto"/> */}
                        <input type="text" value="00 : 32" className="time_text_box ml-2" id={autoId()}/>
                        <div className="d-block d-lg-inline-block mt-3 mt-lg-0">
                            <BackButton title={t('videochat.break')} className="ml-4" id={autoId()}/>     
                            <GeneralButton title={t('videochat.resume')} className="mx-2" id={autoId()}/>                   
                            <Link to="/RateOfRisk"><HistoryButton title={t('videochat.score')} id={autoId()}/></Link>
                        </div>
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
        alignItems: 'start',
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