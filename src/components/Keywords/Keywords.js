import React from 'react'
import classes from './styles.module.css'
import Keyword from '../Keyword/Keyword';

function Keywords() {
    return (
        <div>
            <div className={classes.keyword_wrapper}>
                <div className="row">
                    <div className="col-4">
                        <span className={classes.keyword_text_border}>Keyword</span>
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
                </div>
            </div>
            <Keyword />
            <Keyword />
            <Keyword />
        </div>
    )
}

export default Keywords
