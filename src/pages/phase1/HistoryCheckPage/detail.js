import React from 'react'
import { Row, Col } from 'reactstrap'
import {useTranslation} from 'react-i18next'

import SamplePeople1 from '../../../assets/images/recruiters/sample_people1.png'
import StarIcon from '../../../assets/images/icons/star.png'
import StarIconWhite from '../../../assets/images/icons/star_white.png'
import classes from './styles.module.css'

function Index() {
  const {t} = useTranslation();
    return (
        <>
        <Row>
          <Col lg="11">
            <h3 className="mb-32 pb-2">履歴を確認する</h3>
            <p className="font-18 mb-4">採用者名 : <span className="font-weight-bold">Afuraku Tarou</span></p>
            <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`}>
                <tr>
                  <th rowspan="2" className="align-middle" style={{width: '30%'}}>ペルソナ</th>
                  <th style={{width: '23%'}}>松尾さん</th>
                  <th style={{width: '23%'}}>岡田さん</th>
                  <th style={{width: '23%'}}>安田さん</th>
                </tr>
                <tr>
                  <td className="border-left-0"><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td><img src={SamplePeople1} alt="SamplePeople1"/></td>
                  <td><img src={SamplePeople1} alt="SamplePeople1"/></td>
                </tr>
                <tr>
                  <th>コース</th>
                  <td>配偶者ストーリー</td>
                  <td>お子様ストーリー</td>
                  <td>おひとり様ストーリー</td>
                </tr>
                <tr>
                  <th>ステータス</th>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-yellow-dark">受講中</td>
                  <td className="bg-red">未実施</td>
                </tr>
              </table>
            </div>
            <div className="table-responsive">
              <table className={`table text-center ${classes.cmn_table}`}>
                <tr>
                  <td style={{width: '5%'}}>1.</td>
                  <td style={{width: '25%'}}>アポイント取得</td>
                  <td style={{width: '23%'}} className="bg-blue-light">
                    <span className="d-block">2回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIconWhite} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-blue-light">
                    <span className="d-block">1回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIconWhite} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light">未実施</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>アポイント取得</td>
                  <td className="bg-blue-light">
                    <span className="d-block">2回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td className="bg-blue-light">
                    <span className="d-block">1回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light">未実施</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>介護の実態①<br/>(データ訴求)</td>
                  <td className="bg-blue-light">
                    <span className="d-block">2回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td className="bg-blue-light">
                    <span className="d-block">1回</span>
                    <span className={classes.star_icon}>
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                      <img src={StarIcon} alt="StarIcon" />
                    </span>
                  </td>
                  <td style={{width: '23%'}} className="bg-red-light">未実施</td>
                </tr>
              </table>
            </div>
          </Col>
        </Row>
        </>
    )
}

export default Index
