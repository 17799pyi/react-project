import React, { createRef, useState, useEffect, useRef, useCallback } from 'react';
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
import { connect } from 'react-redux'
import { lessonTaskAll } from '../../../../store/actions/index'

const ScenariosSelectionPage = ({ className, style, onBack, showStep2, lessonId, lessonTaskAll }) => {

    const { t } = useTranslation();

    let lastId = 0;
    const autoId = (prefix = 'scenarios-selection-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    const [progress, setProgress] = useState(0)
    const [totalStar, setTotalStar] = useState(0)
    const [receiveTotalStar, setReceiveTotalStar] = useState(0)

    const [tasks, setTasks] = useState([])
    const [activeTasks, setActiveTasks] = useState([])
    const [customCardOpen, setCustomCardOpen] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const setData = async () => {
            try {
                const data = getLessonTask(`lessons/${lessonId}/tasks`).then(res => {
                    setTasks(res.data)
                    lessonTaskAll(res.data)
                    setLoading(false)
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        setData()
    }, [showStep2])

    useEffect(() => {
        if(tasks.length)
        {
            let activeTask = tasks.filter(function(task){
                if(task.highestScore)
                {
                    return task
                }
            })
            setActiveTasks(activeTask)
        }
    }, [tasks])

    useEffect(() => {
        //get total percentage
        let totalStar = 0
        let passTask = 0
        setProgress(0)
        tasks.map((task) => {
            if(task.highestScore)
            {
                totalStar+=getStarCount(parseFloat(task.highestScore.precision*100))
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
        setTotalStar((activeTasks.length)*3) //set total task star each of task has 3 star
    }, [tasks, activeTasks])

    const getStarCount = (percent) => {
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
        if(customCardOpen == index)
        {
            return true;
        }
        if(task.highestScore){
            return true;
        }
        return false;
    }
    
    useEffect(() => {
        if(tasks.length)
        {
            const unacitves = tasks.map((task, index) => {
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
    }, [tasks])

    const getSmileAndSadCount = (activeTasks, progress) => {
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
                        <BackButton title={t('scenario.return')} className="mr-3" onClick={onBack} id={autoId()}/>
                        {/* <GeneralButton title={t('scenario.role_play_started')} className="w-auto px-3"/> */}
                    </Col>
                </Row>
                <div className="cmn-bg-box-inr pb-2">
                    <Row>
                        <Col xl="10">                            
                            <Row className="mb-32 align-items-end mt-3">
                                <Col lg="8" className="position-relative my-3 my-lg-0">
                                    <span className={`${classes.progress_bar_text} ${(progress >= 7) ? '' : classes.right_0}`} id={autoId()}>{t('scenario.progress')}</span>
                                    { progress ?
                                        <div className={classes.progress_bar_img} style={{left: progress + '%'}}>
                                            <img src={ProgressImg} alt="ProgressImg" id={autoId()}/>
                                            <p className={`${classes.progress_bar_msg} ${(progress == 100) ? 'd-none':(progress >= 95 && progress < 100)? classes.msg_left:'' }`} id={autoId()}>今日もがんばろう！</p>
                                        </div>
                                        : ''
                                    }                                    
                                    <div className={classes.progress_bar}>
                                    { progress ?
                                        <span className={classes.progress_bar_per} style={{width: progress + '%'}} id={autoId()}></span>
                                        : ''
                                    }
                                    <img src={ChallengeIcon} alt="ChallengeIcon" className={`${classes.progress_bar_challenge} ${(progress >= 95) ? 'd-none' : ''}`}  id={autoId()}/>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <table className={`table mb-0 ${classes.roleplay_step2_tb}`} id={autoId()}>
                                        <tbody>
                                            <tr id={autoId()}>
                                                <td rowSpan="2" id={autoId()}>
                                                    <img src={smileImg} alt="Smile Image" id={autoId()}/>
                                                    {/* <img src={(progress>=70)? smileImg : NosmileImg} alt="Smile Image" id={autoId()}/> */}
                                                    <span className="ml-2 font-weight-bold font-16" id={autoId()}>{getSmileAndSadCount(activeTasks, progress).length}</span>
                                                </td>
                                                <td className="font-weight-bold font-16" id={autoId()}>{progress}%</td>
                                            </tr>
                                            <tr id={autoId()}>
                                                <td id={autoId()}>                                                
                                                    <img src={starImg} alt="Star Image" className={classes.start_img} id={autoId()}/>
                                                    <span className="ml-2 font-weight-bold font-16" id={autoId()}>({receiveTotalStar}/<span className={classes.black_circle}></span>)</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                            </Row>
                            <Row className="smallest-padding-box pt-2">
                                {
                                    !loading ?
                                    tasks.map((task, index) => {
                                        return  <Col xl="4" lg="6" className="mb-3" key={task.id}>
                                                    <ScenarioSelectionCard status={cardStatus(task, index)} f_starCount={getStarCount} task={task} id={autoId()}/>
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