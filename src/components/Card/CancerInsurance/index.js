import React from "react";
import SamplePhoto from "../../../assets/images/recruiters/Frame 3.png";
import { Container, Row, Col } from "reactstrap";
import classes from "./styles.module.css";
import {useTranslation} from 'react-i18next'

function CancerInsuranceCard() {
  const {t} = useTranslation();
  return (
    <div className={`${classes.card_box}`}>
          <Row className="align-items-center">
            <Col xs="3" className={`${classes.image_box}`}>
              <img src={SamplePhoto} alt="Sample Photo" className={`mw-100 ${classes.person}`} />
            </Col>
            <Col xs="9" className={`${classes.image_box}`}>
              <h5 className={`${classes.insurance_title} font-14 mb-1 font-weight-normal`}>{t('recruiter.review_of_cancer_insurance')}</h5>
              <span className={`${classes.indicate} font-12 font-weight-bold`}>{t('recruiter.indicate')}</span>
            </Col>
          </Row>
    </div>
  );
}

export default CancerInsuranceCard;
