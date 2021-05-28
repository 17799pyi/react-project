import React from 'react'
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";


import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'
import MarkIcon from '../../../assets/images/mark_icon.svg'
import PlayIcon from '../../../assets/images/play_icon.svg'
import classes from './styles.module.css'

function ScenarioSelectionCard() {

    const { t } = useTranslation();

    return (
        <Link to="/RateOfRisk">
        <div className={classes.scenario_selection_card}>
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
                        <p className={classes.bottom_text}><img src={PlayIcon} alt="PlayIcon" className="mr-2"/>{t('scenario.number_of_implementations')}：7回</p>
                        <p className={classes.bottom_text}><img src={MarkIcon} alt="MarkIcon" className="mr-2"/>{t('scenario.maximum_achievement_rate')}：80％</p>
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
