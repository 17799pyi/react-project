import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import SamplePeople1 from "../../../property/images/recruiters/sample_people1.png";
import SamplePeople2 from "../../../property/images/recruiters/sample_people2.png";
import SamplePeople3 from "../../../property/images/recruiters/sample_people3.png";

import StarIcon from "../../../property/images/icons/star.png";
import StarIconWhite from "../../../property/images/icons/star_white.png";
import classes from "./styles.module.css";
import { userHistory, useLocation } from "react-router-dom";
import { getHistoryDetailList } from "../../../request/api";
import eventShuttle from '../../../eventShuttle'
import { connect } from 'react-redux'

function Index(login_task_all) {
  const { t } = useTranslation();
  const { state } = useLocation();
  let lastId = 0;
  const autoId = (prefix = "history-check-dt-") => {
    lastId++;
    return `${prefix}${lastId}`;
  };

  const [vLessonId, setLessonId] = useState([]);
  const [vUserName ,setUserName] = useState();
  const [vLessonList, setLessonList] = useState();
  const [vLessonResult, setLessonResult] = useState();
  const [vPersonalTaskHistory, setPersonalTaskHistory] = useState();
  const [vShowTable, setShowTable] = useState(false);

  const shiftColor = (status) => {
    if (status.trim() == "FINISH") {
      return "bg-green";
    }
    if (status.trim() == "PROCESSING") {
      return "bg-yellow-dark";
    }
    if (status.trim() == "NOT_START") {
      return "bg-red";
    }
  };

  const shiftText = (status) => {
    if (status.trim() == "FINISH") {
      return "受講完了";
    }
    if (status.trim() == "PROCESSING") {
      return "受講中";
    }
    if (status.trim() == "NOT_START") {
      return "未実装";
    }
  };

  useEffect(() => {
    const setData = async () => {
      try {
        let loginUserId = login_task_all?login_task_all.login_task_all.userId.value : null
        let userId = (state != undefined) ? state.userId : loginUserId?loginUserId:'';

        const data = getHistoryDetailList(userId).then((res) => {
          setUserName(res.data.userName)
          setLessonList(res.data.persona);
          setLessonResult(res.data.personaResult);
          setPersonalTaskHistory(res.data.personalSectionHistory);
          if((res.data.persona!= null && res.data.persona != undefined && res.data.personalSectionHistory != null && res.data.personalSectionHistory != undefined)){
            if(res.data.persona.length>0){
              setShowTable(true)
            }
          }
        });
      } catch (error) {
        eventShuttle.dispatch("something_went_wrong");
      }
    };
    setData();
  }, [state,vUserName]); //empty dependency array so

  useEffect(() => {
    let temp = [];
    if(vLessonList){
      vLessonList.map((item) => {
        temp.push(item.personaId);
      });
      setLessonId(temp);
    }
  }, [vLessonList]);

  const shiftStar = (taskRate) => {
    let starCount = 0; //get full star count
    let taskRatePercent = taskRate * 100;
    if (taskRatePercent >= 0 && taskRatePercent <= 69) {
      starCount = 1;
    } else if (taskRatePercent >= 70 && taskRatePercent <= 84) {
      starCount = 2;
    } else if (taskRatePercent >= 85 && taskRatePercent <= 100) {
      starCount = 3;
    }
    let starHtml = [];
    for (let index = 0; index < starCount; index++) {
      //push full start count
      starHtml.push(<img src={StarIcon} key={index} alt="StarIcon" />);
    }
    if (starCount < 3) {
      let starWhiteCount = 3 - starCount; //get white star count

      for (let index = 0; index < starWhiteCount; index++) {
        //push white star count
        starHtml.push(<img src={StarIconWhite} key={index+starCount} alt="StarIcon" />);
      }
    }
    return starHtml;
  };

  const shiftBackgroundColorForStar = (taskRate) =>{
    let starCount = 0; //get full star count
    let taskRatePercent = taskRate * 100;
    let backgroundColor = ""
    if (taskRatePercent >= 0 && taskRatePercent <= 69) {
      starCount = 1;
      backgroundColor = "bg-red-light"
    } else if (taskRatePercent >= 70 && taskRatePercent <= 84) {
      starCount = 2;
      backgroundColor = "bg-blue-light"
    } else if (taskRatePercent >= 85 && taskRatePercent <= 100) {
      starCount = 3;
      backgroundColor = "bg-blue-light"
    }
    return backgroundColor;
  };

  return (
    <>
      <Row>
        <Col lg="11">
          <h3 id="progress" name="progress" className="mb-32 pb-2">
            進捗状況
          </h3>
          <p className="font-18 mb-4" id="detail_page_user_name" name="detail_page_user_name">
          {t("historycheck.recruiter_name")} :{" "}
            <span className="font-weight-bold" id="user_name" name="user_name">
              {vUserName}
            </span>
          </p>
          <div className={`${vShowTable?'d-block table-responsive mb-4':'d-none table-responsive mb-4'}`}>
            <table
              className={`table text-center ${classes.cmn_table}`}
              id="history_detail_table_1"
              name="history_detail_table_1"
            >
              <tbody>
              <tr id="header_row" name="header_row">
                <th
                  rowSpan="2"
                  className="align-middle"
                  style={{ width: "30%" }}
                  id="persona"
                  name="persona"
                >
                  ペルソナ
                </th>
                {vLessonList
                  ? vLessonList.map((item, index) => (
                      <th key={index} style={{ width: "23%" }} id={`lesson_name_${index+1}`} name={`lesson_name_${index+1}`}>
                        {item.personaName}
                      </th>
                    ))
                  : <th>Loading...</th>}
              </tr>
              <tr id="people_icon" name="people_icon">
                <td className="border-left-0" id="people_1">
                  <img id="sample_people_1" name="sample_people_1" src={SamplePeople1} alt="SamplePeople1" />
                </td>
                <td id="people_2" name="sample_people_2">
                  <img id="sample_people_2" name="sample_people_2" src={SamplePeople2} alt="SamplePeople1" />
                </td>
                <td id="people_3" name="sample_people_3">
                  <img id="sample_people_3" name="sample_people_3" src={SamplePeople3} alt="SamplePeople1" />
                </td>
              </tr>

              <tr id="lesson_persona_row" name="lesson_persona_row">
                <th id="course" name="course">コース</th>
                {vLessonList
                  ? vLessonList.map((item, index) => (
                      <td key={index} id={`lesson_persona_${index+1}`} name={`lesson_persona_${index+1}`}>{item.personaInfo}</td>
                    ))
                  : <td>Loading...</td>}
              </tr>

              <tr id="status_row" name="status_row">
                <th id="status" name="status">ステータス</th>
                {vLessonResult
                  ? vLessonResult.map((item, index) => (
                      <td
                        key={index}
                        className={shiftColor(item.personaStatus)}
                        id={`lesson_status_${index+1}`}
                        name={`lesson_status_${index+1}`}
                      >
                        {shiftText(item.personaStatus)}
                      </td>
                    ))
                  : <td>Loading...</td>}
              </tr>
              </tbody>
            </table>
          </div>
          <div className={`${classes.cmn_table_detail_wrap} ${vShowTable?'d-block table-responsive cmn-scroll-bar':'d-none table-responsive cmn-scroll-bar'}`}>
            <table
              className={`table text-center ${classes.cmn_table} ${classes.cmn_table_detail}`}
              id="history_detail_table_2"
              name="history_detail_table_2"
            >
              <tbody>
              {vPersonalTaskHistory
                ? vPersonalTaskHistory.map((item, index) => (
                    <tr key={index} id={`persona_task_history_${index+1}`} name={`persona_task_history_${index+1}`}>
                      <td style={{ width: "5%" }} id={`table_no_${index+1}`} name={`table_no_${index+1}`}>
                        {index + 1}.
                      </td>
                      <td style={{ width: "25%" }} id={`task_name_${index+1}`} name={`task_name_${index+1}`}>
                        {item.sectionName}
                      </td>
                      {vLessonId.map((lesId, index1) =>
                        item.personaId === lesId && item.sectionExecutionTimes === 0 ? (
                          <td
                            key = {index1}
                            style={{ width: "23%", height:"60px" }}
                            className="bg-red-light"
                            id={`no_implemented_${index+1}${index1+1}`}
                            name={`no_implemented_${index+1}${index1+1}`}
                          >
                            未実施
                          </td>
                        ) : item.personaId === lesId ? (
                          <td
                            key={index1}
                            style={{ width: "23%" }}
                            className={shiftBackgroundColorForStar(item.sectionRate)}
                            id={`persona_best_display_${index+1}${index1+1}`}
                            name={`persona_best_display_${index+1}${index1+1}`}
                          >
                            <span className="d-block" id={`task_execution_time_${index+1}${index1+1}`} name={`task_execution_time_${index+1}${index1+1}`}>
                              {item.sectionExecutionTimes}回
                            </span>
                            <span className={classes.star_icon} id={`task_rate_${index+1}${index1+1}`} name={`task_rate_${index+1}${index1+1}`}>
                              {shiftStar(item.sectionRate)}
                            </span>
                          </td>
                        ) : (
                          <td
                            key={index1}
                            style={{ width: "23%" }}
                            className="bg-blue-light"
                            id={`empty_${index+1}${index1+1}`}
                            name={`empty_${index+1}${index1+1}`}
                          >
                            -
                          </td>
                        )
                      )}
                    </tr>
                  ))
                : <tr><td>LOADING...</td></tr>}
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
    login_task_all: state.login_task_all,
  }
}

export default connect(stateToProps, null)(Index)