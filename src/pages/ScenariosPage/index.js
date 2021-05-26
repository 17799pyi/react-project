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
import ScenariosSelectCard from '../../components/Card/ScenariosSelectCard'

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
                            <h5 className="mb-1 font-weight-normal">佐藤 太郎</h5>
                            <span className="font-12">75歳 / 男性</span>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="scenario_person_box active">
                        <NumberStyleCircle title="2"/>
                        <img src={SamplePhoto2} alt="Sample Photo"/>
                        <div>
                            <h5 className="mb-1 font-weight-normal">鈴木 次郎</h5>
                            <span className="font-12">57歳 / 男性</span>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="scenario_person_box">
                        <NumberStyleCircle title="3"/>
                        <img src={SamplePhoto3} alt="Sample Photo"/>
                        <div>
                            <h5 className="mb-1 font-weight-normal">亜富楽 幸子</h5>
                            <span className="font-12">69歳 / 女性</span>
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
                            <h5 className="font-weight-normal d-inline-block align-middle mr-3 mb-0">シナリオ 2</h5>
                                <MandatoryTitle title="公開" className="bg-green mb-0"/>
                            </Col>
                            <Col xl="9" lg="8" md="8" sm="12" className="align-items-center justify-content-end d-xl-flex d-block">
                                <p className="mb-2 mb-xl-0 mr-4 d-lg-inline-block d-block"><img src={WarningIcon} alt="Warning Icon" className="mr-1 d-inline-block align-middle"/><span className=" d-inline-block align-middle">保存されていない変更があります</span></p>
                                <div>
                                    <button className="cmn-btn btn save-btn" onClick={handleShow}>保存</button>
                                    <button className="cmn-btn btn private-btn ml-2 mr-4">非公開</button>
                                    <button className="cmn-btn btn delete-btn">削除</button>
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
                                                    <h3 className="mb-4 font-weight-normal">このシナリオを削除してもよろしいですか？</h3>
                                                    <p>このアクションは元に戻せません。</p>

                                                </div>
                                                <div className="modal-btn-gp">                                                    
                                                    <button onClick={handleClose} className="btn modal-msg-ok mr-2"> 削除 </button>
                                                    <button onClick={handleClose} className="btn modal-msg-cancel"> キャンセル</button>
                                                </div>
                                            </Modal.Body>
                                    </Modal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row className="smallest-padding-box">
                        <Col lg="5">
                            <ScenariosNoCard data="2" card_title="シナリオ№" className="mb-2"/>
                            <ScenariosGeneralCard card_title="シナリオ名" data="シナリオ名" className="mb-2"/>
                            <ScenariosSelectCard card_title="シナリオ名" data="シナリオ名" className="mb-2" />
                            <ScenariosNoteCard card_title="メモ" data="ユーザーが会話の理由、クライアントなどを理解するのに役立つシナリオに関するいくつかの情報。" className="mb-2"/>
                            <div className="scenarios-action-box bg-transparent shadow-none">
                                <div>
                                    <MandatoryTitle title="説明資料" className="mb-3"/>
                                    <Row className="smallest-padding-box">
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> 削除</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> 削除</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={DescriptionImage} alt="Description Image"/>
                                            <button className="no-btn btn font-10 font-red"><span>X</span> 削除</button>
                                        </Col>
                                        <Col xs="3" className="text-center add-img-box">
                                            <img src={AddImage} alt="Add Image" className="no-border"/>
                                            <button className="no-btn btn font-10 font-purple">説明資料を追加</button>                                                
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            
                            <div className="scenarios-action-box bg-transparent shadow-none">
                                <div className=" d-flex align-items-center justify-content-between">
                                    <MandatoryTitle title="ヒント" className="mb-3"/>
                                    <AddButtonPurple className="mb-3"/>
                                </div>
                                <Row className="smallest-padding-box mb-3">
                                    <Col xs="1" className="d-flex align-items-end justify-content-center">
                                        <button className="btn no-btn pb-2"><img src={DownArrow} className="btn-img"/></button>
                                    </Col>
                                    <Col xs="10">
                                        <div className="cmn-bg-white-box px-3 pt-3">
                                        <p className="font-gold font-10">ヒント 1</p>
                                        <p className="mb-0">このお手紙を送りしたのですが、ご覧いただけましたでしょうか？</p>
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
                                        <div className="cmn-bg-white-box px-3 pt-3">
                                            <p className="font-gold font-10">ヒント 2</p>
                                            <input type="text" placeholder="ヒントを入力してください" className="form-control no-border rounded-0 p-0"/>
                                        </div>
                                    </Col>
                                    <Col xs="1" className="text-center">
                                        <button className="btn no-btn pt-2"><img src={CloseIcon} className="btn-img"/></button>
                                    </Col>
                                </Row>
                            </div>
                            <div className="scenarios-action-box d-flex align-items-end justify-content-between">
                                <div>
                                    <MandatoryTitle title="管理番号" className="mb-3"/>
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
                                            <div className="cmn-bg-white-box p-3 mb-2">                                                
                                                <MandatoryTitle title="ペルソナ" className="mb-2 persona-sub-title"/>
                                                <p className="mb-0">あなたは先日山田様にお手紙を送っています。</p>
                                            </div>
                                            <div className="cmn-bg-white-box p-3">
                                                <MandatoryTitle title="研修者" className="mb-2 trainee-sub-title"/>
                                                <p className="mb-2">このお手紙を送りしたのですが、ご覧いただけましたでしょうか？</p>
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
                                            <div className="cmn-bg-white-box p-3 mb-2">  
                                                <div className="mb-2">
                                                    <MandatoryTitle title="研修者" className="mb-2 trainee-sub-title"/>
                                                    <p className="mb-2">このお手紙を送りしたのですが、ご覧いただけましたでしょうか？</p>
                                                    <div className="d-flex">
                                                        <DeleteKeywordButton title="Letter" className="mr-1"/>
                                                        <DeleteKeywordButton title="Feed" className="mr-1"/>
                                                        <AddKeywordButton title="Keyword"/>
                                                    </div>       
                                                </div> 
                                                <div>
                                                    <MandatoryTitle title="ペルソナ" className="mb-2 persona-sub-title"/>
                                                    <p className="mb-0">いいえ、まだ見ていません。 重要なことはありますか？ ちょっと忙しいです...</p>
                                                </div>                                      
                                            </div>
                                            <div className="cmn-bg-white-box p-3">
                                                <MandatoryTitle title="研修者" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="ヒントを入力してください" className="form-control no-border rounded-0 p-0 mb-2"/>
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
                                            <div className="cmn-bg-white-box p-3 mb-2">  
                                                <MandatoryTitle title="研修者" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="ヒントを入力してください" className="form-control no-border rounded-0 p-0 mb-2"/>
                                            </div>
                                            <div className="cmn-bg-white-box p-3">
                                                <MandatoryTitle title="研修者" className="mb-2 trainee-sub-title"/>
                                                <input type="text" placeholder="ヒントを入力してください" className="form-control no-border rounded-0 p-0 mb-2"/>
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
                                        <Col xs="10" className="mx-auto"><button className="font-gray btn w-100 add-btn"><FontAwesomeIcon icon={faPlus}/> シナリオを追加</button></Col>
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
