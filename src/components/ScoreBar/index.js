import React from 'react';

import smileImg from '../../assets/images/icons/smile.png'
import NoSmileImg from '../../assets/images/icons/nosmile.png'
import starImg from '../../assets/images/icons/star.png'
import starImgWhite from '../../assets/images/icons/star_white.png'
import starImgBlack from '../../assets/images/icons/star_black.png'
import AcceptButton from '../Button/AcceptButton'
import { useTranslation } from 'react-i18next';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style, id, item = null}) => {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = '-scorebar-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }

    const getStarCount = (percent) => {
        //get fill star count
        let starCount = 0
        if(percent >= 0 && percent <= 69)
        {
            starCount = 1
        }else if(percent >= 70 && percent <= 84)
        {
            starCount = 2
        }else if(percent >= 85 && percent <= 100)
        {
            starCount = 3
        }
        return starCount
    }
    
    const precisionPercentage = (item) => {
        if(item.score)
        {
            return parseFloat(item.score.precision).toFixed(2) * 100;
        }
        return 0;
    }

    const cardStar = (percent, item) => {
        let starCount = item.score ? getStarCount(parseFloat(percent).toFixed(0)) : 0; //get full star count
        let starHtml = []
        for (let index = 0; index < starCount; index++) {
            //push full start count
            starHtml.push(<img src={starImg} alt="Star Image Black" className={classes.w_17} id={autoId()}/>)
        }
        if(starCount < 3)
        {
            let starWhiteCount = 3 - starCount //get white star count
            
            for (let index = 0; index < starWhiteCount; index++) {
                //push white star count
                starHtml.push(<img src={starImgBlack} alt="Star Image Black" className={classes.w_17} id={autoId()}/>)
            }
        }
        return starHtml
    }

    const date = (item) => {
        let date = new Date(item.start);
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 (${days[date.getDay()]})`
    }

    const getTwoTime = (item) => {
        let dt1 = new Date(item.start)
        let dt2 = new Date(item.finished)
        return `${dt1.getHours()}:${dt1.getMinutes()} - ${dt2.getHours()}:${dt2.getMinutes()}`
    }

    return (
       <div className={`${classes.scroll_bar} ${className} ${ (precisionPercentage(item)>=70)&& classes.pass}`} id={autoId()}>
           <div className={classes.scroll_per_sec}>
                {/* ({t('rateOfRisk.wednesday')}) */}
                <span id={autoId()}>{date(item)} </span>
                <span className="ml-2 ml-xl-4" id={autoId()}>{getTwoTime(item)}</span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-4 pr-0  pr-xl-2" id={autoId()}>{t('rateOfRisk.correct_answer_rate')}</span>
               <span className={classes.score_star}>
                   {cardStar(precisionPercentage(item), item)}

                    {/* <img src={starImg} alt="Star Image" className={classes.w_17} id={autoId()}/>
                    <img src={starImg} alt="Star Image" className={classes.w_17} id={autoId()}/>
                    <img src={(percentage>=70)?starImgBlack:starImgWhite} alt="Star Image Black" className={classes.w_17} id={autoId()}/> */}
               </span>
           </div>
           <div className={classes.scroll_btn_sec}>
                <span className="mr-2 mr-xl-4" id={autoId()}>({precisionPercentage(item)}%)</span>
                <img src={precisionPercentage(item)>=70? smileImg : NoSmileImg} alt="Smile Image" className={classes.w_19} id={autoId()}/>
           </div>
       </div>
    )
}

export default BackgroundBlueLabel;