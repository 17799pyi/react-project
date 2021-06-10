import React from "react";
import { Container, Row, Col } from "reactstrap";
import {useTranslation} from 'react-i18next'

import classes from "./styles.module.css";
import SamplePhoto from "../../../assets/images/recruiters/Frame 3.png";
import SamplePeople1 from "../../../assets/images/recruiters/sample_people1.png";
import SamplePeople2 from "../../../assets/images/recruiters/sample_people2.png";
import SamplePeople3 from "../../../assets/images/recruiters/sample_people3.png";

import GeneralButton from "../../Button/GeneralButton";
import PercentageLabelBox from "../../Label/PercentageLabelBox";
import {CardDropdown} from "../../Dropdowns/CardDropdown";

function CancerInsuranceCard({onEditScenerio,customerData}) {
  const {t,i18n} = useTranslation();

  const chgScenerio = () => {
    onEditScenerio(customerData.id)
  }
  function ParseFloat(str,val) {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1); 
    return Number(str);   
  }

  const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
  
  const changePicture = (name) => {
    if(name.trim() == "松尾さん")
    {
      return SamplePeople1
    }
    if(name.trim() == "岡田さん"){
      return SamplePeople2
    }
    if(name.trim() == "安田さん"){
      return SamplePeople3
    }
  }

  return (
    <div className={`${classes.card_box}`}>
      <div className={`${classes.story_name}`}>
        <p className="mb-0">{customerData.persona}</p>
      </div>
      <div className={`${classes.card_box_content}`}>
      <Row className="align-items-center">
        <Col xs="3" className={`${classes.image_box}`}>
        <img src={changePicture(customerData.name)} alt="Sample Photo" className={`${classes.person}`} />
        </Col>
        <Col xs="9" className={`${classes.image_box}`}>
          <p className="mb-0">{customerData.name}　{customerData.age}歳　{capitalize(customerData.gender)}</p>
          <p>{customerData.course}</p>
          <div className={`w-100 flex-wrap mb-2 ${i18n.language == 'en'?'d-block':'d-flex'}`}>   
            <PercentageLabelBox label={t('recruiter.progress_rate')} percentage={ParseFloat((customerData.clearedTaskCount/customerData.taskCount),2)} className="mr-2 mb-2"/>            
            <GeneralButton title={t('recruiter.decision')} onClick={chgScenerio} className="mb-2"/>   
          </div>  
        </Col>
      </Row>
      <CardDropdown title={t('recruiter.view_details')} className="offset-3" detail={customerData.details}/>
      </div>
    </div>
  );
}

export default CancerInsuranceCard;
