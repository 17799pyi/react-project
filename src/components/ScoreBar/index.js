import React from 'react';

import smileImg from '../../assets/images/icons/smile.png'
import NoSmileImg from '../../assets/images/icons/nosmile.png'
import starImg from '../../assets/images/icons/star.png'
import starImgWhite from '../../assets/images/icons/star_white.png'
import starImgBlack from '../../assets/images/icons/star_black.png'
import AcceptButton from '../Button/AcceptButton'
import { useTranslation } from 'react-i18next';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style, percentage, id}) => {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = '-scorebar-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }

    return (
       <div className={`${classes.scroll_bar} ${className} ${ (percentage>=70)&& classes.pass}`} id={autoId()}>
           <div className={classes.scroll_per_sec}>
                <span id={autoId()}>2021年2月26日 ({t('rateOfRisk.wednesday')})</span>
                <span className="ml-2 ml-xl-4" id={autoId()}>11：00 - 11：12</span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-4 pr-0  pr-xl-2" id={autoId()}>{t('rateOfRisk.correct_answer_rate')}</span>
               <span className={classes.score_star}>
                    <img src={starImg} alt="Star Image" className={classes.w_17} id={autoId()}/>
                    <img src={starImg} alt="Star Image" className={classes.w_17} id={autoId()}/>
                    <img src={(percentage>=70)?starImgBlack:starImgWhite} alt="Star Image Black" className={classes.w_17} id={autoId()}/>
               </span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-2 mr-xl-4" id={autoId()}>({percentage}%)</span>
                <img src={percentage>=70? smileImg : NoSmileImg} alt="Smile Image" className={classes.w_19} id={autoId()}/>
           </div>
       </div>
    )
}

export default BackgroundBlueLabel;