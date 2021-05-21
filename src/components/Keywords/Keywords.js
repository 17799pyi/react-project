import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import classes from './styles.module.css'

import Keyword from '../Keyword/Keyword';
import MandatoryTitle from '../../components/MandatoryTitle'

import CloseIcon from '../../assets/images/scenarios/close_icon.png'

function Keywords() {
    return (
        <div className="cmn-bg-transparent-box p-0">
            <div className={`p-3 pt-4 ${classes.keyword_wrapper}`}>
                {/* <Row className="pb-2">
                    <Col lg="4"> <MandatoryTitle title="Keyword" /> </Col>
                    <Col lg="8"> <MandatoryTitle title="Synonym" /> </Col>
                </Row> */}
                <Row>
                    <Col lg="4" md="6" sm="6" xs="6" className="">
                        <MandatoryTitle title="Keyword" className="mb-3 order-0"/>
                        <input type="text" value="Word 1" className={`cmn-bg-white-box px-3 py-2 w-100`} />
                    </Col>
                    <Col lg="3" md="5" sm="5" xs="5">
                        <div>
                        <MandatoryTitle title="Synonym" className="mb-3 order-1"/>
                        </div>
                        <input type="text" value="Synonym 1" className={`cmn-bg-white-box px-3 py-2 w-100`} />
                    </Col>
                    <Col lg="4" className="d-flex align-items-end order-lg-2 order-3 mt-3 mt-lg-0">
                        <button type="button" className={`btn mr-3 px-4 ${classes.save_btn}`}>Save</button>
                        <button type="button" className={`btn px-4 ${classes.cancel_btn}`}>Cancel</button>
                    </Col>
                    <Col lg="1" md="1" sm="1" xs="1" className="text-center d-flex align-items-end justify-content-center order-lg-3 order-2">
                        <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                    </Col>
                </Row>
                {/* <div className="row">
                    <div className="col-4">
                        <span className={classes.keyword_text_border}>Keyword</span>
                        <MandatoryTitle title="Keyword" />
                    </div>
                    <div className="col-4 pl-0">
                        <span className={classes.keyword_text_border}>Synonym</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <input type="text" value="Word 1" className={classes.keyword_input} />
                    </div>
                    <div className="col-8 pl-0">
                        <input type="text" value="Synonym 1" className={classes.keyword_input} />
                        <button type="button" className={`btn ${classes.save_btn}`}>Save</button>
                        <button type="button" className={`btn ${classes.cancel_btn}`}>Cancel</button>
                    </div>
                </div> */}
            </div>
            <Keyword />
            <Keyword />
            <Keyword />
        </div>
    )
}

export default Keywords
