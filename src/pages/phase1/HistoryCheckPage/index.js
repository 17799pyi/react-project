import React,{useState} from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import GeneralTextbox from '../../../components/Textboxes/GeneralTextbox02';
import HistoryButton from '../../../components/Button/HistoryButton';

import classes from "./styles.module.css";


function HistoryCheck() {
  let lastId = 0;
  const autoId = (prefix = 'history-check-') => {
      lastId++;
      return `${prefix}${lastId}`;
  }

  const [showTable, setShowTable] = useState(false);
  const [inputData, SetInputData] = useState(false);

  const onClickButton = () => {
    if(inputData) {
      setShowTable(true);
    }
  }
  const onInputChange = (event) => {
    if(event.target.value.length != 0) {      
      SetInputData(true);
    }else {      
      SetInputData(false);
    }
  }
  

  return (
    <>
      <Row>
        <Col>
          <h3 className={`mb-32 pb-2`} id={autoId()}>履歴を確認する</h3>
        </Col>
      </Row>
      <Row className="medium-padding-box">
        <Col lg="4" md="8" >
          <div className="mb-32">
            <label className="font-16 font-weight-bold" id={autoId()}>代理店コード(7桁)</label>
            <GeneralTextbox max="7" placeholder="代理店コードを入力してください" onChange={onInputChange} id={autoId()}/>
            <p className={`mt-2 font-16 ${showTable?'d-block':'d-none'}`} id={autoId()}>遠州鉄道(株)</p>
          </div>
          <div className="mb-5">
            <p className="font-16" id={autoId()}>出先単位で確認したい場合</p>
            <label className="font-16 font-weight-bold" id={autoId()}>遠州鉄道</label>
            <GeneralTextbox maxlength="3" placeholder="居場所コードを入力" id={autoId()}/>
          </div>
          <Row className={`${classes.row_margin}`}>
            <Col className="text-center mb-3">
              <HistoryButton title="検索" className="small-btn" onClick={onClickButton} disabled="disabled" id={autoId()}/>
            </Col>
          </Row>
        </Col>        
        <Col lg="8" className={`${showTable?'d-block':'d-none'}`}>
          <p className="font-16 font-weight-bold" id={autoId()}>募集人一覧</p>
          <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`} id={autoId()}>
                <tr id={autoId()}>
                  <th rowspan="2" className="align-middle" style={{width: '25%'}} id={autoId()}>コース名</th>
                  <th colspan="3" id={autoId()}>松尾さん</th>
                </tr>
                <tr id={autoId()}>
                  <th style={{width: '25%'}} className="border-left-0" id={autoId()}>配偶者ストーリー</th>
                  <th style={{width: '25%'}} id={autoId()}>お子様ストーリー</th>
                  <th style={{width: '25%'}} id={autoId()}>おひとり様ストーリー</th>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>Afuraku Tarou</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-yellow-dark" id={autoId()}>受講中</td>
                  <td className="bg-red" id={autoId()}>未実装</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>Afuraku Tarou</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>B</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>C</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>D</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                </tr>
                <tr id={autoId()}>
                  <td id={autoId()}><Link to="/HistoryCheckDetail" className={classes.link_txt}>E</Link></td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                  <td className="bg-green" id={autoId()}>受講完了</td>
                </tr>
              </table>
            </div>
        </Col>
      </Row>
    </>
  );
}

export default HistoryCheck;
