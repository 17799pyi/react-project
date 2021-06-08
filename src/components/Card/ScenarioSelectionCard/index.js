import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


import smileImg from '../../../assets/images/icons/smile.png'
import NoSmileImg from '../../../assets/images/icons/nosmile.png'
import starImg from '../../../assets/images/icons/star.png'
import starImgWhite from '../../../assets/images/icons/star_white.png'
import MarkIcon from '../../../assets/images/mark_icon.svg'
import PlayIcon from '../../../assets/images/play_icon.svg'
import LockImage from '../../../assets/images/lock_icon.png'
import classes from './styles.module.css'
import { getPayOfNumber } from '../../../api/api'
import eventBus from '../../../EventBus'

function ScenarioSelectionCard({id, task, f_starCount, status}) {

    const { t } = useTranslation();
    const [payOfNumber, setPayOfNumber] = useState(0)
    let lastId = 0;
    const autoId = (prefix = '-card-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }

    const precisionPercentage = (task) => {
        if(task.highestScore)
        {
            return parseFloat(task.highestScore.precision).toFixed(2) * 100;
        }
        return 0;
    }

    const smileFace = (percent) => {
        return (parseFloat(percent).toFixed(0) <= 69) ? NoSmileImg : smileImg
    }

    useEffect(() => {
        // get pay of number api
        const setData = async () => {
            try {
                const data = getPayOfNumber(`tasks/${task.id}/chats/stats`).then(res => {
                    setPayOfNumber(res.data.length);
                })
            } catch (error) {
                eventBus.dispatch("something_went_wrong");
            }
        };
        setData()
    }, [task])

    const cardStar = (percent, task) => {
        let starCount = task.highestScore ? f_starCount(parseFloat(percent).toFixed(0)) : 0; //get full star count
        let starHtml = []
        for (let index = 0; index < starCount; index++) {
            //push full start count
            starHtml.push(<img className={classes.top_img} key={index} src={starImg} className="mr-1" id={autoId()}/>)
        }
        if(starCount < 3)
        {
            let starWhiteCount = 3 - starCount //get white star count
            
            for (let index = 0; index < starWhiteCount; index++) {
                //push white star count
                starHtml.push(<img className={classes.top_img} key={index+starCount} src={starImgWhite} className="mr-1" id={autoId()}/>)
            }
        }
        return starHtml
    }

    return (       
        <Link to={ (status && (precisionPercentage(task) >= 70)) ? `/rate-of-risk/${task.id}` : ''}>
        <div className={`${classes.scenario_selection_card} ${(!status) ? classes.disable : ''} ${(precisionPercentage(task) < 70) ? classes.cursor_not_allowed : ''}`} id={autoId()}>
            <img src={LockImage} alt="Lock Img" className={`${classes.lock_img}`} id={autoId()}/>
            <div className={classes.top_wrapper}>
                <Row>
                    <span className={classes.star_img} id={autoId()}>
                        {cardStar(precisionPercentage(task), task)}
                    </span>
                </Row>
                <Row>
                    <span className={`${classes.top_head_text} font-weight-bold`} id={autoId()}>
                        {task.folder}
                    </span>
                </Row>
                <Row>
                    <span className={`${classes.top_head_text} font-weight-bold`} id={autoId()}>
                        {/* {t('scenario.appointment_acquisition_call')} */}
                        {task.name}
                    </span>
                </Row>
            </div>
            <div className={classes.bottom_wrapper}>
                <div className={classes.bottom_flex}>
                    <div>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={autoId()}>
                            <img src={PlayIcon} alt="PlayIcon" className="mr-2"/>
                            <span>{t('scenario.number_of_implementations')}：{payOfNumber}回</span>
                        </p>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={autoId()}>
                            <img src={MarkIcon} alt="MarkIcon" className="mr-2"/>
                            <span>
                                {t('scenario.maximum_achievement_rate')}：{precisionPercentage(task)}％
                            </span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.bottom_img} src={smileFace(precisionPercentage(task))} id={autoId()}/>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ScenarioSelectionCard
