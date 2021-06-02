import React from 'react';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, percentage, className, style, id}) => {

    return (
        <div className={`${classes.percent_box} ${className}`} style={style} id={id}>
            <p>{label}</p>
            <p className="font-weight-bold">{percentage}</p>
        </div>
    )
}

export default BackgroundBlueLabel;