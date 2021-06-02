import React from 'react';

import smileImg from '../../assets/images/icons/smile.png'
import NoSmileImg from '../../assets/images/icons/nosmile.png'
import starImg from '../../assets/images/icons/star.png'
import starImgWhite from '../../assets/images/icons/star_white.png'
import starImgBlack from '../../assets/images/icons/star_black.png'
import AcceptButton from '../Button/AcceptButton'
import { useTranslation } from 'react-i18next';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style, percentage}) => {

    const { t } = useTranslation();

    return (
       <div className={`${classes.scroll_bar} ${className} ${ (percentage>=70)&& classes.pass}`}>
           <div className={classes.scroll_per_sec}>
                <span>2021年2月26日 ({t('rateOfRisk.wednesday')})</span>
                <span className="ml-2 ml-xl-4">11：00 - 11：12</span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-4 pr-0  pr-xl-2">{t('rateOfRisk.correct_answer_rate')}</span>
               <span className={classes.score_star}>
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                    <img src={(percentage>=70)?starImgBlack:starImgWhite} className={classes.w_17} />
               </span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-2 mr-xl-4">({percentage}%)</span>
                <img src={percentage>=70? smileImg : NoSmileImg} className={classes.w_19}/>
           </div>
       </div>
    )
}

export default BackgroundBlueLabel;