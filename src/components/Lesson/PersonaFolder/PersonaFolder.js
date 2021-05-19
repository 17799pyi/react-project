import React from 'react'
import ellipse from '../../../assets/icons/ellipse.png';
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';

function PersonaFolder() {

    const { t } = useTranslation();

    return (
        //if folder card is private, add private class in selected_persona_folder_card tag ${classes.selected_persona_folder_card} ${classes.private}
        <div className={`${classes.selected_persona_folder_card}`}>
            <div className={classes.selected_persona_folder_card_top}>
                <span className={classes.folder_card_count}>1</span>
                <span className={classes.folder_card_status}>
                    <img src={ellipse} />
                    <span>{t('lesson.re_implement')}</span>
                </span>
            </div>
            <div className={classes.selected_persona_folder_card_bottom}>
                <span className={classes.foler_text}>{t('lesson.any_folder')}</span>
                <span className={classes.foler_text_name}>Scenario Name</span>
            </div>
        </div>
    )
}

export default PersonaFolder
