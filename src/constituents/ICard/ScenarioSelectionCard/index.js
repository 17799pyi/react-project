import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


import smileImg from '../../../property/images/icons/smile.png'
import NoSmileImg from '../../../property/images/icons/nosmile.png'
import starImg from '../../../property/images/icons/star.png'
import starImgWhite from '../../../property/images/icons/star_white.png'
import MarkIcon from '../../../property/images/mark_icon.svg'
import PlayIcon from '../../../property/images/play_icon.svg'
import LockImage from '../../../property/images/lock_icon.png'
import classes from './styles.module.css'
import { getPayOfNumber } from '../../../request/api'
import eventShuttle from '../../../eventShuttle'

function ScenarioSelectionCard({task, f_starCount, status, index}) {

    const { t } = useTranslation();
    const [payOfNumber, setPayOfNumber] = useState(0)

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
                eventShuttle.dispatch("something_went_wrong");
            }
        };
        setData()
    }, [task])

    const cardStar = (percent, task, cardIndex) => {
        let starCount = task.highestScore ? f_starCount(parseFloat(percent).toFixed(0)) : 0; //get full star count
        let starHtml = []
        for (let index = 0; index < starCount; index++) {
            //push full start count
            starHtml.push(<img className={classes.top_img} key={index} src={starImg} alert="star_img" className="mr-1" id={`scenario_selection_card_star_card${cardIndex}_${index}`} name={`scenario_selection_card_star_card${cardIndex}_${index}`}/>)
        }
        if(starCount < 3)
        {
            let starWhiteCount = 3 - starCount //get white star count
            
            for (let index = 0; index < starWhiteCount; index++) {
                //push white star count
                starHtml.push(<img className={classes.top_img} key={index+starCount} src={starImgWhite} className="mr-1" id={`scenario_selection_card_star_card${cardIndex}_${index+starCount}`} alert="star_img" name={`scenario_selection_card_star_card${cardIndex}_${index+starCount}`}/>)
            }
        }
        return starHtml
    }
    return (
        <Link to={{pathname:(status) ? `/rate-of-risk/${task.id}/${task.persona.id}` : '', state:{task} }}> 
        <div className={`${classes.scenario_selection_card} ${(!status) ? classes.disable : ''} ${!status ? classes.cursor_not_allowed : ''}`} id={`scenario_selection_card_${index}`} name={`scenario_selection_card_${index}`}>
            <img src={LockImage} alt="lock_img" className={`${classes.lock_img}`} id={`scenario_selection_card_lock_img_${index}`} name={`scenario_selection_card_lock_img_${index}`}/>
            <div className={classes.top_wrapper}>
                <Row>
                    <span className={classes.star_img} id={`scenario_selection_card_stars_${index}`} name={`scenario_selection_card_stars_${index}`}>
                        {cardStar(precisionPercentage(task), task, index)}
                    </span>
                </Row>
                <Row>
                    <span className={`${classes.top_head_text} font-weight-bold`} id={`task_folder_name_${index}`} name={`task_folder_name_${index}`}>
                        {task.folder}
                    </span>
                </Row>
                <Row>
                    <span className={`${classes.top_head_text} font-weight-bold`} id={`task_name_${index}`} name={`task_name_${index}`}>
                        {/* {t('scenario.appointment_acquisition_call')} */}
                        {task.name}
                    </span>
                </Row>
            </div>
            <div className={classes.bottom_wrapper}>
                <div className={classes.bottom_flex}>
                    <div>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={`number_of_pay_number_wrapper${index}`} name={`number_of_pay_number_wrapper${index}`}>
                            <img src={PlayIcon} alt="PlayIcon" className="mr-2"/>
                            <span id={`number_of_pay_number_text_${index}`} name={`number_of_pay_number_text_${index}`}>{t('scenario.number_of_implementations')}：{payOfNumber}回</span>
                        </p>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={`percision_percent_wrapper_${index}`} name={`percision_percent_wrapper_${index}`}>
                            <img src={MarkIcon} alt="MarkIcon" className="mr-2"/>
                            <span id={`percision_percent_text_${index}`} name={`percision_percent_text_${index}`}>
                                {t('scenario.maximum_achievement_rate')}：{precisionPercentage(task)}％
                            </span>
                        </p>
                    </div>
                    <div>
                        <img className={classes.bottom_img} src={smileFace(precisionPercentage(task))} id={`percision_percent_emotion_${index}`} name={`percision_percent_emotion_${index}`} alt="emotion_icon"/>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ScenarioSelectionCard
