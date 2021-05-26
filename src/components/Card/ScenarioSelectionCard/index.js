import classes from './styles.module.css'
import { Row, Col } from 'reactstrap';
import React from 'react'
import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'

function ScenarioSelectionCard() {
    return (
        <div className={classes.scenario_selection_card}>
            <div className={classes.top_wrapper}>
                <Row>
                    <span>
                        <img className={classes.top_img} src={starImg} />
                        <img className={classes.top_img} src={starImg} />
                        <img className={classes.top_img} src={starImg} />
                    </span>
                </Row>
                <Row><span className={classes.top_head_text}>アポイント取得コール</span></Row>
            </div>
            <div className={classes.bottom_wrapper}>
                <div className={classes.bottom_flex}>
                    <div>
                        <p className={classes.bottom_text}>実施回数：7回</p>
                        <p className={classes.bottom_text}>最大達成率：80％</p>
                    </div>
                    <div>
                        <img className={classes.bottom_img} src={smileImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScenarioSelectionCard
