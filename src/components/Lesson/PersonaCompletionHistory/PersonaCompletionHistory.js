import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import bubble from '../../../assets/icons/bubble.png';

function PersonaCompletionHistory() {
    return (
        <div className="completion_history_wapper">
            <p className="completion_status">Completion History</p>
            <div className="completion_history_content">
                <div className="content_left">
                    <div className="selected_persona_content_folder_btn_wrapper active">
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                    <div className="selected_persona_content_folder_btn_wrapper">
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                    <div className="selected_persona_content_folder_btn_wrapper">
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                </div>
                <div className="content_right">
                    <div className="total_accuracy">
                        <p className="result_state">Result</p>
                        <p className="total_accuracy_text">Total Answer Accuracy: 91%</p>
                        <span>
                            <ul className="percentage_lists">
                                <li className="percentage_list">
                                    <span className="circle-li green"></span>2
                                </li>
                                <li className="percentage_list">
                                    <span className="circle-li yellow"></span>1
                                </li>
                                <li className="percentage_list">
                                    <span className="circle-li red"></span>8
                                </li>
                            </ul>
                        </span>
                        <img className="chat_img" src={bubble}/>
                    </div>
                    <div className="key_words">
                        <div className="key_word_content">
                            <div className="content_left">
                                <p>Keyword</p>
                            </div>
                            <div className="content_right">
                                <span className="word_content check">
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Word</span>
                                </span>
                                <span className="word_content">
                                    <span>Word</span>
                                </span>
                                <span className="word_content">
                                    <span>Word</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="chat_show">
                        Chat show
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaCompletionHistory
