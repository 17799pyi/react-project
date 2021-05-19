import React from 'react'
import classes from './styles.module.css'
import Keyword from '../Keyword/Keyword';
import { useTranslation } from 'react-i18next';

function Keywords() {

    const { t } = useTranslation();

    return (
        <div>
            <div className={classes.keyword_wrapper}>
                <div className="row">
                    <div className="col-4">
                        <span className={classes.keyword_text_border}>{t('setting.keyword')}</span>
                    </div>
                    <div className="col-4 pl-0">
                        <span className={classes.keyword_text_border}>{t('setting.synonym')}</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <input type="text" value="" className={classes.keyword_input}  placeholder={`${t('setting.word')} 1`}/>
                    </div>
                    <div className="col-8 pl-0">
                        <input type="text" className={classes.keyword_input} placeholder={`${t('setting.synonym')} 1`}/>
                        <button type="button" className={`btn ${classes.save_btn}`}>{t('general.save')}</button>
                        <button type="button" className={`btn ${classes.cancel_btn}`}>{t('general.cancel')}</button>
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
