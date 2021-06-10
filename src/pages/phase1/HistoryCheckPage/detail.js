import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import SamplePeople1 from "../../../assets/images/recruiters/sample_people1.png";
import SamplePeople2 from "../../../assets/images/recruiters/sample_people2.png";
import SamplePeople3 from "../../../assets/images/recruiters/sample_people3.png";

import StarIcon from "../../../assets/images/icons/star.png";
import StarIconWhite from "../../../assets/images/icons/star_white.png";
import classes from "./styles.module.css";
import { userHistory, useLocation } from "react-router-dom";
import { getHistoryDetailList } from "../../../api/api";
import eventBus from '../../../EventBus'

// import testData from '../../../staticData/test.json';

function Index() {
  const { t } = useTranslation();
  const { state } = useLocation();
  let lastId = 0;
  const autoId = (prefix = "history-check-dt-") => {
    lastId++;
    return `${prefix}${lastId}`;
  };

  const [lessonId, setLessonId] = useState([]);
  const [lessonList, setLessonList] = useState();
  const [lessonResult, setLessonResult] = useState();
  const [personalTaskHistory, setPersonalTaskHistory] = useState();

  const changeColor = (status) => {
    if (status == "FINISH") {
      return "bg-green";
    }
    if (status == "PROCESSING") {
      return "bg-yellow-dark";
    }
    if (status == "NOT_START") {
      return "bg-red";
    }
  };

  const changeText = (status) => {
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
        const data = getHistoryDetailList(state.userId).then((res) => {
          console.log(res.data.lesson, "HistoryDetail")
          setLessonList(res.data.lesson);
          setLessonResult(res.data.lessonResult);
          setPersonalTaskHistory(res.data.personalTaskHistory);
        });
      } catch (error) {
        eventBus.dispatch("something_went_wrong");
      }
    };
    setData();
    // setLessonList(testData.lesson);
    // setPersonalTaskHistory(testData.personalTaskHistory);
  }, [state.userId]); //empty dependency array so

  useEffect(() => {
    let temp = [];
    if(lessonList){
      lessonList.map((item) => {
        temp.push(item.lessonId);
      });
      setLessonId(temp);
    }
  }, [lessonList]);

  const changeStar = (taskRate) => {
    // taskRate?
    // taskRate >= 0.0 && taskRate <= 0.6
    let starCount = 0; //get full star count
    let taskRatePercent = taskRate * 100;
    if (taskRatePercent >= 0 && taskRatePercent <= 60) {
      starCount = 1;
    } else if (taskRatePercent >= 60 && taskRatePercent <= 80) {
      starCount = 2;
    } else if (taskRatePercent >= 80 && taskRatePercent <= 100) {
      starCount = 3;
    }
    let starHtml = [];
    for (let index = 0; index < starCount; index++) {
      //push full start count
      starHtml.push(<img src={StarIcon} alt="StarIcon" />);
    }
    if (starCount < 3) {
      let starWhiteCount = 3 - starCount; //get white star count

      for (let index = 0; index < starWhiteCount; index++) {
        //push white star count
        starHtml.push(<img src={StarIconWhite} alt="StarIcon" />);
      }
    }
    return starHtml;
  };

  const changeBackgroundColorForStar = (taskRate) =>{
    let starCount = 0; //get full star count
    let taskRatePercent = taskRate * 100;
    let backgroundColor = ""
    if (taskRatePercent >= 0 && taskRatePercent <= 60) {
      starCount = 1;
      backgroundColor = "bg-red-light"
    } else if (taskRatePercent >= 60 && taskRatePercent <= 80) {
      starCount = 2;
      backgroundColor = "bg-blue-light"
    } else if (taskRatePercent >= 80 && taskRatePercent <= 100) {
      starCount = 3;
      backgroundColor = "bg-blue-light"
    }
    return backgroundColor;
  };

  return (
    <>
      <Row>
        <Col lg="11">
          <h3 className="mb-32 pb-2" id={autoId()}>
            履歴を確認する
          </h3>
          <p className="font-18 mb-4" id={autoId()}>
            採用者名 :{" "}
            <span className="font-weight-bold" id={autoId()}>
              {state.userId}
            </span>
          </p>
          <div className="table-responsive mb-4">
            <table
              className={`table text-center ${classes.cmn_table}`}
              id={autoId()}
            >
              <tr id={autoId()}>
                <th
                  rowspan="2"
                  className="align-middle"
                  style={{ width: "30%" }}
                  id={autoId()}
                >
                  ペルソナ
                </th>
                {lessonList
                  ? lessonList.map((item, index) => (
                      <th key={index} style={{ width: "23%" }} id={autoId()}>
                        {item.lessonName}
                      </th>
                    ))
                  : "Loading..."}
              </tr>
              <tr id={autoId()}>
                <td className="border-left-0" id={autoId()}>
                  <img src={SamplePeople1} alt="SamplePeople1" />
                </td>
                <td id={autoId()}>
                  <img src={SamplePeople2} alt="SamplePeople1" />
                </td>
                <td id={autoId()}>
                  <img src={SamplePeople3} alt="SamplePeople1" />
                </td>
              </tr>

              <tr id={autoId()}>
                <th id={autoId()}>コース</th>
                {lessonList
                  ? lessonList.map((item, index) => (
                      <td id={autoId()}>{item.lessonPersona}</td>
                    ))
                  : "Loading..."}
              </tr>

              <tr id={autoId()}>
                <th id={autoId()}>ステータス</th>
                {lessonResult
                  ? lessonResult.map((item, index) => (
                      <td
                        className={changeColor(item.lessonStatus)}
                        id={autoId()}
                      >
                        {changeText(item.lessonStatus)}
                      </td>
                    ))
                  : "Loading..."}
              </tr>
            </table>
          </div>
          <div className="table-responsive">
            <table
              className={`table text-center ${classes.cmn_table} ${classes.cmn_table_detail}`}
              id={autoId()}
            >
              {personalTaskHistory
                ? personalTaskHistory.map((item, index) => (
                    <tr id={autoId()}>
                      <td style={{ width: "5%" }} id={autoId()}>
                        {index + 1}.
                      </td>
                      <td style={{ width: "25%" }} id={autoId()}>
                        {item.taskName}
                      </td>
                      {lessonId.map((lesId, index1) =>
                        item.lessonId === lesId && item.taskExecutionTimes === 0 ? (
                          <td
                            style={{ width: "23%", height:"60px" }}
                            className="bg-red-light"
                            id={autoId()}
                          >
                            未実施
                          </td>
                        ) : item.lessonId === lesId ? (
                          <td
                            key={index1}
                            style={{ width: "23%" }}
                            className={changeBackgroundColorForStar(item.taskRate)}
                            id={autoId()}
                          >
                            <span className="d-block" id={autoId()}>
                              {item.taskExecutionTimes}回
                            </span>
                            <span className={classes.star_icon} id={autoId()}>
                              {changeStar(item.taskRate)}
                              {/* <img src={StarIcon} alt="StarIcon" />
                              <img src={StarIcon} alt="StarIcon" />
                              <img src={StarIconWhite} alt="StarIcon" /> */}
                            </span>
                          </td>
                        ) : (
                          <td
                            key={index1}
                            style={{ width: "23%" }}
                            className="bg-blue-light"
                            id={autoId()}
                          >
                            -
                          </td>
                        )
                      )}
                      {/* <td
                        style={{ width: "23%" }}
                        className="bg-blue-light"
                        id={autoId()}
                      >
                        <span className="d-block" id={autoId()}>
                          1回
                        </span>
                        <span className={classes.star_icon} id={autoId()}>
                          <img src={StarIcon} alt="StarIcon" />
                          <img src={StarIcon} alt="StarIcon" />
                          <img src={StarIconWhite} alt="StarIcon" />
                        </span>
                      </td>
                      <td
                        style={{ width: "23%" }}
                        className="bg-red-light"
                        id={autoId()}
                      >
                        未実施
                      </td> */}
                    </tr>
                  ))
                : "Loading..."}
            </table>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Index;
