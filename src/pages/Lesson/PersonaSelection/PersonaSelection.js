import React from 'react'
import PersonCard from '../../../components/Lesson/PersonCard/PersonCard'
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';


function PersonaSelection() {

    const { t } = useTranslation();
    
    return (
        <div className="container">
            <div className="container-wrapper">
                <div className="persona_selection">
                    <div className="text">
                        <p className={classes.head_text}>{t('lesson.head_text')}</p>
                    </div>
                    <div className="persona_cards">
                        <div className={classes.persona_wrapper}>
                            <PersonCard />
                            <PersonCard />
                            <PersonCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaSelection
