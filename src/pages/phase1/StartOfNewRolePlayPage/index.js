import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";

import ScenarioSelectionCard from '../../../components/Card/ScenarioSelectionCard'
import BackButton from "../../../components/Button/BackButton"
import GeneralButton from "../../../components/Button/GeneralButton"
import Step2 from "./ScenariosSelectionPage"
import Step1 from "./PersonaSelectionPage"

import humanImg from '../../../assets/images/icons/scenario_selection_img.png'
import smileImg from '../../../assets/images/icons/smile.png'
import starImg from '../../../assets/images/icons/star.png'

import classes from './styles.module.css';

const ScenariosSelectionPage = () => {

    const { t } = useTranslation();
    const history = useHistory();    
    const [step1, setStep1] = useState(true);
    const [editStep2, setEditStep2] = useState(false);
    const [lessonId, setLessonId] = useState(null);
    
    useEffect(() => {
        history.push("/");
    }, []);

    const onBack = () => {
        setStep1(true);
        setEditStep2(false);
    }
    const onEditStep2 = (val) => {
        setStep1(false);
        setEditStep2(true);
        setLessonId(val)
    }

    return (
       
        <>
            <h3 className="mb-32">{t('selectionPageHeader.start_of_new_role_playing')}</h3>
            <Row className="mb-32 pt-2">
                <Col lg="8">
                    <Row>                        
                        <Col xs="6" className={`${classes.step_lists}`}>
                            <span className={classes.step_list}>
                                <span className={classes.step_head}>1</span>
                                <span className={classes.step_text}>{t('selectionPageHeader.recruiter_selection')}</span>
                            </span>
                        </Col>
                        <Col xs="6" className={`${classes.step_lists}`}>
                            <span className={classes.step_list}>
                                <span className={step1 ? `${classes.spet_head2_color_change} ${classes.step_head} ${classes.step_head2}` : `${classes.step_head} ${classes.step_head2} `}>2</span>
                                <span className={classes.step_text}>{t('selectionPageHeader.section_selection')}</span>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {
                step1 ?  <Step1 onEditScenerio={onEditStep2} /> : <Step2 onBack={onBack} lessonId={lessonId} showStep2={setEditStep2} /> 
            }
        </>
    )
}

export default ScenariosSelectionPage;