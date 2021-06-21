import React from 'react'
import { Row, Col } from 'reactstrap';
import classes from './styles.module.css';
import ScenarioSelectionCard from '../../constituents/ICard/ScenarioSelectionCard/index'
import humanImg from '../../property/icons/scenario_selection_img.png'
import smileImg from '../../property/icons/smile.png'
import starImg from '../../property/icons/star.png'

function ScenarioSelection() {
    return (
        <div className={classes.scenario_selection_container}>
            <Row className="m-0">
                <Col xs="4">
                    <Row><h3 className="head-text">新規ロープレの開始</h3></Row>
                    <Row className="mt-5">
                        <Col xs="6" className={`p-0 ${classes.step_lists}`}>
                            <span className={classes.step_list}>
                                <span className={classes.step_head}>1</span>
                                <span className={classes.step_text}>募集人の選択</span>
                            </span>
                        </Col>
                        <Col xs="6" className={`p-0 ${classes.step_lists}`}>
                            <span className={classes.step_list}>
                                <span className={classes.step_head}>2</span>
                                <span className={classes.step_text}>セクションの選択</span>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className={classes.content}>
                <Row className={`m-0 ${classes.content_btn}`}>
                    <button className={classes.out_line_btn}>戻る</button>
                    <button className={classes.out_fill_btn}>ロールプレイ開始</button>
                </Row>
                <Row>
                    <Col className="p-0">
                        <img src={humanImg} className={classes.human_img} />
                    </Col>
                    <Col className="p-0">
                        progress
                    </Col>
                    <Col className="p-0">
                        <div className={classes.percent_content}>
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
                        </div>
                    </Col>
                </Row>
                <Row className="m-0">
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                    <Col xs="4" className="p-0">
                        <ScenarioSelectionCard />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ScenarioSelection
