import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classes from './styles.module.css'
import bubble from '../../../assets/icons/bubble.png';

function PersonaCompletionHistory() {
    return (
        <div className={classes.completion_history_wapper}>
            <p className={classes.completion_status}>Completion History</p>
            <div className={classes.completion_history_content}>
                <div className="content_left">
                    <div className={`${classes.selected_persona_content_folder_btn_wrapper} ${classes.selected_persona_content_active}`}>
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                    <div className={classes.selected_persona_content_folder_btn_wrapper}>
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                    <div className={classes.selected_persona_content_folder_btn_wrapper}>
                        <span>October 14th 18:21</span>
                        <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                    </div>
                </div>
                <div className="content_right">
                    <div className={classes.total_accuracy}>
                        <p className={classes.result_state}>Result</p>
                        <p className={classes.total_accuracy_text}>Total Answer Accuracy: 91%</p>
                        <span>
                            <ul className="percentage_lists">
                                <li className={classes.percentage_list}>
                                    <span className={`${classes.circle_li} ${classes.circle_green}`}></span>2
                                </li>
                                <li className={classes.percentage_list}>
                                    <span className={`${classes.circle_li} ${classes.circle_yellow}`}></span>2
                                    <span className="classes.circle_li yellow"></span>1
                                </li>
                                <li className={classes.percentage_list}>
                                    <span className={`${classes.circle_li} ${classes.circle_red}`}></span>2
                                </li>
                            </ul>
                        </span>
                        <img className={classes.chat_img} src={bubble}/>
                    </div>
                    <div className={classes.key_words}>
                        <div className={classes.key_word_content}>
                            <div className={classes.content_left}>
                                <p>Keyword</p>
                            </div>
                            <div className={classes.content_right}>
                                <span className={`${classes.word_content} ${classes.word_content_check}`}>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <span>Word</span>
                                </span>
                                <span className={classes.word_content}>
                                    <span>Word</span>
                                </span>
                                <span className={classes.word_content}>
                                    <span>Word</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.chat_show}>
                        Chat show
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaCompletionHistory
