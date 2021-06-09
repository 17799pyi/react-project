import React from 'react'
import { Row, Col } from 'reactstrap'
import {useTranslation} from 'react-i18next'

import SamplePeople1 from '../../../assets/images/recruiters/sample_people1.png'
import StarIcon from '../../../assets/images/icons/star.png'
import StarIconWhite from '../../../assets/images/icons/star_white.png'
import classes from './styles.module.css'
import {userHistory,useLocation} from 'react-router-dom'

function Index() {
  const {t} = useTranslation();
  const {state} = useLocation();
  let lastId = 0;
  const autoId = (prefix = 'history-check-dt-') => {
      lastId++;
      return `${prefix}${lastId}`;
  }

  const changeColor= (status) => {
    if(status =="FINISH"){
      return "bg-green"
    }
    if(status=="PROCESSING")
    {
      return "bg-yellow-dark"
    }
    if(status =="NOT_START"){
      return "bg-red"
    }
  }

  const changeText=(status) => {
    if(status.trim()=="FINISH"){
      return "受講完了"
    }
    if(status.trim()=="PROCESSING"){
      return "受講中"
    }
    if(status.trim()=="NOT_START"){
      return "未実装"
    }
  }

    return (
        <>
        <Row>
          <Col lg="11">
            <h3 className="mb-32 pb-2" id={autoId()}>履歴を確認する</h3>
            <p className="font-18 mb-4" id={autoId()}>採用者名 : <span className="font-weight-bold" id={autoId()}>{state.username}</span></p>
            <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`} id={autoId()}>
                <tr id={autoId()}>
                  <th rowspan="2" className="align-middle" style={{width: '30%'}} id={autoId()}>ペルソナ</th>
                  {
                    state.lessonResult ?
                    state.lessonResult.map((item, index) => (
                        <th style={{width: '23%'}} id={autoId()}>{item.lessonName}</th>
                    ))
                    :
                    'Loading...'
                  }
                </tr>
                <tr id={autoId()}>
                  <td className="border-left-0" id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                </tr>

                <tr id={autoId()}>
                  <th id={autoId()}>コース</th>
                  {
                    state.lessonResult ?
                    state.lessonResult.map((item, index) => (
                      <td id={autoId()}>{item.lessonPersona}</td>
                    ))
                    :
                    'Loading...'
                  }
                </tr>

                <tr id={autoId()}>
                  <th id={autoId()}>ステータス</th>
                  {
                    state.lessonResult ?
                    state.lessonResult.map((item, index) => (
                      <td className={changeColor(item.lessonStatus)} id={autoId()}>{changeText(item.lessonStatus)}</td>
                    ))
                    :
                    'Loading...'
                  }
                </tr>
              </table>
            </div>
            <div className="table-responsive">
              <table className={`table text-center ${classes.cmn_table_detail} ${classes.cmn_table}`} id={autoId()}>
                <tr id={autoId()}>
                  <td style={{width: '5%'}} id={autoId()}>1.</td>
                  <td style={{width: '25%'}} id={autoId()}>アポイント取得</td>
                  <td style={{width: '23%'}} className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>2回</span>
                    <span className={classes.star_icon} id={autoId()}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIconWhite} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>1回</span>
                    <span className={classes.star_icon} id={autoId()}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIconWhite} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light" id={autoId()}>未実施</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}>2.</td>
                  <td id={autoId()}>アポイント取得</td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>2回</span>
                  </td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>1回</span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light" id={autoId()}>未実施</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}>2.</td>
                  <td id={autoId()}>介護の実態①<br/>(データ訴求)</td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block">2回</span>
                  </td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>1回</span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light" id={autoId()}>未実施</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
        </>
    )
}

export default Index
