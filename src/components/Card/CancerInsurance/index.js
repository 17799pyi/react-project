import React from "react";
import { Container, Row, Col } from "reactstrap";
import {useTranslation} from 'react-i18next'

import classes from "./styles.module.css";
import SamplePhoto from "../../../assets/images/recruiters/Frame 3.png";
import GeneralButton from "../../Button/GeneralButton";
import PercentageLabelBox from "../../Label/PercentageLabelBox";
import {CardDropdown} from "../../Dropdowns/CardDropdown";

function CancerInsuranceCard({onEditScenerio}) {
  const {t} = useTranslation();
  return (
    <div className={`${classes.card_box}`}>
      <Row className="align-items-center">
        <Col xs="3" className={`${classes.image_box}`}>
          <img src={SamplePhoto} alt="Sample Photo" className={`${classes.person}`} />
        </Col>
        <Col xs="9" className={`${classes.image_box}`}>
          <p className="mb-0">佐藤　53歳　男性</p>
          <p>スーパーがん保険 本人型</p>
          {/* <p>{t('recruiter.review_of_cancer_insurance')}</p> */}
          <div className="w-100 d-flex mb-3">
            <PercentageLabelBox label="進捗率" percentage="33%" className="mr-2"/>            
            <GeneralButton title="決定" onClick={onEditScenerio}/>          
          </div>  
        </Col>
      </Row>
      <CardDropdown title={t('recruiter.indicate')} className="offset-3"/>
    </div>
  );
}

export default CancerInsuranceCard;
