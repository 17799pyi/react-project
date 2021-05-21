import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import classes from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import CloseIcon from '../../assets/images/scenarios/close_icon.png'

import DeleteKeywordButton from '../../components/Button/DeleteKeywordButton'
import AddKeywordButton from '../../components/Button/AddKeywordButton'

function Keyword() {
    return (
        <div className={classes.keyword_wrapper}>
            <Row>
                <Col lg="4" md="11" sm="11" xs="11" className="order-0 order-lg-0">
                    <input type="text" value="Word 1" className={`cmn-bg-white-box px-3 py-2 w-100 rounded-lg`} />
                </Col> 
                <Col lg="7" md="12" className="order-2 order-lg-1 mt-lg-0 mt-3 cmn-border-radius-style">
                    <DeleteKeywordButton title="Sync 1" className="px-3 py-2 mr-1 mb-1 bg-transparent"/>
                    <DeleteKeywordButton title="Sync 1" className="px-3 py-2 mr-1 mb-1 bg-transparent"/>
                    <DeleteKeywordButton title="Sync 1" className="px-3 py-2 mr-1 mb-1 bg-transparent"/>
                    <DeleteKeywordButton title="Sync 1" className="px-3 py-2 mr-1 mb-1 bg-transparent"/> 
                    <AddKeywordButton title="Add Synonyms" className="px-3 py-2 mb-1 bg-transparent"/>
                </Col>            
                <Col lg="1" md="1" sm="1" xs="1" className="order-1 order-lg-2 text-center">
                    <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                </Col>
            </Row>
        </div>
    )
}

export default Keyword
