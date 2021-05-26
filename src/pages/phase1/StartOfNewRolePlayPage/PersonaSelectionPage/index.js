import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import BackButton from "../../../../components/Button/BackButton"
import GeneralButton from "../../../../components/Button/GeneralButton"
import {GeneralDropdown} from "../../../../components/Dropdowns/GeneralDropdown"
import Radio from '../../../../components/RadioButtons';
import CancerInsuranceCard from "../../../../components/Card/CancerInsurance/index";

import classes from "./styles.module.css";

const PersonaSelectionPage = ({ className, style, onEditScenerio }) => {
    const items = [{name:'test1'}, {name: 'test2'}];

    const { t } = useTranslation();
    return (
        <>
      <div className={`cmn-bg-box `}>
        <Row className="mb-32">
          <Col>
            <BackButton title="戻る" className="mr-3" />
            <GeneralButton title="次へ"  onClick={onEditScenerio} />
          </Col>
        </Row>
        <div className={`cmn-bg-box-inr pb-2`}>
            <div className="mb-3">
              <h6 className={`mb-3 ${classes.recruiter_select}`}>募集人の選択</h6>
              <Row>
                <Col lg="4">
                  <GeneralDropdown placeholder="選択してください" items={items} />
                </Col>
              </Row>
            </div>
            <div className="mb-3">
              <h6 className={`font-14 mb-3 ${classes.learning_theme}`}>学習テーマ</h6>
              <FormControlLabel className={classes.root} key="" style={styles.root} id="adfasd" control={
                    <Radio
                        value="adsfa"
                        name="radio-button"
                        color="default"
                        id={`aaaasdf`}
                    />
                } 
                label={<span style={styles.label} className="">保険プログラム</span>} />
            </div>
            <div className="mb-3">
              <h6 className={`font-14 mb-3 ${classes.learning_theme}`}>シナリオ</h6>
              <FormControlLabel className={classes.root} key="" style={styles.root} id="adfasd" control={
                    <Radio
                        value="adsfa"
                        name="radio-button"
                        color="default"
                        id={`aaaasdf`}
                    />
                } 
                label={<span style={styles.label} className="">保険プログラム</span>} />
                <FormControlLabel className={classes.root} key="" style={styles.root} id="adfasd" control={
                      <Radio
                          value="adsfa"
                          name="radio-button"
                          color="default"
                          id={`aaaasdf`}
                      />
                  } 
                  label={<span style={styles.label} className="">医療保険の見直し</span>} />
            </div>
            <Row className={`smallest-padding-box01`}>
              <Col lg="4" md="6" className="mb-3">
                <CancerInsuranceCard />
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <CancerInsuranceCard />
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <CancerInsuranceCard />
              </Col>
            </Row>
        </div>
      </div>
    </>
    )
}

const styles = {
  root: {
      minWidth : '110px',
      marginRight : '0',
      marginBottom: '8px',
      padding: '0',
      marginLeft: '0',
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