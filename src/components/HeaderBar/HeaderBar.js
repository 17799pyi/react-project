import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderBar = () => {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
            <div className="left">
                <span className="person_selection">
                    Person Selection
                </span>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Lesson</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Traning Result</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Scenario Creation</span>
                    </li>
                    <li>
                        <span><FontAwesomeIcon icon={faHome} /></span>
                        <span>Setting</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default HeaderBar;