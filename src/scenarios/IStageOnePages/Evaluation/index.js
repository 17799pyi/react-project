import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Tab from "../../../constituents/ITabs/EvaluationTab";
import BackgroundBlueLabel from "../../../constituents/ILabel/BackgroundBlueLabel"
import classes from './styles.module.css';

const EvaluationPage = () => {

    const { t } = useTranslation();
    
    let lastId = 0;
    const autoId = (prefix = 'evaluation-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    
    const [vVisibleTab, setVisibleTab] = useState();
    
    return (
        <>
            <h3 className="mb-32" id={autoId()}>{t('videochat.role_play_implmenting')}</h3>
            <div className="cmn-bg-box pb-3">
                <Tab visibleTab={vVisibleTab} setVisibleTab={setVisibleTab} className="mb-32"/> 
                {vVisibleTab === 1 ? 
                    <Row className="smallest-padding-box">   
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col>
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col>
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="介護の実態①（データ訴求)" className={classes.bg_blue_box}/></Link>
                        </Col>  
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="介護の実態②（介護者：配偶者)" className={classes.bg_blue_box}/></Link>
                        </Col>
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col>
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="介護の実態①（データ訴求)" className={classes.bg_blue_box}/></Link>
                        </Col> 
                    </Row>
                :vVisibleTab === 2 ?
                
                    <Row className="smallest-padding-box">   
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col>
                    </Row>     
                : 
                    <Row className="smallest-padding-box">   
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col> 
                        <Col lg="4" className="mb-3">
                            <Link to="/evaluation-detail"><BackgroundBlueLabel label="アポイント取得（訪問" className={classes.bg_blue_box}/></Link>
                        </Col>                        
                    </Row>
                }                   
                  
            </div>
        </>
    )
}

export default EvaluationPage;