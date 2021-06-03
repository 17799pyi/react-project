import React from 'react'
import { Row, Col } from 'reactstrap'
import {useTranslation} from 'react-i18next'

import SamplePeople1 from '../../../assets/images/recruiters/sample_people1.png'
import StarIcon from '../../../assets/images/icons/star.png'
import StarIconWhite from '../../../assets/images/icons/star_white.png'
import classes from './styles.module.css'

function Index() {
  const {t} = useTranslation();
  let lastId = 0;
  const autoId = (prefix = 'history-check-dt-') => {
      lastId++;
      return `${prefix}${lastId}`;
  }
    return (
        <>
        <Row>
          <Col lg="11">
            <h3 className="mb-32 pb-2" id={autoId()}>履歴を確認する</h3>
            <p className="font-18 mb-4" id={autoId()}>採用者名 : <span className="font-weight-bold" id={autoId()}>Afuraku Tarou</span></p>
            <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`} id={autoId()}>
                <tr id={autoId()}>
                  <th rowspan="2" className="align-middle" style={{width: '30%'}} id={autoId()}>ペルソナ</th>
                  <th style={{width: '23%'}} id={autoId()}>松尾さん</th>
                  <th style={{width: '23%'}} id={autoId()}>岡田さん</th>
                  <th style={{width: '23%'}} id={autoId()}>安田さん</th>
                </tr>
                <tr id={autoId()}>
                  <td className="border-left-0" id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td id={autoId()}><img src={SamplePeople1} alt="SamplePeople1"/></td>
                </tr>
                <tr id={autoId()}>
                  <th id={autoId()}>コース</th>
                  <td id={autoId()}>配偶者ストーリー</td>
                  <td id={autoId()}>お子様ストーリー</td>
                  <td id={autoId()}>おひとり様ストーリー</td>
                </tr>
                <tr id={autoId()}>
                  <th id={autoId()}>ステータス</th>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-yellow-dark" id={autoId()}>受講中</td>
                  <td className="bg-red" id={autoId()}>未実施</td>
                </tr>
              </table>
            </div>
            <div className="table-responsive">
              <table className={`table text-center ${classes.cmn_table}`} id={autoId()}>
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
                    <span className={classes.star_icon} id={autoId()}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>1回</span>
                    <span className={classes.star_icon} id={autoId()}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light" id={autoId()}>未実施</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}>2.</td>
                  <td id={autoId()}>介護の実態①<br/>(データ訴求)</td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block">2回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td className="bg-blue-light" id={autoId()}>
                    <span className="d-block" id={autoId()}>1回</span>
                    <span className={classes.star_icon} id={autoId()}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
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
