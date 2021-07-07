import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InsuranceTypeLabel from "../../../../constituents/ILabel/InsuranceTypeLabel";
import Radio from "../../../../constituents/IRadioButtons";
import CancerInsuranceCard from "../../../../constituents/ICard/CancerInsurance/index";
import classes from "./styles.module.css";
import { getAuthorizeUserList, getUserList } from "../../../../request/api";
import eventShuttle from '../../../../eventShuttle'
import { connect } from 'react-redux'
import logger from 'redux-logger';
import { loginTaskAll, lessonAll } from '../../../../storage/reduxActions/index'
import ErrorMsgApi from "../../../../constituents/IErrorMessage/ErrorMsgApi";
import { useHistory, useLocation } from 'react-router-dom';

const PersonaSelectionPage = ({ className, style, loginTaskAll, onEditScenerio, lessonAll }) => {
  const items = [{ name: "test1" }, { name: "test2" }];
  const history = useHistory();
  const { t } = useTranslation();
  const [rdoPractice, setPractice] = useState();
  const [rdoValue, setRdoValue] = useState();
  const [vResponseError, setResponseError] = useState(false)
  const [vErrorMessage, setErrorMessage] = useState();
  // const dispatch = useDispatch();
  // const previousPath = useLastLocation();
  const location = useLocation();
  
  // if(previousPath){
  //   if(previousPath.pathname == "/" || previousPath.pathname == "/historycheck" || previousPath.pathname == "/history-check-detail"){
  //     store.dispatch({type: CURRENT_CHOSED_PERSONA, persona: {}})
  //     previousPath.pathname = "/start-new-role-play"
  //   }
  // }

  const handleChange = (event) => {
    setPractice(event.target.value);
  };
  const handleRadioChange = (event) => {
    setRdoValue(event.target.value);
  };

  const [vRecruiterApiData, setApiData] = useState();
  const [vRecruiterName , setRecruiterName] = useState();

  useEffect(() => {
    const setData = async () => {
      try {
        const data = getUserList("/lessons").then(res =>{
        if(res.data){
          setApiData(res.data)
          lessonAll(res.data)
        }
        else{
          logger.error("Something-went-wrong ! Please check and try again ")
        }  
      })
      } catch (error) {
          setResponseError(true)
          // setErrorMessage("something-went-wrong ! Please check and try again ")
          setErrorMessage("エラーが発生しました。確認してもう一度お試しください。")
      }
    };
    setData();
  }, []); 

  useEffect(() => {
    const arrayFind = []
      if(vRecruiterApiData){
        vRecruiterApiData.map((item) =>{
          arrayFind.push(item);
        })
      }
    if(arrayFind.length>0){
      setRecruiterName(arrayFind[0].userName)
    }
  },[vRecruiterApiData])

  useEffect(() => {
    
   
    const setData = async () => {
      try {
        getAuthorizeUserList().then(res =>{
          if(res.data){
            loginTaskAll(res.data)
          } else {
            logger.error("Something-went-wrong ! Please check and try again ")
          }
          let userAuth = res.data.userRoles? res.data.userRoles : [];
          if(location.pathname.split("/")[1] == 'admin' && userAuth && userAuth.includes("ADMINISTRATOR")){
            history.push('/admin/create/tab1')
          }
        })
      } catch (error) {
          // eventShuttle.dispatch("failed to get user authorization, please ask Administrator for help");
          eventShuttle.dispatch("履歴リストの取得に失敗しました。詳しくは管理者にお問い合わせください。");
      }
    };
    setData();
  },[])

  return (
    <>
      {vResponseError== true && <ErrorMsgApi
      message= {vErrorMessage && vErrorMessage}
      />}
      <div className={`cmn-bg-box `}>
        <div className={`cmn-bg-box-inr pb-2`}>
          <div className="mb-4">
            <h6 id="recruiter_selection" name="recruiter_selection" className={`mb-3`}>
              {t("recruiter.recruiter_slection")}
            </h6>
            <Row>
              <Col lg="4">
                <InsuranceTypeLabel
                  id="recruiter_name"
                  name="recruiter_name"
                  label={vRecruiterName}
                  className="mb-0 font-weight-bold font-16 px-3"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <h6 id="curriculum" name="curriculum" className={`font-14 mb-3`}>
              {t("recruiter.curriculum")}
            </h6>
            <FormControlLabel
              className={classes.root}
              key=""
              style={styles.root}
              id="long_term_care"
              name="long_term_care"
              control={
                <Radio
                  value="practice"
                  id="radio_button"
                  name="radio_button"
                  onChange={handleChange}
                  color="default"
                  checked={true}
                />
              }
              label={
                <span id="long_term_insurance_practice" name="long_term_insurance_practice" style={styles.label} className={"font-weight-bold"}>
                  {t("recruiter.long_term_insurance_practice")}
                </span>
              }
            />
          </div>
          <Row className={`smallest-padding-box01`}>
            {
              vRecruiterApiData ?
              vRecruiterApiData.map((item, index) => (
                <Col key={index} id={`cancer_card_${index+1}`} name={`cancer_card_${index+1}`} xl="4" lg="6" className="mb-3">
                  <CancerInsuranceCard
                    id={index+1}
                    onEditScenerio={onEditScenerio}
                    customerData={item}
                  />
                </Col>
              ))
              :
              'Loading...'
            }
          </Row>
        </div>
      </div>
    </>
  );
};

const styles = {
  root: {
    minWidth: "110px",
    marginRight: "0",
    marginBottom: "8px",
    padding: "0",
    marginLeft: "0",
  },
  label: {
    marginButtom: "0",
    fontSize: "16px",
    fontWeight: "normal",
    marginRight: "16px",
    marginLeft: "8px",
  },
};

const stateToProps = state => {
  return {
    login_task_all: state.login_task_all,
    lesson_all: state.lesson_all
  }
}

const dispatchToProps = dispatch => {
  return {
      loginTaskAll: (login_task_all) => {
          dispatch(loginTaskAll(login_task_all));
      },
      lessonAll: (lesson_all) => {
          dispatch(lessonAll(lesson_all));
      }
  }
}

export default connect(stateToProps, dispatchToProps)(PersonaSelectionPage)
