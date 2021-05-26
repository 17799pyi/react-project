import React from 'react';

import './styles.css'

const HistoryButton = ({ onClick, title, className, style, value, id}) => {

    return (
        <button className={`history_btn ${className}`} style={style} onClick={onClick} value={value} id={id}> {title}</button>
    )
}

export default HistoryButton;