import React, { createRef, useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import ScenarioSelectionCard from '../../../../constituents/ICard/ScenarioSelectionCard'
import BackButton from "../../../../constituents/IButton/BackButton"
import GeneralButton from "../../../../constituents/IButton/GeneralButton"


import humanImg from '../../../../property/images/icons/scenario_selection_img2.png'
import NosmileImg from '../../../../property/images/icons/nosmile.png'
import smileImg from '../../../../property/images/icons/smile.png'
import starImg from '../../../../property/images/icons/star.png'
import ProgressImg from '../../../../property/images/progress_img.png'
import ChallengeIcon from '../../../../property/images/challenge_icon.png'
import { getLessonTask } from '../../../../request/api'
import eventShuttle from '../../../../eventShuttle'

import classes from './styles.module.css';
import { connect } from 'react-redux'
import { lessonTaskAll } from '../../../../storage/reduxActions/index'

const ScenariosSelectionPage = ({ className, style, onBack, showStep2, lessonId, lessonTaskAll }) => {

    const { t } = useTranslation();

    let lastId = 0;
    const autoId = (prefix = 'scenarios-selection-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    const [vProgress, setProgress] = useState(0)
    const [totalStar, setTotalStar] = useState(0)
    const [vReceiveTotalStar, setReceiveTotalStar] = useState(0)

    const [vTasks, setTasks] = useState([])
    const [vActiveTasks, setActiveTasks] = useState([])
    const [vCustomCardOpen, setCustomCardOpen] = useState(null)
    const [vLoading, setLoading] = useState(true)

    useEffect(() => {
        const setData = async () => {
            try {
                const data = getLessonTask(`lessons/${lessonId}/tasks`).then(res => {                
                    setTasks(res.data)
                    lessonTaskAll(res.data)
                    setLoading(false)
                })
            } catch (error) {
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        setData()
    }, [showStep2])

    useEffect(() => {
        if(vTasks.length)
        {
            let activeTask = vTasks.filter(function(task){
                if(task.highestScore)
                {
                    return task
                }
            })
            setActiveTasks(activeTask)
        }
    }, [vTasks])

    useEffect(() => {
        //get total percentage
        let totalStar = 0
        let passTask = 0
        setProgress(0)
        vTasks.map((task) => {
            if(task.highestScore)
            {
                totalStar += getStarScore(parseFloat(task.highestScore.precision*100))
            }
            if(task.highestScore)
            {
                if(task.highestScore.precision*100 >= 70)
                {
                    passTask+=1
                }
            }
        })
        setProgress((parseFloat(passTask/7).toFixed(2) * 100).toFixed(0))
        setReceiveTotalStar((parseFloat(totalStar/21).toFixed(2) * 100).toFixed(0))  //set fill star
        // setReceiveTotalStar(totalStar)  //set fill star
        setTotalStar((vActiveTasks.length)*3) //set total task star each of task has 3 star
    }, [vTasks, vActiveTasks])

    const getStarScore = (percent) => {
        //get fill star count
        let starCount = 0
        if(percent >= 0 && percent <= 69)
        {
            starCount = 1
        }else if(percent >= 70 && percent <= 84)
        {
            starCount = 2
        }else if(percent >= 85 && percent <= 100)
        {
            starCount = 3
        }
        return starCount
    }

    const cardStatus = (task, index) => {
        if(vCustomCardOpen == index)
        {
            return true;
        }
        if(task.highestScore){
            return true;
        }
        return false;
    }
    
    useEffect(() => {
        if(vTasks.length)
        {
            const unacitves = vTasks.map((task, index) => {
                if(task.highestScore)
                {
                    return index;
                }
            })
            const undefinedValue = unacitves.findIndex(function(e){
                return e == undefined;
            });
            setCustomCardOpen(undefinedValue)
        }  
    }, [vTasks])

    const getSmileOrSadCount = (activeTasks, progress) => {
        let count = activeTasks.filter(function(task){
            let percent = parseFloat(task.highestScore.precision).toFixed(2) * 100;
            // if(progress>=70)
            // {
                if(percent >= 70)
                {
                    return task;
                }
            // }
            // else{
            //     if(percent <= 69)
            //     {
            //         console.log('sad count')
            //         return task;
            //     }
            // }
        })
        return count;
    }

    return (
        <>
            <div className='cmn-bg-box'>
                <Row className="mb-32">
                    <Col>
                        <BackButton title={t('scenario.return')} className="mr-3" onClick={onBack}/>
                        {/* <GeneralButton title={t('scenario.role_play_started')} className="w-auto px-3" id=""/> */}
                    </Col>
                </Row>
                <div className="cmn-bg-box-inr pb-2">
                    <Row>
                        <Col xl="10">                            
                            <Row className="mb-32 align-items-end mt-3">
                                <Col lg="8" className="position-relative my-3 my-lg-0">
                                    <span className={`${classes.progress_bar_text} ${(vProgress >= 7) ? '' : classes.right_0}`} id="progress_text_above_7" name="progress_text_above_7">{t('scenario.progress')}</span>
                                    { vProgress ?
                                        <div className={classes.progress_bar_img} style={{left: vProgress + '%'}}>
                                            <img src={ProgressImg} alt="progress_img" id={autoId()} id="progress_img" name="progress_img"/>
                                            <p className={`${classes.progress_bar_msg} ${(vProgress == 100) ? 'd-none':(vProgress >= 95 && vProgress < 100)? classes.msg_left:'' }`} id="progress_text" name="progress_text">今日もがんばろう！</p>
                                        </div>
                                        : ''
                                    }                                    
                                    <div className={classes.progress_bar}>
                                    { vProgress ?
                                        <span className={classes.progress_bar_per} style={{width: vProgress + '%'}} id="progress_bar" name="progress_bar"></span>
                                        : ''
                                    }
                                    <img src={ChallengeIcon} alt="challenge_icon" className={`${classes.progress_bar_challenge} ${(vProgress >= 95) ? 'd-none' : ''}`}  id="challenge_icon" name="challenge_icon"/>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <table className={`table mb-0 ${classes.roleplay_step2_tb}`} id="progress_table" name="progress_table">
                                        <tbody>
                                            <tr id="progress_table_tr_1" name="progress_table_tr_1">
                                                <td rowSpan="2" id="progress_table_td_1" name="progress_table_td_1">
                                                    <img src={smileImg} alt="Smile Image" id={autoId()}/>
                                                    {/* <img src={(progress>=70)? smileImg : NosmileImg} alt="Smile Image" id={autoId()}/> */}
                                                    <span className="ml-2 font-weight-bold font-16" id="smile_count" name="smile_count">{getSmileOrSadCount(vActiveTasks, vProgress).length}</span>
                                                </td>
                                                <td className="font-weight-bold font-16" id="precision_percent" name="precision_percent">{vProgress}%</td>
                                            </tr>
                                            <tr id="progress_table_tr_2" name="progress_table_tr_2">
                                                <td rowSpan="2"id="progress_table_td_2" name="progress_table_td_2">                                          
                                                    <img src={starImg} alt="star_icon" className={classes.start_img} id="star_icon" name="star_icon"/>
                                                    <span className="ml-2 font-weight-bold font-16" id="star_count" name="star_count">({vReceiveTotalStar}/<span className={classes.black_circle}></span>)</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="smallest-padding-box pt-2" id="scenario_selection_card_container" name="scenario_selection_card_container">
                                {
                                    !vLoading ?
                                    vTasks.map((task, index) => {
                                        return  <Col xl="4" lg="6" className="mb-3" key={task.id}>
                                                    <ScenarioSelectionCard 
                                                        status={cardStatus(task, index)}
                                                        f_starCount={getStarScore}
                                                        task={task}
                                                        index={index}
                                                    />
                                                </Col>
                                    })
                                    : 'loading...'
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
const stateToProps = state => {
    return {
        lesson_task_all: state.lesson_task_all,
    }
}

const dispatchToProps = dispatch => {
    return {
        lessonTaskAll: (lesson_task_all) => {
            dispatch(lessonTaskAll(lesson_task_all));
        }
    }
}

export default connect(stateToProps, dispatchToProps)(ScenariosSelectionPage)