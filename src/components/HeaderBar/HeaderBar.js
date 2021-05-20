import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from './styles.module.css';

const HeaderBar = () => {
    return (
        <header>
            <div className="cmn-inner-width">
                <div className={`${classes.nav_bar}`}>
                    <div className={`${classes.left}`}>
                        <h3 className={`mb-0 font-weight-normal ${classes.person_selection}`}>Person Selection</h3>        
                    </div>
                    <div className={`${classes.right}`}>
                        <ul>
                            <li>
                                <NavLink to="lessons" activeClassName={`${classes.current}`}>
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                    <span>Lesson</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="agency" activeClassName={`${classes.current}`}>
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                    <span>Traning Result</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="ScenariosPage" activeClassName={`${classes.current}`}>
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                    <span>Scenario Creation</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="setting" activeClassName={`${classes.current}`}>
                                    <span><FontAwesomeIcon icon={faHome} /></span>
                                    <span>setting</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;