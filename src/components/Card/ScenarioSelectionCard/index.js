import React from 'react'
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

function ScenarioSelectionCard({status, id}) {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = '-card-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }

    return (       
        <Link to={ (status != 'lock')&&'/RateOfRisk'}>
        <div className={`${classes.scenario_selection_card} ${(status == 'lock') ? classes.disable : ''}`} id={autoId()}>
            <img src={LockImage} alt="Lock Img" className={`${classes.lock_img}`} id={autoId()}/>
            <div className={classes.top_wrapper}>
                <Row>
                    <span className={classes.star_img} id={autoId()}>
                        <img className={classes.top_img} src={starImg} className="mr-1" id={autoId()}/>
                        <img className={classes.top_img} src={starImg} className="mr-1" id={autoId()}/>
                        <img className={classes.top_img} src={starImgWhite} className="mr-1" id={autoId()}/>
                    </span>
                </Row>
                <Row><span className={`${classes.top_head_text} font-weight-bold`} id={autoId()}>{t('scenario.appointment_acquisition_call')}</span></Row>
            </div>
            <div className={classes.bottom_wrapper}>
                <div className={classes.bottom_flex}>
                    <div>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={autoId()}><img src={PlayIcon} alt="PlayIcon" className="mr-2"/><span>{t('scenario.number_of_implementations')}：7回</span></p>
                        <p className={`d-flex align-items-start ${classes.bottom_text}`} id={autoId()}><img src={MarkIcon} alt="MarkIcon" className="mr-2"/><span>{t('scenario.maximum_achievement_rate')}：80％</span></p>
                    </div>
                    <div>
                        <img className={classes.bottom_img} src={(status == 'lock')?NoSmileImg:smileImg} id={autoId()}/>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ScenarioSelectionCard
