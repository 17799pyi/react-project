import React from "react";
import SamplePhoto from "../../../assets/images/recruiters/Frame 3.png";
import { Container, Row, Col } from "reactstrap";
import classes from "./styles.module.css";

function index() {
  return (
    <>
          <Row className={`${classes.card_box}`}>
          <Col xs="3" className={`${classes.image_box}`}>
            <img src={SamplePhoto} alt="Sample Photo" className={`${classes.person}`} />
          </Col>
          <Col xs="9" className={`${classes.image_box}`}>
            <h5 className={`${classes.insurance_title} mb-1 font-weight-normal`}>がん保険の見直し</h5>
            <span className={`${classes.indicate} font-12`}>表示する</span>
          </Col>
          </Row>
    </>
  );
}

export default index;
