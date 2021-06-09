import React,{useState,useEffect} from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import GeneralTextbox from '../../../components/Textboxes/GeneralTextbox02';
import HistoryButton from '../../../components/Button/HistoryButton';

import classes from "./styles.module.css";
import { getHistoryList } from "../../../api/api";
import eventBus from '../../../EventBus'
import { connect } from 'react-redux'
import { historyTaskAll } from '../../../store/actions/index'


function HistoryCheck(props) {
  let lastId = 0;
  const autoId = (prefix = 'history-check-') => {
      lastId++;
      return `${prefix}${lastId}`;
  }

  const [showTable, setShowTable] = useState(false);
  const [inputData, SetInputData] = useState(false);
  const [inputText, SetInputText] = useState();
  const [historyList, setHistoryList] = useState([]); 
  const [lessonList, setLessonList] = useState([]);

  const onClickButton = () => {
    if(inputData) {

      const setData = async () => {
        try {
          const data = getHistoryList(inputText).then(res =>{
            setHistoryList(res.data)
            setLessonList(res.data.lessonResult)
            props.historyTaskAll(res.data)
        })
        } catch (error) {
            eventBus.dispatch("something_went_wrong");
        }
      };

      setData();
      // if(historyList!= null){
        setShowTable(true);
      // }
      
    }
  }
  const onInputChange = (event) => {
    if(event.target.value.length != 0) {      
      SetInputData(true);
      SetInputText(event.target.value)
    }else {      
      SetInputData(false);
    }
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
        <Col>
          <h3 className={`mb-32 pb-2`} id={autoId()}>履歴を確認する</h3>
        </Col>
      </Row>
      <Row>
        <Col lg="8" className={`${showTable?'d-none':'d-block'}`}>
            <Row className="mb-32">
              <Col xs="12"><label className="font-16 font-weight-bold" id={autoId()}>代理店コード(7桁)</label></Col>
              <Col lg="8">
                <GeneralTextbox max="7" placeholder="代理店コードを入力してください" onChange={onInputChange} id={autoId()}/>
              </Col>
              <Col lg="4" className="d-flex align-items-center">
                <p className={`mt-2 font-16`} id={autoId()}>遠州鉄道(株)</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs="12">              
                <p className="font-16" id={autoId()}>出先単位で確認したい場合</p>
                <label className="font-16 font-weight-bold" id={autoId()}>遠州鉄道</label>
              </Col>
              <Col lg="8">
                <GeneralTextbox maxlength="3" placeholder="居場所コードを入力" id={autoId()}/>
              </Col>
            </Row>
            <Row className={`${classes.row_margin}`}>
              <Col lg="8" className="text-center mb-3">
                <HistoryButton title="検索" className="small-btn" onClick={onClickButton} disabled="disabled" id={autoId()}/>
              </Col>
            </Row>
        </Col>        
        <Col lg="8" className={`${showTable?'d-block':'d-none'}`}>
          <p className="font-16 font-weight-bold" id={autoId()}>募集人一覧</p>
          <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`} id={autoId()}>
                { historyList.lesson ? 
                  <>
                    <tr id={autoId()}>
                      <th rowspan="2" className="align-middle" style={{width: '25%'}} id={autoId()}>募集人名</th>
                      <th colspan="3" id={autoId()}>コース名</th>
                    </tr>
                    <tr>
                      {
                        historyList.lesson.map((item, index) => {
                          return <th key={index} style={{width: '25%'}} className="border-left-0" id={autoId()}>{item.lessonPersona}</th>
                        })
                      }
                    </tr>
                  </>
                :
                    <tr id={autoId()}>
                          Loading...
                    </tr> 
                } 
                {
                    lessonList ?
                    lessonList.map((item, index) => (
                        <tr key={index}>
                        <td id={autoId()}><Link to={{pathname:"/history-check-detail",state:{username:item.userName, lessonResult:item.lessonResult} }} className={classes.link_txt}>{item.userName}</Link></td>
                        {
                          item ? 
                          item.lessonResult.map((data, index) => {
                            return <td key={index} className={changeColor(data.lessonStatus)} id={autoId()}>{changeText(data.lessonStatus)}</td>
                          }) :
                          ''
                        }
                        </tr>
                    ))
                    :
                    'Loading...'
                }
              </table>
            </div>
        </Col>
      </Row>
    </>
  );
}

const stateToProps = state => {
  return {
    history_task_all: state.history_task_all,
  }
}

const dispatchToProps = dispatch => {
  return {
      historyTaskAll: (history_task_all) => {
          dispatch(historyTaskAll(history_task_all));
      }
  }
}

export default connect(stateToProps, dispatchToProps)(HistoryCheck)