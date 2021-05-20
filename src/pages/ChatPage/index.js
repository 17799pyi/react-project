import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ChatLogFinish from './ChatLogFinish'
import ChatLog from './ChatLog'
import { Container, Row, Col } from 'reactstrap';

import MandatoryTitle from '../../components/MandatoryTitle'
import SlideCard from '../../components/Lesson/SlideCard/SlideCard'
import ImagePopup from '../../components/PopupBox/ImagePopup'
import FinishButton from '../../components/Button/FinishButton'
import classes from './styles.module.css'

import SamplePhoto from '../../assets/images/chatlog/sample_profile.png'
import DescriptionImage from '../../assets/images/chatlog/description_image.png'
import HelpIcon from '../../assets/images/chatlog/help_icon.png'
import ListenIcon from '../../assets/images/chatlog/listen_icon.png'
import SendIcon from '../../assets/images/chatlog/send_icon.png'
import CancelIcon from '../../assets/images/chatlog/cancel_icon.png'
import DoneIcon from '../../assets/images/chatlog/done_icon.png'
import WaveformImg from '../../assets/images/chatlog/waveform_img.png'


function ChatPage() {    
    const [show, setShow] = useState(false);  
    const [finish, setFinish] = useState(true);  


    const handleKeyDown = (event) => {
        setShow(true);
    }
    const handleClick = (event) => {
        setFinish(false);
    }
    return (
        <>
        <div className={`${classes.chat_log_msg__sec} ${!finish&& classes.chat_log_msg__sec_finish}`}>
            <div className="cmn-inner-width">
                <Row className="pt-4 pb-2">
                    <Col sm="3" className={`${classes.chat_img_sec}`}>
                        <div className={`px-3 pt-3 mb-3 text-center ${classes.sample_chat_img}`}>
                            <img src={SamplePhoto} alt="Sample Photo" className={`img-fluid`}/>
                        </div>
                        {show &&
                            <div className={`mb-3 px-3 py-2 ${classes.chat_tip_msg}`}>
                                <span className="font-10">Tips</span>
                                <p className="mb-0 font-16">I sent you this letter, did you see it?</p>
                            </div>
                        }
                        <div className={`p-3 ${classes.sample_chat_img}`}>
                            <MandatoryTitle title="Explanatory material"/>
                            <Row className="smallest-padding-box">
                                <Col xs="4"> 
                                    <ImagePopup title="Explanatory material" data={DescriptionImage} alt="Description Image" classes={`img-fluid ${classes.chat_descr_img}`}/>
                                </Col>
                                <Col xs="4">
                                    <ImagePopup title="Explanatory material" data={DescriptionImage} alt="Description Image" classes={`img-fluid ${classes.chat_descr_img}`}/>
                                </Col>
                                <Col xs="4">
                                    <ImagePopup title="Explanatory material" data={DescriptionImage} alt="Description Image" classes={`img-fluid ${classes.chat_descr_img}`}/>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm="9" className="mt-3 mt-sm-0">
                        <ChatLogFinish className={!finish&& 'cmn-scroll-bar-finish'}/>                   
                    </Col>
                </Row>
            </div>
        </div>
        <div className={classes.chat_log_msg_type_sec}>
            <div className="cmn-inner-width">
                { finish ?
                <Row>
                    <Col xs="2" className="d-flex align-items-center">
                        <a><img src={HelpIcon} alt="Help Icon"/></a>
                    </Col>
                    <Col xs="10">
                        <div className={classes.chatlog_text_box}>
                            <input type="text" placeholder="Reply" onKeyPress={handleKeyDown}/>
                            <div className={classes.chatlog_text_box_icon}>
                                {!show? 
                                    <button className="btn btn-link"><img src={ListenIcon} alt="Listen Icon" className="img-fluid"/></button>
                                :                            
                                    <button className="btn btn-link"><img src={SendIcon} alt="Send Icon" className="img-fluid" onClick={handleClick}/></button>
                                }
                                {/* <img src={WaveformImg} alt="Waveform Img" className="img-fluid"/>
                                <button className="btn btn-link"><img src={DoneIcon} alt="Done Icon" className="img-fluid"/></button>
                                <button className="btn btn-link"><img src={CancelIcon} alt="Cancel Icon" className="img-fluid"/></button> */}
                            </div>
                        </div>
                    </Col>
                </Row>                    
                :
                <Row>
                    <Col className="text-center my-3">
                        <FinishButton title="Finish and check the result"/>
                    </Col>
                </Row>
                }
            </div>
        </div>
        </>
    )
}

export default ChatPage
