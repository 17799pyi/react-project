import React,{useState,useEffect} from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import GeneralTextbox from '../../../components/Textboxes/GeneralTextbox02';
import HistoryButton from '../../../components/Button/HistoryButton';

import classes from "./styles.module.css";
import { getHistoryList,getCompanyList } from "../../../api/api";
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
  const [inputData, setInputData] = useState(false);
  const [historyList, setHistoryList] = useState([]); 
  const [lessonList, setLessonList] = useState([]);
  const [companyList,setCompanyList] = useState([]);
  const [companyCode, setCompanyCode] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    const setData = async () => {
      try {
        const data = getCompanyList().then((res) => {
          setCompanyList(res.data);
        });
      } catch (error) {
        eventBus.dispatch("something_went_wrong");
      }
    };
    setData();
  },[]); //empty dependency array so

  const handleKeyUp = (event) => {
    const arrayFind = []
    for (const [key, value] of Object.entries(companyList)) {
      if(value.companyCode == event.target.value) {
        arrayFind.push(value);
      }
    }
   
    if(arrayFind.length>0){
      setCompanyCode(arrayFind[0].companyCode)
      setCompanyName(arrayFind[0].companyName)
    }
  }

  const onClickButton = () => {
    if(companyCode.length>0) {

      const setData = async () => {
        try {
          const data = getHistoryList(companyCode+branchCode).then(res =>{
            setHistoryList(res.data)
            setLessonList(res.data.lessonResult)
            props.historyTaskAll(res.data)
            if(res.data.lessonResult.length >=1){
              setShowTable(true);
            }
        })
        } catch (error) {
            eventBus.dispatch("something_went_wrong");
        }
      };
      setData();
      // if(historyList!= null){
        // setShowTable(true);
      // }
    }
  }

  const onInputChange = (event) => {
    if(event.target.value.length != 0) {      
      setInputData(true);
      if(event.target.value.length>0){
        setBranchCode('-'+event.target.value)
      }
      else
      {
        setBranchCode('')
      }
    }else {      
      setInputData(false);
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
                <GeneralTextbox max="7" placeholder="代理店コードを入力してください" onChange={handleKeyUp} id={autoId()}/>
              </Col>
              <Col lg="4" className="d-flex align-items-center">
                <p className={`mt-2 font-16`} id={autoId()}>{companyName}</p>
                {/* 遠州鉄道(株) */}
              </Col>
            </Row>
            <Row className="mb-5">
              <Col xs="12">              
                <p className="font-16" id={autoId()}>出先単位で確認したい場合</p>
                <label className="font-16 font-weight-bold" id={autoId()}>遠州鉄道</label>
              </Col>
              <Col lg="8">
                <GeneralTextbox maxlength="3" placeholder="居場所コードを入力" onChange={onInputChange} id={autoId()}/>
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
                <tr id={autoId()}>
                  <th rowspan="2" className="align-middle" style={{width: '25%'}} id={autoId()}>募集人名</th>
                  <th colspan={historyList.lesson!= null ||historyList.lesson!= undefined?historyList.lesson.length:"3"} id={autoId()}>コース名</th>
                </tr>
                {/* <tr id={autoId()}>
                  <th style={{width: '25%'}} className="border-left-0" id={autoId()}>配偶者ストーリー</th>
                  <th style={{width: '25%'}} className="border-left-0" id={autoId()}>お子様ストーリー</th>
                  <th style={{width: '25%'}} className="border-left-0" id={autoId()}>おひとり様ストーリー</th>
                </tr> */}
                <tr id={autoId()}>
                        {
                          historyList.lesson ? 
                          historyList.lesson.map((item, index) => {
                            return <th key={index} style={{width: '25%'}} className="border-left-0" id={autoId()}>{item.lessonPersona}</th>
                          }) :
                          'Loading...'
                        }
                </tr>

                {
                    lessonList ?
                    lessonList.map((item, index) => (
                        <tr key={index}>
                        <td id={autoId()}><Link to={{pathname:"/history-check-detail",state:{userId:item.userId} }} className={classes.link_txt}>{item.userName}</Link></td>
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