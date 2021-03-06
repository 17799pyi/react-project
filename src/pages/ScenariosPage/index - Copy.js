import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import './styles.css'
import MandatoryTitle from '../../components/MandatoryTitle'
import NumberStyleCircle from '../../components/Number/NumberStyleCircle'
import SidebarAccordian from '../../components/Accordian/SidebarAccordian'
import AddButtonPurple from '../../components/Button/AddButtonPurple'
import AddKeywordButton from '../../components/Button/AddKeywordButton'
import DeleteKeywordButton from '../../components/Button/DeleteKeywordButton'
import GeneralPopupMsg from '../../components/PopupBox/GeneralPopupMsg'
import ScenariosNoCard from '../../components/Card/ScenariosNoCard'
import ScenariosGeneralCard from '../../components/Card/ScenariosGeneralCard'
import ScenariosNoteCard from '../../components/Card/ScenariosNoteCard'

import SamplePhoto from '../../assets/images/scenarios/sample_man1.png'
import SamplePhoto2 from '../../assets/images/scenarios/sample_man2.png'
import SamplePhoto3 from '../../assets/images/scenarios/sample_man3.png'
import WarningIcon from '../../assets/images/scenarios/warning_icon.png'
import DescriptionImage from '../../assets/images/chatlog/description_image.png'
import AddImage from '../../assets/images/scenarios/add_image.png'
import AddIcon from '../../assets/images/scenarios/add_icon.png'
import CloseIcon from '../../assets/images/scenarios/close_icon.png'
import UpArrow from '../../assets/images/scenarios/up_arrow.png'
import DownArrow from '../../assets/images/scenarios/down_arrow.png'



