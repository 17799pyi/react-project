import React, { createRef, useState, useEffect, useRef } from 'react';
import classes from './styles.module.css'
import BackgroundBlueLabel from "../../../constituents/ILabel/BackgroundBlueLabel"
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Link, useParams, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { getScoreTable } from '../../../request/api'
import eventShuttle from '../../../eventShuttle'
import logger from 'redux-logger';
import PdfIcon from '../../../property/images/icons/pdf_icon.png'
import PdfPreview from '../../../constituents/IPdfPreview'

function Table({scoreTable, processToken, lessonId, taskId}) {
    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'rate-of-risk-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    const [vScoreTableList, setScoreTableList] = useState([])

    const getScoreTableData = async (taskId) => {
        try {
            const data = getScoreTable(taskId).then(res => {
                if(res.data){
                    setScoreTableList(res.data)
                    setTableLoading(false)
                } else {
                    logger.error("スコアテーブルデータエラーです。応答形式が正しくありません。")
                    // logger.error("getScoreTableData error, response format is not legal.")
                }
            })
        } catch (error) {
            // eventShuttle.dispatch("something_went_wrong");
            eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
        }
    };

    const [vTableLoading, setTableLoading] = useState(true)

    useEffect(() => {
        getScoreTableData(taskId)
    }, [])

    const splitTablePoint = (item) => {
        return item.split("\n");
    }

    const splitTableSalesTool = (item) => {
        return item.split("\n");
    }

    const checkMaterialType = (item) => {
        let type = item.referenceName.split('.').pop()
        if(type == 'pdf')
        {
          return PdfIcon
        
        //   return <PdfPreview pdfFile={`${item.referencePath}?${processToken}`}></PdfPreview>
        }else{
          return `${item.referencePath}?${processToken}`
        }
    }

    return (
        <>
        <Row className="mb-4">
            </Row>
            <div id="record_score_table_container" name="record_score_table_container">
            <Row className="smallest-padding-box02">
                <Col xs="3">                    
                    <BackgroundBlueLabel key={1} label={t('rateOfRisk.s_header_1')} className="font-18" id={"table_first_header"}/>
                </Col>
                <Col xs="3">
                    <BackgroundBlueLabel key={2} label={t('rateOfRisk.s_header_2')} className="font-18" id={"table_second_header"}/>
                </Col>
                <Col xs="6">
                    <BackgroundBlueLabel key={3} label={t('rateOfRisk.s_header_3')} className="font-18" id={"table_third_header"}/>
                </Col>
            </Row>
            {
                vScoreTableList.map((tableRow, index) => {
                    return <Row className="smallest-padding-box02 mt-3" key={index} id={`table_row_${index}`} name={`table_row_${index}`}>
                                <Col xs="3">
                                    <div 
                                    className={`${classes.top_btn} ${classes.content_bottom_extra} ${((index+1) == vScoreTableList.length) ? classes.top_btn_no_triagle : ''}`} 
                                    id={`table_col_name_${index}`} 
                                    name={`table_col_name_${index}`}
                                    >
                                        {/* {t('rateOfRisk.frequency_of_long_term_care')} */}
                                        {tableRow.name}
                                    </div>
                                </Col>
                                <Col xs="3">
                                    <div className={classes.content_outline}>
                                        <ul className={classes.point_list}>
                                        {
                                            splitTablePoint(tableRow.point).map((item, index1) => {
                                                return <li key={index1}>{item}</li>
                                            })
                                        }
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div className={classes.content_outline}>
                                        <Row className="w-100">
                                            {
                                                tableRow.salesTool ?
                                                <Col md="4" className="d-flex align-items-center">
                                                    <ul className={classes.point_list}>
                                                    {
                                                        splitTableSalesTool(tableRow.salesTool).map((item, index1) => {
                                                            return <li key={index1}>{item}</li>
                                                        })
                                                    }
                                                    </ul>
                                                </Col>
                                                :
                                                <Col><span className="font-weight-bold">-</span></Col>
                                            }
                                            <Col md="8">
                                            {
                                                tableRow.referenceMaterials.map((material, materialIndex) => {
                                                    return <a className="mr-3" href={`${material.referencePath}?${processToken}`} target="_blank" key={materialIndex}>
                                                            <img className={classes.w_50} src={checkMaterialType(material)} alt="Sample Image"/>
                                                            </a>
                                                })
                                            }
                                            </Col>
                                        </Row>
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
