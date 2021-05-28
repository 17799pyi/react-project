import React from 'react';

import smileImg from '../../assets/images/icons/smile.png'
import starImg from '../../assets/images/icons/star.png'
import AcceptButton from '../Button/AcceptButton'
import { useTranslation } from 'react-i18next';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style}) => {

    const { t } = useTranslation();

    return (
       <div className={`${classes.scroll_bar} ${className}`}>
           <div className={classes.scroll_per_sec}>
                <span>2021年2月26日 ({t('rateOfRisk.wednesday')})</span>
                <span className="ml-3 mr-4">11：00 - 11：12</span>
                <span className="pl-4 mr-3"><span className="font-weight-normal">{t('rateOfRisk.correct_answer_rate')}</span>：80%</span>
                <img src={smileImg} className={classes.w_19}/>
           </div>
           <div className={classes.scroll_btn_sec}>
               <span className={classes.score_star}>
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
               </span>
               {/* <AcceptButton title={t('rateOfRisk.accepting')}/> */}
           </div>
       </div>
    )
}

export default BackgroundBlueLabel;