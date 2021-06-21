import React, { useState, useEffect } from 'react';
import BackgroundBlueLabel from "../../../constituents/ILabel/BackgroundBlueLabel"
import BackgroundBlueChip from "../../../constituents/ILabel/BackgroundBlueChip"
import BackgroundWhiteChip from "../../../constituents/ILabel/BackgroundWhiteChip"
import { Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import EvaluationIcon1 from "../../../property/images/evaluation_icon3.svg"

const Table = ({selectScore, messages, clickKeyword}) => {

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'ai-score-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }

    const [vTableRow, settableRow] = useState([])
    const [tableLoading, setTableLoading] = useState(true)
    
    useEffect(() => {
        if(selectScore.recordScoreTable != undefined)
        {
            settableRow(selectScore.recordScoreTable)
            setTableLoading(false)
        }
    }, [selectScore])

    const sysmbole = (item) => {

        if(selectScore.matchedWords)
        {
            let checkSysmbol = selectScore.matchedWords
            if(checkSysmbol.length == item.keywords.length || checkSysmbol.length >= item.keywords.length)
            {
                //all correct
                return <p className="font-weight-bold mb-0 font-24" id="all_mactch_keyword" name="all_mactch_keyword">〇</p>
            }else if(checkSysmbol.length == 1)
            {
                //correct one more
                return <img src={EvaluationIcon1} alt="Evaluation Icon3" className="mw-100" id="one_match_keyword" name="one_match_keyword"/>
            }else{
                //all not correct
                return <p className="font-weight-bold mb-0 font-24" id="not_match_keyword" name="not_match_keyword">×</p>
            }
        }
        return <p className="font-weight-bold mb-0 font-24" id="not_match_keyword" name="not_match_keyword">×</p>
    }

    const checkMatchKey = (keyword) => {
        return (selectScore.matchedWords.find(element => element.word == keyword) != undefined) ? true : false;
    }

    const getClickKeyword = (keyword) => {
        let check = selectScore.matchedWords.find(element => element.word == keyword);
        if(check != undefined)
        {
            clickKeyword(check)
        }
        return false;
    }

    return (
        <>
            <div id="rate_risk_record_score_table_container" name="rate_risk_record_score_table_container">
                <Row className="smallest-padding-box02 mb-2">
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.process')} id="table_col_process"/>
                    </Col>
                    <Col xs="8">
                        <BackgroundBlueLabel label={t('aiscore.evaluation')} id="table_col_evaluation"/>
                    </Col>
                    <Col xs="2">
                        <BackgroundBlueLabel label={t('aiscore.point')} id="table_col_point"/>
                    </Col>
                </Row>
                {
                    vTableRow.map((item, index) => {
                        return <Row className="smallest-padding-box02 mb-2" key={index}>
                                    <Col xs="2" className="d-flex">
                                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 px-3">
                                            <p className="font-16 font-weight-bold mb-0" id={`table_col_name${index}`} name={`table_col_name${index}`}>{item.name}</p>
                                        </div>
                                    </Col>
                                    <Col xs="2" className="d-flex">
                                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100 justify-content-center px-16">
                                            {sysmbole(item)}
                                        </div>
                                    </Col>
                                    <Col xs="6" className="d-flex">
                                        <div  className="cmn-bg-box-inr pb-3 px-32">
                                            <div>
                                                {
                                                    item.keywords.map((keyword, keyIndex) => {
                                                        if(checkMatchKey(keyword))
                                                        {
                                                            return <button key={keyIndex} className="w-auto h-100 mb-1 p-0 border-0 bg-transparent" onClick={() => getClickKeyword(keyword)}>
                                                                <BackgroundBlueChip  key={keyIndex} label={keyword} className="mr-2" id={autoId()} id={`background_blue_chip_${keyIndex}`} name={`background_blue_chip_${keyIndex}`}/>
                                                            </button>
                                                        }else{
                                                            return <button key={keyIndex} className="w-auto h-100 mb-1 p-0 border-0 bg-transparent" onClick={() => getClickKeyword(keyword)}>
                                                                <BackgroundWhiteChip  key={keyIndex} label={keyword} className="mr-2" id={`background_blue_chip_${keyIndex}`} name={`background_blue_chip_${keyIndex}`}/>
                                                            </button>
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="2" className="d-flex">
                                        <div  className="cmn-bg-box-inr d-flex align-items-center h-100">
                                            <ul className="point-list">
                                                <li>**</li>
                                                <li>**</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                    })
                }
            </div>
        </>
    )
}
export default Table