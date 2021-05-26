import React from 'react';

import classes from './styles.module.css'

const GeneralButton = ({ onClick, title, className, style, value, id, disabled}) => {

    return (
        <button className={`${classes.cmn_btn} ${className}`} style={style} onClick={onClick} value={value} id={id}  disabled={disabled}> {title}</button>
    )
}

export default GeneralButton;