import React from 'react'
import classes from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Keyword() {
    return (
        <div className={classes.keyword_wrapper}>
            <div className="row mt-3">
                <div className="col-4">
                    <input type="text" value="Word 1" className={classes.keyword_input} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-10">
                            <div className="row">
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_added_box}>
                                    <span>Sync 1</span>
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                                <div className={classes.keyword_add_btn}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    Add Synonyms
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className={classes.remove_keyword}>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keyword
