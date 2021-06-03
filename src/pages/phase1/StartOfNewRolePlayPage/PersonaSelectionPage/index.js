import React, { createRef, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

import BackButton from "../../../../components/Button/BackButton";
import GeneralButton from "../../../../components/Button/GeneralButton";
import { GeneralDropdown } from "../../../../components/Dropdowns/GeneralDropdown";
import InsuranceTypeLabel from "../../../../components/Label/InsuranceTypeLabel";
import Radio from "../../../../components/RadioButtons";
import CancerInsuranceCard from "../../../../components/Card/CancerInsurance/index";

import classes from "./styles.module.css";
import RadioGroup from "@material-ui/core/RadioGroup";
import { getUserList } from "../../../../api/api";

const PersonaSelectionPage = ({ className, style, onEditScenerio }) => {
  const items = [{ name: "test1" }, { name: "test2" }];

  const { t } = useTranslation();
  const [rdoPractice, setPractice] = useState();
  const [rdoValue, setRdoValue] = useState();

  const handleChange = (event) => {
    setPractice(event.target.value);
  };
  const handleRadioChange = (event) => {
    setRdoValue(event.target.value);
  };

  const [apiData, setApiData] = useState();

  useEffect(() => {
    const setData = async () => {
      try {
        const data = getUserList("/lessons").then(res =>{
        setApiData(res.data)
      })
      } catch (error) {
          // eventBus.dispatch("something_went_wrong");
      }
    };
    setData();
    console.log(apiData, "apiData");
  }, []); //empty dependency array so

  return (
    <>
      <div className={`cmn-bg-box `}>
        <div className={`cmn-bg-box-inr pb-2`}>
          <div className="mb-4">
            <h6 className={`mb-3 ${classes.recruiter_select}`}>
              {t("recruiter.recruiter_slection")}
            </h6>
            <Row>
              <Col lg="4">
                <InsuranceTypeLabel
                  label="Jiro Suzuki"
                  className="mb-0 font-weight-bold font-16 px-3"
                />
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
                  onChange={handleChange}
                  color="default"
                  id={`aaaasdf`}
                  checked={true}
                />
              }
              label={
                <span style={styles.label} className={"font-weight-bold"}>
                  {t("recruiter.long_term_insurance_practice")}
                </span>
              }
            />
          </div>
          <Row className={`smallest-padding-box01`}>
            {
              apiData ?
              apiData.map((item, index) => (
                <Col key={index} xl="4" lg="6" className="mb-3">
                  <CancerInsuranceCard
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

export default PersonaSelectionPage;
