import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import classes from './styles.module.css'
import Keywords from '../../components/Keywords/Keywords';
import AddButtonPurple from '../../components/Button/AddButtonPurple';

function SettingPage() {
    return (
        <div className="cmn-inner-width">
            <div className="setting-wrapper mt-5">
                <Row>
                    <Col xs="3">
                        <button type="button" className={`btn ${classes.synonym_btn}`}>
                        Synonym
                        <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </Col>
                    <Col xs="9">
                        <div className={`cmn-bg-transparent-box ${classes.action_wrapper}`}>
                            {/* <div className={classes.search_box}>
                                <div className={`cmn-bg-white-box d-flex ${classes.search_box_container}`}>
                                    <FontAwesomeIcon icon={faSearch} className="font-gray2"/>
                                    <input type="text" className="ml-2 no-border w-100" placeholder="Search for keywords and synonyms" />
                                </div>
                            </div> */}
                            <Row className="small-padding-box align-items-center">
                                <Col lg="7" className="mb-2 mb-lg-0">
                                    <div className={`cmn-bg-white-box d-flex align-items-center ${classes.search_box_container}`}>
                                        <FontAwesomeIcon icon={faSearch} className="font-gray2"/>
                                        <input type="text" className="ml-2 no-border w-100" placeholder="Search for keywords and synonyms" />
                                    </div>
                                </Col>
                                <Col lg="3" md="6" sm="6" xs="6" className="">
                                    <button type="button" className={`btn ${classes.add_keyword_btn}`}>
                                        <FontAwesomeIcon icon={faPlus} />
                                        Add keywords
                                    </button>
                                </Col>
                                <Col lg="2" md="6" sm="6" xs="6">
                                    <button type="button" className={`btn ${classes.export_btn}`}>
                                        <FontAwesomeIcon icon={faFileExport} />
                                        Export
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-3">
                            <Keywords />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SettingPage
