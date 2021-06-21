import React from 'react';
import styles from './styles.module.css';

const BackButton = ({ onClick, title, className, style, idName="back_button"}) => {
    return (
        <button className={`${styles.back_btn} ${className ? className : ''}`} style={style} onClick={onClick} id={idName} name={idName}>
            <p>{title}</p>
        </button>
    )
}

export default BackButton;