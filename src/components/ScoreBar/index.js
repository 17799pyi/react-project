import React from 'react';

import smileImg from '../../assets/images/icons/smile.png'
import starImg from '../../assets/images/icons/star.png'
import AcceptButton from '../Button/AcceptButton'

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style}) => {

    return (
       <div className={`${classes.scroll_bar} ${className}`}>
           <div className={classes.scroll_per_sec}>
                <span>月 .日</span>
                <span>11：00 - 11：12</span>
                <span>正解率：80%</span>
                <img src={smileImg} className={classes.w_19}/>
           </div>
           <div className={classes.scroll_btn_sec}>
               <span className={classes.score_star}>
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
                    <img src={starImg} className={classes.w_17} />
               </span>
               <AcceptButton title="受け入れ中"/>
           </div>
       </div>
    )
}

export default BackgroundBlueLabel;