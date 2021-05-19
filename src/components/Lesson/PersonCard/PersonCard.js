import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import ellipse from '../../../assets/icons/ellipse.png';
import SlideCard from '../SlideCard/SlideCard';
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';

function PersonCard() {

    const { t } = useTranslation();

    return (
        <div className={classes.persona_card}>
            <div className={classes.card_wrapper}>
                <img className={classes.card_image} src={elderly_man} />
                <div className={classes.card_wrapper_top}>
                    <span className={classes.card_number}>1</span>
                    <span className={classes.card_count}>
                        1/10
                    </span>
                    <span className={classes.card_status}>
                        <img className={classes.ellipse} src={ellipse} />
                        <span className={classes.ellipse_text}>{t('lesson.perfect')}</span>
                    </span>
                </div>
                <div className={classes.card_wrapper_bottom}>
                    <p>Taro Sato</p>
                    <p>75 {t('lesson.year_old')} / {t('lesson.male')}</p>
                </div>
            </div>
            <div className={classes.slide_card}>
                <SlideCard />
                <SlideCard />
                <SlideCard />
            </div>
        </div>
    )
}

export default PersonCard
