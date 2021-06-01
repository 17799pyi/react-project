import React, { createRef, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import BackButton from "../../../../components/Button/BackButton";
import GeneralButton from "../../../../components/Button/GeneralButton";
import { GeneralDropdown } from "../../../../components/Dropdowns/GeneralDropdown";
import InsuranceTypeLabel from "../../../../components/Label/InsuranceTypeLabel"
import Radio from "../../../../components/RadioButtons";
import CancerInsuranceCard from "../../../../components/Card/CancerInsurance/index";

import classes from "./styles.module.css";
import RadioGroup from "@material-ui/core/RadioGroup";

const PersonaSelectionPage = ({ className, style, onEditScenerio }) => {
  const items = [{ name: "test1" }, { name: "test2" }];

  const { t } = useTranslation();
  const [rdoPractice , setPractice] = useState();
  const [rdoValue , setRdoValue] = useState();

  const handleChange = (event) => {
    setPractice(event.target.value);
    console.log(event.target.value)
 };
  const handleRadioChange = (event) => {
     setRdoValue(event.target.value);
     console.log(event.target.value)
  };
  return (
    <>
      <div className={`cmn-bg-box `}>
        {/* <Row className="mb-32">
          <Col>
            <BackButton title="戻る" className="mr-3" />
            <GeneralButton title="次へ" onClick={onEditScenerio} />
          </Col>
        </Row>    */}
        <div className={`cmn-bg-box-inr pb-2`}>
          <div className="mb-4">
            <h6 className={`mb-3 ${classes.recruiter_select}`}>
              {t("recruiter.recruiter_slection")}
            </h6>
            <Row>
              <Col lg="4">
                {/* <GeneralDropdown placeholder="選択してください" items={items} /> */}
                
                <InsuranceTypeLabel label="Jiro Suzuki" className="mb-0 font-weight-bold font-16 px-3"/>
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <h6 className={`font-14 mb-3 ${classes.learning_theme}`}>
              {t("recruiter.curriculum")}
            </h6>
            <FormControlLabel
              className={classes.root}
              key=""
              style={styles.root}
              id="adfasd"
              control={
                <Radio
                  value="practice"
                  name="radio-button"
                  onChange = {handleChange}
                  color="default"
                  id={`aaaasdf`}
                  checked={true}
                />
              }
              label={
                <span style={styles.label} className={'font-weight-bold'}>
                  {t("recruiter.long_term_insurance_practice")}
                </span>
              }
            />
          </div>
          {/* <div className="mb-3">
            <h6 className={`font-14 mb-3 ${classes.learning_theme}`}>
              {t("recruiter.course")}
            </h6>

            <RadioGroup
              aria-label="course"
              name="course"
              onChange={handleRadioChange}
              row
            >
              <FormControlLabel
                className={classes.root}
                key=""
                style={styles.root}
                id="adfasd"
                control={
                  <Radio
                    value="training"
                    name="radio-button"
                    color="default"
                    id={`aaaasdf`}
                  />
                }
                label={
                  <span style={styles.label} className={rdoValue == "training" ? 'font-weight-bold' : ''}>
                    {t("recruiter.role_playing_training")}
                  </span>
                }
              />
              <FormControlLabel
                className={classes.root}
                key=""
                style={styles.root}
                id="adfasd"
                control={
                  <Radio
                    value="test"
                    name="radio-button"
                    color="default"
                    id={`aaaasdf`}
                  />
                }
                label={
                  <span style={styles.label} className={rdoValue == "test" ? 'font-weight-bold' : ''}>
                    {t("recruiter.role_playing_test")}
                  </span>
                }
              />
            </RadioGroup>
          </div> */}
          <Row  className={`smallest-padding-box01`}>
            <Col xl="4" lg="6" className="mb-3">
              <CancerInsuranceCard onEditScenerio={onEditScenerio}/>
            </Col>
            <Col xl="4" lg="6" className="mb-3">
              <CancerInsuranceCard onEditScenerio={onEditScenerio}/>
            </Col>
            <Col xl="4" lg="6" className="mb-3">
              <CancerInsuranceCard onEditScenerio={onEditScenerio}/>
            </Col>
            <Col xl="4" lg="6" className="mb-3">
              <CancerInsuranceCard onEditScenerio={onEditScenerio}/>
            </Col>
            <Col xl="4" lg="6" className="mb-3">
              <CancerInsuranceCard onEditScenerio={onEditScenerio}/>
            </Col>
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
      marginButtom: '0',
      fontSize: '16px',
      fontWeight: 'normal',
      marginRight : '16px',
      marginLeft : '8px',
  }
};

export default PersonaSelectionPage;
