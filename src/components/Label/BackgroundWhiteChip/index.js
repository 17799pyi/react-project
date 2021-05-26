import React from 'react';

import classes from './styles.module.css'

const BackgroundBlueLabel = ({ label, className, style}) => {

    return (
        <p className={`${classes.bg_blue} ${className}`} style={style} > {label}</p>
    )
}

export default BackgroundBlueLabel;