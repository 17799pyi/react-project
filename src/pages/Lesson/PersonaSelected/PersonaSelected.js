import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PersonaFolder from '../../../components/Lesson/PersonaFolder/PersonaFolder';
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';

function PersonaSelected() {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="container-wrapper">
                <div className="persona_selection">
                    <div className="text">
                        <p className={classes.head_text}>{t('lesson.head_text')}</p>
                    </div>
                    <div className="persona_selection_content">
                        <div className={classes.selected_persona}>
                            <img src={elderly_man} className={classes.selected_persona_img}/>
                            <div className={classes.selected_persona_info}>
                                <span className={classes.selected_persona_number}>2</span>
                                <span className={classes.selected_persona_name}>{t('lesson.list_of_scenarios_by')} Jiro Suzuki</span>
                                <span></span>
                                <span className={classes.selected_persona_type}>57 {t('lesson.year_old')} / {t('lesson.male')}</span>
                                <span className={classes.selected_persona_count}>3 / 10</span>
                            </div>
                        </div>
                        <div className={classes.selected_persona_content}>
                            <div className="selected_persona_content_left">
                                <div className={`${classes.selected_persona_content_folder_btn_wrapper} ${classes.selected_persona_content_folder_btn_wrapper_active}`}>
                                    <span>{t('lesson.any_folder')}</span>
                                    <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </div>
                                <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                    <span>{t('lesson.any_folder')}</span>
                                    <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </div>
                                <div className={classes.selected_persona_content_folder_btn_wrapper}>
                                    <span>{t('lesson.any_folder')}</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaSelected
