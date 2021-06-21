import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import elderly_man from '../../../property/icons/elderly_man.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PersonaFolder from '../../../constituents/ILesson/PersonaFolder/PersonaFolder';
import classes from './styles.module.css'

import NumberStyleCircle from '../../../constituents/INumber/NumberStyleCircle'
import NumberStyleRec from '../../../constituents/INumber/NumberStyleRec'
import {useTranslation} from 'react-i18next'

function PersonaSelected() {
    const {t} = useTranslation();
    return (
        <div className="cmn-inner-width">
            <div className="persona_selection">
                <div className="text">
                    <p className={classes.head_text}>{t('persona.head_text')}</p>
                </div>
                <div className="persona_selection_content">
                    <div className={`mb-4 ${classes.selected_persona}`}>
                        {/* <img src={elderly_man} className={classes.selected_persona_img}/>
                        <div className={classes.selected_persona_info}>
                            <span className={classes.selected_persona_number}>2</span>
                            <span className={classes.selected_persona_name}>List of scenarios by Jiro Suzuki</span>
                            <span></span>
                            <span className={classes.selected_persona_type}>57 Years Old / Male</span>
                            <span className={classes.selected_persona_count}>3 / 10</span>
                        </div> */}
                         
                        <div className={classes.selected_persona_info}>                            
                            <NumberStyleCircle title="1" className="mr-2"/>
                            {/* <span className={classes.selected_persona_number}>2</span> */}
                            <div>
                                <span className={classes.selected_persona_name}>List of scenarios by Jiro Suzuki</span>
                                <img src={elderly_man} className={classes.selected_persona_img}/>
                                <span className={classes.selected_persona_type}>57 Years Old / Male</span>
                            </div>
                            {/* <span className={classes.selected_persona_count}>3 / 10</span> */}                            
                            <NumberStyleRec title="1/10" className="px-3 mr-2 py-1"/>
                        </div>
                    </div>
                    {/* <div className={classes.selected_persona_content}>
                        <div className="selected_persona_content_left">
                            <div className={`${classes.selected_persona_content_folder_btn_wrapper} ${classes.selected_persona_content_folder_btn_wrapper_active}`}>
                                <span>Any Folder</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                            <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                <span>Any Folder</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                            <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                <span>Any Folder</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                        </div>
                        <div className="selected_persona_content_right">
                            <div className={classes.selected_persona_folder_cards}>
                                <PersonaFolder />
                                <PersonaFolder />
                                <PersonaFolder />
                                <PersonaFolder />
                            </div>
                        </div>
                    </div> */}
                    <Row>
                        <Col xs="3">
                            <div className={`${classes.selected_persona_content_folder_btn_wrapper} ${classes.selected_persona_content_folder_btn_wrapper_active}`}>
                                <span>{t('persona.any_folder')}</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                            <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                <span>{t('persona.any_folder')}</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                            <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                <span>{t('persona.any_folder')}</span>
                                <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                            </div>
                        </Col>
                        <Col xs="9">
                            <Row>
                                <Col xl="4" lg="6" className="mb-3"> <PersonaFolder /> </Col>
                                <Col xl="4" lg="6" className="mb-3"> <PersonaFolder /> </Col>
                                <Col xl="4" lg="6" className="mb-3"> <PersonaFolder /> </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default PersonaSelected
