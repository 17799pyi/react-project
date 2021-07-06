import React,{useState,useEffect} from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import GeneralTextbox from '../../../constituents/ITextboxes/GeneralTextbox02';
import HistoryButton from '../../../constituents/IButton/HistoryButton';

import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";
import { getHistoryList,getCompanyList } from "../../../request/api";
import eventShuttle from '../../../eventShuttle'
import { connect } from 'react-redux'
import logger from 'redux-logger';
import { historyTaskAll } from '../../../storage/reduxActions/index'
import { useLocation } from 'react-router-dom'
import ErrorMessage from '../../../constituents/IErrorMessage/index'
import ErrorMsgApi from "../../../constituents/IErrorMessage/ErrorMsgApi";

function HistoryCheck(props) {
  const { t } = useTranslation();
  
  const location = useLocation();
  const [vShowTable, setShowTable] = useState(true);
  const [inputData, setInputData] = useState(false);
  const [vHistoryList, setHistoryList] = useState([]); 
  const [vLessonList, setLessonList] = useState([]);
  const [vCompanyList,setCompanyList] = useState([]);
  const [vCompanyCode, setCompanyCode] = useState('');
  const [vBranchCode, setBranchCode] = useState('');
  const [vCompanyName, setCompanyName] = useState();
  const [vCheckHistoryDetailPath, setCheckHistoryDetailPath] = useState("/history-check-detail");
  const [vResponseError, setResponseError] = useState(false)
  const [vShowError, setShowError] = useState(false);
  const [vErrorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const setData = async () => {
      try {
        const data = getCompanyList().then((res) => {
          if(res.data){
            setCompanyList(res.data);
            setResponseError(false)
          }
          else{
            logger.error("Something-went-wrong ! Please check and try again ")
          }
        });
      } catch (error) {
        setResponseError(true)
        setErrorMessage("エラーが発生しました。確認してもう一度お試しください。")
      }
    };
    setData();
  },[]); //empty dependency array so

  const dealKeyUp = (event) => {
    let arrayFind = []
    for (const [key, value] of Object.entries(vCompanyList)) {
      if(event.target.value.length >= 4){
        if(value.companyCode == event.target.value) {
          arrayFind.push(value);
        }
        else {
          setShowError(true)
        }
      }
      else {
        setShowError(false)
      }
    }
    if(arrayFind.length>0){
      setCompanyCode(arrayFind[0].companyCode)
      setCompanyName(arrayFind[0].companyName)
    }
    else{
      setCompanyCode('')
      setCompanyName('')
    }
  }

  //need to change 
  useEffect (() => {
    if(vCompanyName){
      setShowError(false)
    }
  },[vCompanyName])

  useEffect(()=>{
    const setData = async () => {
      try {
        const data = getHistoryList(vCompanyCode + vBranchCode).then(res =>{
          if(res.data){
            setHistoryList(res.data)
            setLessonList(res.data.personaResult)
            props.historyTaskAll(res.data)
            if(res.data.persona.length >=1){
              setShowTable(true);
            }
          }
          else{
            logger.error("Something-went-wrong ! Please check and try again ")
          }
        })
      } catch (error) {
          setResponseError(true)
          setErrorMessage("failed to get history list, try to contact Administrator for details.")
      }
    };
    setData();
  },[])

  const onClickButton = () => {
    if(vCompanyCode && vCompanyCode.length > 0) {

      const setData = async () => {
        try {
          const data = getHistoryList(vCompanyCode + vBranchCode).then(res =>{
            setHistoryList(res.data)
            setLessonList(res.data.personaResult)
            props.historyTaskAll(res.data)
            if(res.data.persona.length >=1){
              setShowTable(true);
            }
        })
        } catch (error) {
            setResponseError(true)
            // setErrorMessage("something-went-wrong ! Please check and try again ")
            setErrorMessage("エラーが発生しました。確認してもう一度お試しください。")
        }
      };
      setData();
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

  const shiftColor= (status) => {
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

  const shiftText=(status) => {
    if(status.trim()=="FINISH"){
      return "受講完了"
    }
    if(status.trim()=="PROCESSING"){
      return "受講中"
    }
    if(status.trim()=="NOT_START"){
      return "未実施"
    }
  }

  return (
    <>
    {vResponseError== true && <ErrorMsgApi
    message= {vErrorMessage && vErrorMessage}
    />}
      <Row>
        <Col>
          <h3 id="manager_screen" name="manager_screen" className={`mb-32 pb-2`}>{t("historycheck.manager_screen")}</h3>
        </Col>
      </Row>
      <Row>
        <Col lg="8" className={`${vShowTable?'d-none':'d-block'}`}>
            <Row className="mb-32">
              <Col xs="12"><label className="font-16 font-weight-bold" id="agency_code" name="agency_code">{t("historycheck.agency_code")}</label></Col>
              <Col lg="8">
                <GeneralTextbox maxLength="7" placeholder={t("historycheck.please_enter_agency_code")} onChange={dealKeyUp} id="agency_code_textbox" name="agency_code_textbox" icon={vShowError==true ? "show" : ""} className={vShowError==true ? "border_danger" : ""}/>
                { vShowError==true && <ErrorMessage message="Please Enter Valid Employee ID" />}
              </Col>
              {/* <Col lg="4" className="d-flex align-items-center">
                <p id="company_name" name="company_name" className={`mt-2 font-16`}>{vCompanyName}</p>
              </Col> */}
            </Row>
            <Row className="mb-5">
              <Col xs="12">              
                <p className="font-16" id="check_on" name="check_on">{t("historycheck.check_on")}</p>
                <label className="font-16 font-weight-bold" id="recruiter_code" name="recruiter_code">{t("historycheck.recruiter_code")}</label>
              </Col>
              <Col lg="8">
                <GeneralTextbox maxLength="3" placeholder={t("historycheck.please_enter_recruiter_code")} onChange={onInputChange} id="recruiter_code_textbox" name="recruiter_code_textbox" className=""/>
              </Col>
            </Row>
            <Row>
              <Col lg="8" className="text-center mb-3">
                <HistoryButton title={t("historycheck.search")} className="small-btn" onClick={onClickButton} disabled="disabled" id="search_button"/>
              </Col>
            </Row>
        </Col>        
        <Col lg="8" className={`${vShowTable?'d-block':'d-none'}`}>
          <p className="font-16 font-weight-bold" id="recruiter_list" name="recruiter_list">{t("historycheck.recruiter_list")}</p>
          <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`} id="history_table" name="history_table">
                <tbody id="recruiter_list_table_body" name="recruiter_list_table_body">
                <tr id="header_row" name="header_row">
                  <th rowSpan="2" className="align-middle" style={{width: '25%'}} id="header_recruiter_name" name="header_recruiter_name">募集人名</th>
                  <th colSpan={vHistoryList.persona!= null && vHistoryList.persona!= undefined?vHistoryList.persona.length:"3"} id="header_course_name" name="header_course_name">コース名</th>
                </tr>
                <tr id="header_row_lesson_persona" name="header_row_lesson_persona">
                        {
                          vHistoryList.persona ? 
                          vHistoryList.persona.map((item, index) => {
                            return <th key={index} style={{width: '25%'}} className="border-left-0" id={`header_lesson_persona_${index+1}`} name={`header_lesson_persona_${index+1}`}>{item.personaInfo}</th>
                          }) :
                          <th>Loading...</th>
                        }
                </tr>

                {
                    vLessonList ?
                    vLessonList.map((item, index) => (
                        <tr id={`data_row_${index+1}`} name={`data_row_${index+1}`} key={index}>
                        <td id={`user_name_${index+1}`} name={`user_name_${index+1}`}><Link to={{pathname:vCheckHistoryDetailPath,state:{userId:item.userId} }} className={classes.link_txt}>{item.userName}</Link></td>
                        {
                          item ? 
                          item.personaResult.map((data, tdindex) => {
                            return <td key={tdindex} className={shiftColor(data.personaStatus)} id={`status_${index+1}${tdindex+1}`} name={`status_${index+1}${tdindex+1}`}>{shiftText(data.personaStatus)}</td>
                          }) :
                          ''
                        }
                        </tr>
                    ))
                    :
                    <tr><th>Loading...</th></tr>
                }
                </tbody>
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