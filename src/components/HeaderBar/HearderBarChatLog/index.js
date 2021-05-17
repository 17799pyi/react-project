import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GeneralButton from "../../Button/GeneralButton"

const HeaderBar = () => {
    return (
        <header>
            <div className="container">
                <div className="container-wrapper">                    
                    <div className="nav-bar">
                        <div > 
                            <GeneralButton title="Suspension" className="font-16 px-32"/>                   
                        </div>
                        <div className="d-flex algin-items-center">
                            <h3 className="mb-0 font-weight-normal">Scenario 4</h3>                         
                        </div>
                        <div>       
                            <GeneralButton title="Persona information" className="font-16 px-3"/>     
                            <GeneralButton title="Start over" className="font-16 ml-2"/>                        
                        </div>
                    </div>
            
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;