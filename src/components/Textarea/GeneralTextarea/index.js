import React from 'react';
import styles from './styles.module.css';

const GeneralTextarea = ({ className, Message }) => {
    return (
        <>
            <div className={`${styles.textarea_box} ${className}`} contenteditable="true">
                <ul className="point-list">
                    {
                        Message && Message.map( i => (                        
                            <li>{i.name}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default GeneralTextarea;