import React from 'react';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, percentage, className, style, id}) => {

    return (
        <div className={`${classes.percent_box} ${className}`} style={style} id={`percentage_label_box_${id}`}>
            <p id={`progress_rate_${id}`} name={`progress_rate_${id}`} >{label}</p>
            <p id={`percentage_${id}`} name={`percentage_${id}`} className="font-weight-bold">{percentage}%</p>
        </div>
    )
}

export default BackgroundBlueLabel;