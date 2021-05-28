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
          <div className="w-100 d-flex flex-wrap mb-2">
            <PercentageLabelBox label={t('recruiter.progress_rate')} percentage="33%" className="mr-2 mb-2"/>            
            <GeneralButton title={t('recruiter.decision')} onClick={onEditScenerio} className="mb-2"/>          
          </div>  
        </Col>
      </Row>
      <CardDropdown title={t('recruiter.view_details')} className="offset-3"/>
    </div>
  );
}

export default CancerInsuranceCard;
