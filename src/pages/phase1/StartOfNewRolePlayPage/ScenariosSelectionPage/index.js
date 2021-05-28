import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import ScenarioSelectionCard from '../../../../components/Card/ScenarioSelectionCard'
import BackButton from "../../../../components/Button/BackButton"
import GeneralButton from "../../../../components/Button/GeneralButton"


import humanImg from '../../../../assets/images/icons/scenario_selection_img2.png'
import smileImg from '../../../../assets/images/icons/smile.png'
import starImg from '../../../../assets/images/icons/star.png'
import ProgressImg from '../../../../assets/images/progress_img.png'


import classes from './styles.module.css';

const ScenariosSelectionPage = ({ className, style, onBack }) => {

    const { t } = useTranslation();
    const prog_per = 30;
    return (
       
        <>
            <div className='cmn-bg-box'>
                <Row className="mb-32">
                    <Col>
                        <BackButton title={t('scenario.return')} className="mr-3" onClick={onBack}/>
                        {/* <GeneralButton title={t('scenario.role_play_started')} className="w-auto px-3"/> */}
                    </Col>
                </Row>
                <div className="cmn-bg-box-inr pb-2">
                    <Row>
                        <Col xl="10">                            
                            <Row className="mb-32 align-items-end">
                                <Col xl="1" lg="2" sm="4" xs="4" className="text-center">
                                    <img src={humanImg} className={`${classes.human_img}`} />
                                </Col>
                                <Col xl="7" lg="6" className="position-relative my-3 my-lg-0">
                                    <span className={`${classes.progress_bar_text} ${(prog_per >= 20) ? '' : classes.right_0}`}>{t('scenario.progress')}</span>
                                    { prog_per ?
                                        <img src={ProgressImg} alt="ProgressImg" className={classes.progress_bar_img} style={{left: prog_per + '%'}}/>
                                        : ''
                                    }                                    
                                    <div className={classes.progress_bar}>
                                    { prog_per ?
                                        <span className={classes.progress_bar_per} style={{width: prog_per + '%'}}></span>
                                        : ''
                                    }
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <table className={`table mb-0 ${classes.roleplay_step2_tb}`}>
                                        <tr>
                                            <td rowspan="2">
                                                <img src={smileImg} alt="Smile Image"/>
                                                <span className="ml-2 font-weight-bold font-16">8</span>
                                            </td>
                                            <td className="font-weight-bold font-16">30%</td>
                                        </tr>
                                        <tr>
                                            <td>                                                
                                                <img src={starImg} alt="Star Image"/>
                                                <span className="ml-2 font-weight-bold font-16">(3/1)</span>
                                            </td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="smallest-padding-box pt-2">
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ScenariosSelectionPage;