import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import SamplePeople1 from "../../../property/images/recruiters/sample_people1.png";
import SamplePeople2 from "../../../property/images/recruiters/sample_people2.png";
import SamplePeople3 from "../../../property/images/recruiters/sample_people3.png";

import StarIcon from "../../../property/images/icons/star.png";
import StarIconWhite from "../../../property/images/icons/star_white.png";
import classes from "./styles.module.css";
import { userHistory, useLocation, Link } from "react-router-dom";
import { getHistoryDetailList } from "../../../request/api";
import eventShuttle from "../../../eventShuttle";
import { connect } from "react-redux";
import logger from "redux-logger";
import lodash from "lodash";
import moment from "moment";
import ErrorMsgApi from "../../../constituents/IErrorMessage/ErrorMsgApi";
import { OpenInBrowserSharp } from "@material-ui/icons";
import { Duration } from "luxon";

function Index(login_task_all) {
  const { t } = useTranslation();
  const { state } = useLocation();

  const [vLessonId, setLessonId] = useState([]);
  const [vUserName, setUserName] = useState();
  const [vLessonList, setLessonList] = useState();
  const [vLessonResult, setLessonResult] = useState();
  const [vPersonalTaskHistory, setPersonalTaskHistory] = useState();
  const [vShowTable, setShowTable] = useState(false);
  const [vResponseError, setResponseError] = useState(false);
  const [vLessonIdGroup, setLessonIdGroup] = useState();
  const [vErrorMessage, setErrorMessage] = useState();
  const [vTabelManipulationList, setTabelManipulationList] = useState({});
  const [vExecutionTimeArray, setExectionTimeArray] = useState([]);
  const [vDurationTimeArray, setDurationTimeArray] = useState([]);
  const [vStarCountArray, setStarCountArray] = useState([]);

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
      return "未実施";
    }
  };

  useEffect(() => {
    const setData = async () => {
      try {
        let loginUserId = login_task_all
          ? login_task_all.login_task_all.userId.value
          : null;
        let userId =
          state != false ? state.userId : loginUserId ? loginUserId : "";
        const data = getHistoryDetailList(userId).then((res) => {
          if (res.data) {
            if (res.data.errorCode) {
              setShowTable(false);
              setResponseError(true);
              // setErrorMessage(res.data.errorMessage)
              setErrorMessage("そのようなユーザーのデータはありません。");
            }
            setUserName(res.data.userName);
            let personaSort = [];
            if (res.data.persona) {
              personaSort = res.data.persona.sort(
                (a, b) => a.personaId - b.personaId
              );
            }
            setLessonList(personaSort);
            setLessonResult(res.data.personaResult);
            setPersonalTaskHistory(res.data.personalSectionHistory);
            setLessonIdGroup(
              lodash.groupBy(res.data.personalSectionHistory, "personaId")
            );
            if (
              res.data.persona != null &&
              res.data.persona != undefined &&
              res.data.personalSectionHistory != null &&
              res.data.personalSectionHistory != undefined
            ) {
              if (res.data.persona.length > 0) {
                setShowTable(true);
              }
            }
          } else {
            logger.error("Something-went-wrong ! Please check and try again");
          }
        });
      } catch (error) {
        setResponseError(true);
        setErrorMessage(
          "エラーが発生しました。確認してもう一度お試しください。"
        );
      }
    };
    setData();
  }, [state, vUserName]); //empty dependency array so

  useEffect(() => {
    let dataManipulation = [];
    if (vPersonalTaskHistory) {
      vPersonalTaskHistory.map((v, k) => {
        let item = v;
        let sectionNameSplit = item.sectionName.split("\n")[0];
        item["section_name_code"] = sectionNameSplit;
        dataManipulation.push(item);
      });
      let groupByPersonaId = lodash.groupBy(
        dataManipulation,
        "section_name_code"
      );
      setTabelManipulationList(groupByPersonaId);
    }
  }, [vPersonalTaskHistory]);

  useEffect(() => {
    let temp = [];
    if (vLessonList) {
      vLessonList.map((item) => {
        temp.push(item.personaId);
      });
      setLessonId(temp);
    }
  }, [vLessonList]);

  const shiftStar = (taskRate) => {
    let starCount = getStarCount(taskRate); //get full star count
    let starHtml = [];
    for (let index = 0; index < starCount; index++) {
      //push full start count
      starHtml.push(<img src={StarIcon} key={index} alt="StarIcon" />);
    }
    if (starCount < 3) {
      let starWhiteCount = 3 - starCount; //get white star count

      for (let index = 0; index < starWhiteCount; index++) {
        //push white star count
        starHtml.push(
          <img src={StarIconWhite} key={index + starCount} alt="StarIcon" />
        );
      }
    }
    return starHtml;
  };

  const shiftBackgroundColorForStar = (taskRate) => {
    let starCount = 0; //get full star count
    let taskRatePercent = taskRate * 100;
    let backgroundColor = "";
    if (taskRatePercent >= 0 && taskRatePercent <= 69) {
      starCount = 1;
      backgroundColor = "bg-red-light";
    } else if (taskRatePercent >= 70 && taskRatePercent <= 84) {
      starCount = 2;
      backgroundColor = "bg-blue-light";
    } else if (taskRatePercent >= 85 && taskRatePercent <= 100) {
      starCount = 3;
      backgroundColor = "bg-blue-light";
    }
    return backgroundColor;
  };

  const getStarCount = (taskRate) => {
    const percentage = taskRate * 100;
    if (percentage >= 0 && percentage <= 69) {
      return 1;
    } else if (percentage >= 70 && percentage <= 84) {
      return 2;
    } else if (percentage >= 85 && percentage <= 100) {
      return 3;
    } else {
      return 0;
    }
  };

  function calculatePercentage(value, total) {
    let fixDecimal = 2;
    let percentage = 0;
    if (total > 0) {
      percentage = (value / total) * 100;
      percentage = percentage.toFixed(2);
      percentage = percentage.toString();
      percentage = percentage.slice(
        0,
        percentage.indexOf(".") + fixDecimal + 1
      );
      return Number(percentage);
    }
    return 0;
  }

  useEffect(() => {
    let dataArrange = [];
    if (vPersonalTaskHistory) {
      vPersonalTaskHistory.map((v, k) => {
        let item = v;
        let sectionNameSplit = item.sectionName.split("\n")[0];
        item["section_name_code"] = sectionNameSplit;
        dataArrange.push(item);
      });
      let personaIdSort = dataArrange.sort((a, b) => a.personaId - b.personaId);
      let groupByPersonaId = lodash.groupBy(personaIdSort, "personaId");

      const personaIdList = Object.keys(groupByPersonaId);
      const personaArray = Object.values(groupByPersonaId).flat();

      const executionTimeArray = Object.values(groupByPersonaId).map((item) => {
        return item.reduce(
          (accumulator, currentValue) =>
            currentValue.sectionExecutionTimes + accumulator,
          0
        );
      });
      setExectionTimeArray(executionTimeArray);

      const durationTimeArray = Object.values(groupByPersonaId).map((item) => {
        const filter = item.filter((val) => val.sectionExecutionTimes > 0);
        const totalDuration = filter.reduce(
          (accumulator, currentValue) =>
            Duration.fromISOTime(currentValue.duration).plus(accumulator),
          Duration.fromISOTime("00:00:00")
        );
        return totalDuration.toFormat("hh:mm:ss");
      });
      setDurationTimeArray(durationTimeArray);

      const starCountArray = Object.values(groupByPersonaId).map((item) => {
        const filter = item.filter((val) => val.sectionExecutionTimes > 0);
        return filter.reduce(
          (accumulator, currentValue) =>
            getStarCount(currentValue.sectionRate) + accumulator,
          0
        );
      });
      setStarCountArray(starCountArray);
    }
  }, [vTabelManipulationList]);

  return (
    <>
      {vResponseError == true && (
        <ErrorMsgApi message={vErrorMessage && vErrorMessage} />
      )}
      <Row>
        <Col lg="11">
          <h3 id="progress" name="progress" className="mb-32 pb-2">
            進捗状況
          </h3>
          <p
            className="font-18 mb-4"
            id="detail_page_user_name"
            name="detail_page_user_name"
          >
            {t("historycheck.recruiter_name")} :{" "}
            <span className="font-weight-bold" id="user_name" name="user_name">
              {vUserName ? vUserName : "--"}
            </span>
          </p>
          {vShowTable === true && (
            <div
              className={`${
                vShowTable
                  ? "d-block table-responsive mb-4"
                  : "d-none table-responsive mb-4"
              }`}
            >
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
                    {vLessonList ? (
                      vLessonList.map((item, index) => (
                        <th
                          key={index}
                          style={{ width: "23%" }}
                          id={`lesson_name_${index + 1}`}
                          name={`lesson_name_${index + 1}`}
                        >
                          {item.personaName}
                        </th>
                      ))
                    ) : (
                      <th>Loading...</th>
                    )}
                  </tr>
                  <tr id="people_icon" name="people_icon">
                    <td className="border-left-0" id="people_1">
                      <img
                        id="sample_people_1"
                        name="sample_people_1"
                        src={SamplePeople1}
                        alt="SamplePeople1"
                      />
                    </td>
                    <td id="people_2" name="sample_people_2">
                      <img
                        id="sample_people_2"
                        name="sample_people_2"
                        src={SamplePeople2}
                        alt="SamplePeople1"
                      />
                    </td>
                    <td id="people_3" name="sample_people_3">
                      <img
                        id="sample_people_3"
                        name="sample_people_3"
                        src={SamplePeople3}
                        alt="SamplePeople1"
                      />
                    </td>
                  </tr>

                  <tr id="lesson_persona_row" name="lesson_persona_row">
                    <th id="course" name="course">
                      コース
                    </th>
                    {vLessonList ? (
                      vLessonList.map((item, index) => (
                        <td
                          key={index}
                          id={`lesson_persona_${index + 1}`}
                          name={`lesson_persona_${index + 1}`}
                        >
                          {item.personaInfo}
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>

                  <tr id="progress_row" name="progress_row">
                    <th id="progress" name="progress">
                      進捗率
                    </th>
                    {vLessonResult != [] && vLessonResult != undefined ? (
                      vLessonResult.map((item, index) => (
                        <td
                          key={index}
                          className=""
                          id={`progress_rate_${index + 1}`}
                          name={`progress_rate_${index + 1}`}
                        >
                          {calculatePercentage(
                            item.clearedSectionCount,
                            item.sectionCount
                          )}
                          <span>
                            % ({item.clearedSectionCount}/{item.sectionCount})
                          </span>
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>

                  <tr id="total_execution" name="total_execution">
                    <th id="execution" name="execution">
                      総プレイ回数
                    </th>
                    {vExecutionTimeArray ? (
                      vExecutionTimeArray.map((item, index) => (
                        <td
                          key={index}
                          id={`total_execution_time_${index + 1}`}
                          name={`total_execution_time_${index + 1}`}
                        >
                          {item}回
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>

                  <tr id="total_duration" name="total_duration">
                    <th id="duration" name="duration">
                      総プレイ時間
                    </th>
                    {vDurationTimeArray ? (
                      vDurationTimeArray.map((item, index) => (
                        <td
                          key={index}
                          id={`total_duration_${index + 1}`}
                          name={`total_duration_${index + 1}`}
                        >
                          {item}
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>

                  <tr id="total_star" name="total_star">
                    <th id="start" name="start">
                      習熟度
                    </th>
                    {vStarCountArray != [] && vStarCountArray != undefined ? (
                      vStarCountArray.map((item, index) => (
                        <td
                          key={index}
                          id={`total_start_count_${index + 1}`}
                          name={`total_start_count_${index + 1}`}
                        >
                          {calculatePercentage(
                            item,
                            vLessonList[index] &&
                              vLessonList[index].sectionCount * 3
                          )}
                          % ({item}/
                          {vLessonList[index].sectionCount &&
                            vLessonList[index].sectionCount * 3}
                          )
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>

                  <tr id="status_row" name="status_row">
                    <th id="status" name="status">
                      ステータス
                    </th>
                    {vLessonResult ? (
                      vLessonResult.map((item, index) => (
                        <td
                          key={index}
                          className={shiftColor(item.personaStatus)}
                          id={`lesson_status_${index + 1}`}
                          name={`lesson_status_${index + 1}`}
                        >
                          {shiftText(item.personaStatus)}
                        </td>
                      ))
                    ) : (
                      <td>Loading...</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div
            className={`${
              vShowTable
                ? "d-block table-responsive"
                : "d-none table-responsive"
            }`}
          >
            <table
              className={`table text-center ${classes.cmn_table} ${classes.cmn_table_detail}`}
              id="history_detail_table_2"
              name="history_detail_table_2"
            >
              <tbody>
                {Object.keys(vTabelManipulationList).map((item, i) => {
                  let personaIdSort = vTabelManipulationList[item].sort(
                    (a, b) => a.personaId - b.personaId
                  );
                  return (
                    <tr
                      key={i}
                      id={`persona_task_history_${i + 1}`}
                      name={`persona_task_history_${i + 1}`}
                    >
                      <td
                        style={{ width: "5%" }}
                        id={`table_no_${i + 1}`}
                        name={`table_no_${i + 1}`}
                      >
                        {i + 1}.
                      </td>
                      <td
                        style={{ width: "25%" }}
                        id={`task_name_${i + 1}`}
                        name={`task_name_${i + 1}`}
                      >
                        {vTabelManipulationList[item]
                          ? vTabelManipulationList[item][
                              Object.keys(vTabelManipulationList[item])[0]
                            ].section_name_code
                          : item}
                        {/* {item} */}
                      </td>
                      {personaIdSort.map((value, index) => {
                        if (value.sectionExecutionTimes == 0) {
                          return (
                            <td
                              key={index}
                              style={{ width: "23%", height: "60px" }}
                              className="bg-red-light"
                              id={`no_implemented_${i + 1}${index + 1}`}
                              name={`no_implemented_${i + 1}${index + 1}`}
                            >
                              未実施
                            </td>
                          );
                        } else if (value.sectionExecutionTimes > 0) {
                          return (
                            <td
                              key={index}
                              style={{ width: "23%" }}
                              className={shiftBackgroundColorForStar(
                                value.sectionRate
                              )}
                              id={`persona_best_display_${i + 1}${index + 1}`}
                              name={`persona_best_display_${i + 1}${index + 1}`}
                            >
                              <Link
                                to={{
                                  pathname: `/ai-score/${value.sectionId}/${value.personaId}`,
                                  state: { isShowStory: false },
                                }}
                                className=""
                              >
                                <span
                                  className="d-block"
                                  id={`task_execution_time_${i + 1}${
                                    index + 1
                                  }`}
                                  name={`task_execution_time_${i + 1}${
                                    index + 1
                                  }`}
                                >
                                  {value.sectionExecutionTimes}回
                                </span>
                                {value.duration ? (
                                  <span className="d-block">
                                    {value.duration}
                                  </span>
                                ) : (
                                  ""
                                )}
                                <span
                                  className={classes.star_icon}
                                  id={`task_rate_${i + 1}${index + 1}`}
                                  name={`task_rate_${i + 1}${index + 1}`}
                                >
                                  {shiftStar(value.sectionRate)}
                                </span>
                              </Link>
                            </td>
                          );
                        } else {
                          return (
                            <td
                              key={index}
                              style={{ width: "23%" }}
                              className="bg-blue-light"
                              id={`empty_${i + 1}${index + 1}`}
                              name={`empty_${i + 1}${index + 1}`}
                            >
                              -
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </>
  );
}

const stateToProps = (state) => {
  return {
    login_task_all: state.login_task_all,
  };
};

export default connect(stateToProps, null)(Index);
