import React from 'react';

import classes from './styles.module.css'

const GeneralButton = ({ onClick, title, className, style, value, idName="general_button", disabled}) => {

    return (
        <button id={idName} name={idName} className={`${classes.cmn_btn} ${className}`} style={style} onClick={onClick} value={value}  disabled={disabled}> {title}</button>
    )
}

export default GeneralButton;