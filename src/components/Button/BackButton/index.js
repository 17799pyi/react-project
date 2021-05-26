import React from 'react';
import styles from './styles.module.css';

const BackButton = ({ onClick, title, className, style,id}) => {

    return (
        <button className={`${styles.back_btn} ${className}`} style={style} onClick={onClick} id={id}>
            <p>{title}</p>
        </button>
    )
}

export default BackButton;