function ScenariosPage() {  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="cmn-inner-width py-4">            
            <Row className="smallest-padding-box scenario_person_box_row py-4">
                <Col xs="4">
                    <div className="scenario_person_box">
                        <NumberStyleCircle title="1"/>
                        <img src={SamplePhoto} alt="Sample Photo"/>
                        <div>
                            <h5 className="mb-1 font-weight-normal">?????? ??????</h5>
                            <span className="font-12">75??? / ??????</span>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="scenario_person_box active">
                        <NumberStyleCircle title="2"/>
                        <img src={SamplePhoto2} alt="Sample Photo"/>
                        <div>
                            <h5 className="mb-1 font-weight-normal">?????? ??????</h5>
                            <span className="font-12">57??? / ??????</span>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="scenario_person_box">
                        <NumberStyleCircle title="3"/>
                        <img src={SamplePhoto3} alt="Sample Photo"/>
                        <div>
                            <h5 className="mb-1 font-weight-normal">????????? ??????</h5>
                            <span className="font-12">69??? / ??????</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="3">
                    <SidebarAccordian show="true"/>
                    <SidebarAccordian/>
                </Col>
                <Col xs="9">
                    <div className="scenarios-btn-box mb-2">
                        <Row className="align-items-center">
                            <Col xl="3" lg="4" md="4" sm="12" >
                            <h5 className="font-weight-normal d-inline-block align-middle mr-3 mb-0">???????????? 2</h5>
                                <MandatoryTitle title="??????" className="bg-green mb-0 py-0"/>
                            </Col>
                            <Col xl="9" lg="8" md="8" sm="12" className="align-items-center justify-content-end d-xl-flex d-block">
                                <p className="mb-2 mb-xl-0 mr-4 d-lg-inline-block d-block"><img src={WarningIcon} alt="Warning Icon" className="mr-1 d-inline-block align-middle"/><span className=" d-inline-block align-middle">?????????????????????????????????????????????</span></p>
                                <div>
                                    <button className="cmn-btn btn save-btn" onClick={handleShow}>??????</button>
                                    <button className="cmn-btn btn private-btn ml-2 mr-4">?????????</button>
                                    <button className="cmn-btn btn delete-btn">??????</button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        className={`cmn-model cmn-confirm-modal`}
                                        >
                                            <Modal.Body className="text-center cmn-modal-msg-row">
                                                <div className="modal-msg">
                                                    <h3 className="mb-4 font-weight-normal">????????????????????????????????????????????????????????????</h3>
                                                    <p>????????????????????????????????????????????????</p>

                                                </div>
                                                <div className="modal-btn-gp">                                                    
                                                    <button onClick={handleClose} className="btn modal-msg-ok mr-2"> ?????? </button>
                                                    <button onClick={handleClose} className="btn modal-msg-cancel"> ???????????????</button>
                                                </div>
                                            </Modal.Body>
                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="smallest-padding-box">
                        <Col lg="5">
                            {/* <div className="scenarios-action-box d-flex align-items-end justify-content-between">
                                <div>
                                    <MandatoryTitle title="???????????????" className="mb-3"/>
                                    <h3 className="font-weight-normal mb-0">2</h3>
                                </div>
                                <div>
                                    <button className="btn font-gray2"><FontAwesomeIcon icon={faMinus}/></button>
                                    <button className="btn font-gray2"><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                            </div> */}
                            <ScenariosNoCard data="2" card_title="???????????????" className="mb-2"/>
                            {/* <div className="scenarios-action-box d-flex align-items-end justify-content-between">
                                <div>
                                    <MandatoryTitle title="???????????????" className="mb-3"/>
                                    <h3 className="font-weight-normal mb-0">???????????????</h3>
                                </div>
                            </div> */}
                            <ScenariosGeneralCard card_title="???????????????" data="???????????????" className="mb-2"/>
                            {/* <div className="scenarios-action-box d-flex align-items-end justify-content-between">
                                <div>
                                    <MandatoryTitle title="??????" className="mb-3"/>
                                    <p className="font-16 mb-0">???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                </div>
                            </div>   */}
                            <ScenariosNoteCard card_title="??????" data="???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" className="mb-2"/>
                            <div className="scenarios-action-box bg-transparent shadow-none">
                                <div>
                                    <MandatoryTitle title="????????????" className="mb-3"/>
                                    <Row className="smallest-padding-box">
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> ??????</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> ??????</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> ??????</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={AddImage} alt="Add Image" className="no-border"/>
                                            <button className="no-btn btn font-10 font-purple">?????????????????????</button>                                                
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            
                            <div className="scenarios-action-box bg-transparent shadow-none">
                                <div className=" d-flex align-items-center justify-content-between">
                                    <MandatoryTitle title="?????????" className="mb-3"/>
                                    <AddButtonPurple className="mb-3"/>
                                </div>
                                <Row className="smallest-padding-box mb-3">
                                    <Col xs="1" className="d-flex align-items-end justify-content-center">
                                        <button className="btn no-btn pb-2"><img src={DownArrow} className="btn-img"/></button>
                                    </Col>
                                    <Col xs="10">
                                        <div className="sent-box">
                                        <p className="font-gold font-10">????????? 1</p>
                                        <p className="mb-0">??????????????????????????????????????????????????????????????????????????????????????????</p>
                                        </div>
                                    </Col>
                                    <Col xs="1" className="text-center">
                                        <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                    </Col>
                                </Row>
                                <Row className="smallest-padding-box">
                                    <Col xs="1" className="text-center">
                                        <button className="btn no-btn pt-2"><img src={UpArrow} className="btn-img"/></button>
                                    </Col>
                                    <Col xs="10">
                                        <div className="sent-box">
                                            <p className="font-gold font-10">????????? 2</p>
                                            <input type="text" placeholder="????????????????????????????????????" className="form-control no-border rounded-0 p-0"/>
                                        </div>
                                    </Col>
                                    <Col xs="1" className="text-center">
                                        <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="scenarios-action-box d-flex align-items-end justify-content-between">
                                <div>
                                    <MandatoryTitle title="????????????" className="mb-3"/>
                                    <h3 className="font-weight-normal mb-0">261</h3>
                                </div>
                            </div>

                        </Col>
                        <Col lg="7">
                            <div className="scenarios-action-box bg-transparent shadow-none px-0">
                                <div className="scenarios-trainee-row">
                                    <Row className="smallest-padding-box">
                                        <Col xs="1" className="d-flex align-items-end justify-content-center">
                                            <button className="btn no-btn pb-2"><img src={DownArrow} className="btn-img"/></button>
                                        </Col>
                                        <Col xs="10">
                                            <div className="sent-box p-3 mb-2">                                                
                                                <MandatoryTitle title="????????????" className="mb-2 persona-sub-title"/>
                                                <p className="mb-0">???????????????????????????????????????????????????????????????</p>
                                            </div>
                                            <div className="sent-box p-3">
                                                <MandatoryTitle title="?????????" className="mb-2 trainee-sub-title"/>
                                                <p className="mb-2">??????????????????????????????????????????????????????????????????????????????????????????</p>
                                                <div className="d-flex">
                                                    <DeleteKeywordButton title="Letter" className="mr-1"/>
                                                    <DeleteKeywordButton title="Feed" className="mr-1"/>
                                                    <AddKeywordButton title="Keyword"/>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="1" className="text-center">
                                            <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="scenarios-trainee-row">
                                    <Row className="smallest-padding-box">
                                        <Col xs="1" className="d-grid">
                                            <button className="btn no-btn pt-2 d-flex align-items-start justify-content-center"><img src={UpArrow} className="btn-img"/></button>
                                            <button className="btn no-btn pb-2 d-flex align-items-end justify-content-center"><img src={DownArrow} className="btn-img"/></button>
                                        </Col>
                                        <Col xs="10">
                                            <div className="sent-box p-3 mb-2">  
                                                <div className="mb-2">
                                                    <MandatoryTitle title="?????????" className="mb-2 trainee-sub-title"/>
                                                    <p className="mb-2">??????????????????????????????????????????????????????????????????????????????????????????</p>
                                                    <div className="d-flex">
                                                        <DeleteKeywordButton title="Letter" className="mr-1"/>
                                                        <DeleteKeywordButton title="Feed" className="mr-1"/>
                                                        <AddKeywordButton title="Keyword"/>
                                                    </div>       
                                                </div> 
                                                <div>
                                                    <MandatoryTitle title="????????????" className="mb-2 persona-sub-title"/>
                                                    <p className="mb-0">??????????????????????????????????????? ???????????????????????????????????? ???????????????????????????...</p>
                                                </div>                                      
                                            </div>
                                            <div className="sent-box p-3">
                                                <MandatoryTitle title="?????????" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="????????????????????????????????????" className="form-control no-border rounded-0 p-0 mb-2"/>
                                                <AddKeywordButton title="Keyword"/>
                                            </div>
                                        </Col>
                                        <Col xs="1" className="text-center">
                                            <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="scenarios-trainee-row">
                                    <Row className="smallest-padding-box">
                                        <Col xs="1" className="text-center">
                                            <button className="btn no-btn pt-2"><img src={UpArrow} className="btn-img"/></button>
                                        </Col>
                                        <Col xs="10">
                                            <div className="sent-box p-3 mb-2">  
                                                <MandatoryTitle title="?????????" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="????????????????????????????????????" className="form-control no-border rounded-0 p-0 mb-2"/>
                                            </div>
                                            <div className="sent-box p-3">
                                                <MandatoryTitle title="?????????" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="????????????????????????????????????" className="form-control no-border rounded-0 p-0 mb-2"/>
                                                <AddKeywordButton title="Keyword"/>
                                            </div>
                                        </Col>
                                        <Col xs="1" className="text-center">
                                            <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="scenarios-trainee-row">
                                    <Row>
                                        <Col xs="10" className="mx-auto"><button className="font-gray btn w-100 add-btn"><FontAwesomeIcon icon={faPlus}/> ?????????????????????</button></Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>            
        </div>
    )
}

export default ScenariosPage
