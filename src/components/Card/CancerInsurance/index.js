import React from "react";
import SamplePhoto from "../../../assets/images/recruiters/Frame 3.png";
import { Container, Row, Col } from "reactstrap";
import classes from "./styles.module.css";

function index() {
  return (
    <div className={`${classes.card_box}`}>
          <Row className="align-items-center">
            <Col xs="3" className={`${classes.image_box}`}>
              <img src={SamplePhoto} alt="Sample Photo" className={`mw-100 ${classes.person}`} />
            </Col>
            <Col xs="9" className={`${classes.image_box}`}>
              <h5 className={`${classes.insurance_title} font-14 mb-1 font-weight-normal`}>がん保険の見直し</h5>
              <span className={`${classes.indicate} font-12 font-weight-bold`}>表示する</span>
            </Col>
          </Row>
    </div>
  );
}

export default index;
