import React from 'react'
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'
import MarkIcon from '../../../assets/images/mark_icon.svg'
import PlayIcon from '../../../assets/images/play_icon.svg'
import LockImage from '../../../assets/images/lock_icon.png'
import classes from './styles.module.css'

function ScenarioSelectionCard({status1}) {

    const { t } = useTranslation();

    return (
        <Link to="/RateOfRisk">
        <div className={`${classes.scenario_selection_card} ${(status1 == 'lock') ? classes.disable : ''}`}>
            <img src={LockImage} alt="Lock Img" className={`${classes.lock_img}`}/>
            <div className={classes.top_wrapper}>
                <Row>
                    <span>
                        <img className={classes.top_img} src={starImg} className="mr-1"/>
                        <img className={classes.top_img} src={starImg} className="mr-1"/>
                        <img className={classes.top_img} src={starImg} className="mr-1"/>
                    </span>
                </Row>
                <Row><span className={`${classes.top_head_text} font-weight-bold`}>{t('scenario.appointment_acquisition_call')}</span></Row>
            </div>
            <div className={classes.bottom_wrapper}>
                <div className={classes.bottom_flex}>
                    <div>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`}><img src={PlayIcon} alt="PlayIcon" className="mr-2"/><span>{t('scenario.number_of_implementations')}：7回</span></p>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`}><img src={MarkIcon} alt="MarkIcon" className="mr-2"/><span>{t('scenario.maximum_achievement_rate')}：80％</span></p>
                    </div>
                    <div>
                        <img className={classes.bottom_img} src={smileImg} />
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ScenarioSelectionCard
