import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import {Link} from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GeneralButton from "../../Button/GeneralButton"
import PersonalInfoPopUp from './PersonalInfoPopUp'
const HeaderBar = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header>
            <div className="container">
                <div className="container-wrapper">                    
                    <div className="nav-bar mb-0">
                        <div > 
                            <GeneralButton title="Suspension" className="font-16 px-32"/>                   
                        </div>
                        <div className="d-flex algin-items-center">
                            <h3 className="mb-0 font-weight-normal">Scenario 4</h3>                         
                        </div>
                        <div>       
                            <PersonalInfoPopUp/>
                            <GeneralButton title="Start over" className="font-16 ml-2"/>                        
                        </div>
                    </div>
            
                </div>
            </div>
        </header>
    );
}

export default HeaderBar;