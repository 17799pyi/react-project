import React from 'react';

import './styles.css'

const HistoryButton = ({ onClick, title, className, style, value, idName}) => {

    return (
        <button className={`history_btn ${className ? className : ''}`} style={style} onClick={onClick} value={value} id={idName} name={idName}> {title}</button>
    )
}

export default HistoryButton;