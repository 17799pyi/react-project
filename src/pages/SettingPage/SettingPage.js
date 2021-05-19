import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import classes from './styles.module.css'
import Keywords from '../../components/Keywords/Keywords';
import { useTranslation } from 'react-i18next';

function SettingPage() {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="container-wrapper">
                <div className="setting-wrapper mt-5">
                    <div class="row">
                        <div class="col-2">
                            <button type="button" className={`btn ${classes.synonym_btn}`}>
                            {t('setting.synonym')}
                            <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                        <div class="col-10">
                            <div className={`${classes.action_wrapper}`}>
                                <div className={classes.search_box}>
                                    <div className={`row ${classes.search_box_container}`}>
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input type="text" value="" placeholder={t('setting.seach_f_keywords_and_synonyms')} />
                                    </div>
                                </div>
                                <button type="button" className={`btn ${classes.add_keyword_btn}`}>
                                    <FontAwesomeIcon icon={faPlus} />
                                    {t('setting.add_keywords')}
                                </button>
                                <button type="button" className={`btn ${classes.export_btn}`}>
                                    <FontAwesomeIcon icon={faFileExport} />
                                    {t('setting.export')}
                                </button>
                            </div>
                            <div className="mt-3">
                                <Keywords />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingPage
