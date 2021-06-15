import React from 'react';
import styles from './styles.module.css';

const GeneralTextbox = ({ placeholder, maxlength, className, style, onChange, text, inputtype, autoFocus, id, icon, onKeyPress,disabled }) => {
    return (
        <>
            <input type={inputtype} id={id} maxLength={maxlength} className={`${styles.general_textbox} form-control ${className}`} disabled={disabled} placeholder={placeholder} onChange={onChange} value={text} autoFocus={autoFocus} onKeyPress={onKeyPress} />
        </>
    )
}

export default GeneralTextbox;