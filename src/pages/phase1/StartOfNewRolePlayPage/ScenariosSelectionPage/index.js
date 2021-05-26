import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import ScenarioSelectionCard from '../../../../components/Card/ScenarioSelectionCard'
import BackButton from "../../../../components/Button/BackButton"
import GeneralButton from "../../../../components/Button/GeneralButton"


import humanImg from '../../../../assets/images/icons/scenario_selection_img.png'
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
                        <GeneralButton title={t('scenario.role_play_started')} className="w-auto px-3"/>
                    </Col>
                </Row>
                <div className="cmn-bg-box-inr pb-2">
                    <Row>
                        <Col xl="10">                            
                            <Row className="mb-32 align-items-end">
                                <Col md="2" sm="4" xs="4">
                                    <img src={humanImg} className={`mw-100 ${classes.human_img}`} />
                                </Col>
                                <Col lg="6" className="position-relative my-3 my-lg-0">
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
                                    {/* <div className={classes.percent_content}>
                                        <div className={classes.percent_content_left}>
                                            <img src={smileImg} className={classes.w_6} />
                                            <span className={classes.percent_content_text}>8</span>
                                        </div>
                                        <div className={classes.percent_content_right}>
                                            <p className={classes.right_top}>30%</p>
                                            <p className={classes.right_bottom}>
                                                <img src={starImg} className={classes.w_14} />
                                                <span className={classes.percent_content_text}>(3/1)</span>
                                            </p>
                                        </div>
                                    </div> */}
                                    <table className={`table ${classes.roleplay_step2_tb}`}>
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
                                <Col lg="4" md="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col lg="4" md="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col lg="4" md="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col lg="4" md="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col lg="4" md="6" className="mb-3">
                                    <ScenarioSelectionCard/>
                                </Col>
                                <Col lg="4" md="6" className="mb-3">
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