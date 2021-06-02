import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import ScenarioSelectionCard from '../../../../components/Card/ScenarioSelectionCard'
import BackButton from "../../../../components/Button/BackButton"
import GeneralButton from "../../../../components/Button/GeneralButton"


import humanImg from '../../../../assets/images/icons/scenario_selection_img2.png'
import NosmileImg from '../../../../assets/images/icons/nosmile.png'
import smileImg from '../../../../assets/images/icons/smile.png'
import starImg from '../../../../assets/images/icons/star.png'
import ProgressImg from '../../../../assets/images/progress_img.png'
import ChallengeIcon from '../../../../assets/images/challenge_icon.png'
import { getLessonTask } from '../../../../api/api'
import eventBus from '../../../../EventBus'

import classes from './styles.module.css';

const ScenariosSelectionPage = ({ className, style, onBack, showStep2 }) => {

    const { t } = useTranslation();

    let lastId = 0;
    const autoId = (prefix = 'scenarios-selection-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    const prog_per = 95

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const setData = async () => {
            try {
                const data = getLessonTask('lessons/7/tasks').then(res => {
                    setTasks(res.data)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        setData()
    }, [showStep2])

    return (
       
        <>
            <div className='cmn-bg-box'>
                <Row className="mb-32">
                    <Col>
                        <BackButton title={t('scenario.return')} className="mr-3" onClick={onBack} id={autoId()}/>
                        {/* <GeneralButton title={t('scenario.role_play_started')} className="w-auto px-3"/> */}
                    </Col>
                </Row>
                <div className="cmn-bg-box-inr pb-2">
                    <Row>
                        <Col xl="10">                            
                            <Row className="mb-32 align-items-end mt-3">
                                <Col lg="8" className="position-relative my-3 my-lg-0">
                                    <span className={`${classes.progress_bar_text} ${(prog_per >= 7) ? '' : classes.right_0}`} id={autoId()}>{t('scenario.progress')}</span>
                                    { prog_per ?
                                        <div className={classes.progress_bar_img} style={{left: prog_per + '%'}}>
                                            <img src={ProgressImg} alt="ProgressImg" id={autoId()}/>
                                            <p className={`${classes.progress_bar_msg} ${(prog_per == 100) ? 'd-none':(prog_per >= 95 && prog_per < 100)? classes.msg_left:'' }`} id={autoId()}>今日もがんばろう！</p>
                                        </div>
                                        : ''
                                    }                                    
                                    <div className={classes.progress_bar}>
                                    { prog_per ?
                                        <span className={classes.progress_bar_per} style={{width: prog_per + '%'}} id={autoId()}></span>
                                        : ''
                                    }
                                    <img src={ChallengeIcon} alt="ChallengeIcon" className={`${classes.progress_bar_challenge} ${(prog_per >= 95) ? 'd-none' : ''}`}  id={autoId()}/>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <table className={`table mb-0 ${classes.roleplay_step2_tb}`} id={autoId()}>
                                        <tr id={autoId()}>
                                            <td rowspan="2" id={autoId()}>
                                                <img src={(prog_per>=70)? smileImg : NosmileImg} alt="Smile Image" id={autoId()}/>
                                                <span className="ml-2 font-weight-bold font-16" id={autoId()}>8</span>
                                            </td>
                                            <td className="font-weight-bold font-16" id={autoId()}>{prog_per}%</td>
                                        </tr>
                                        <tr id={autoId()}>
                                            <td id={autoId()}>                                                
                                                <img src={starImg} alt="Star Image" className={classes.start_img} id={autoId()}/>
                                                <span className="ml-2 font-weight-bold font-16" id={autoId()}>(3/1)</span>
                                            </td>
                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="smallest-padding-box pt-2">
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="active" id={autoId()}/>
                                </Col>
                                {/* {
                                    tasks.length ?
                                    tasks.map((task) => {
                                        return <Col xl="4" lg="6" className="mb-3">
                                                    <ScenarioSelectionCard status1="test"/>
                                                </Col>
                                    })
                                    : 'loading...'
                                } */}
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="active" id={autoId()}/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="active" id={autoId()}/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="lock" id={autoId()}/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="lock" id={autoId()}/>
                                </Col>
                                <Col xl="4" lg="6" className="mb-3">
                                    <ScenarioSelectionCard status="lock" id={autoId()}/>
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