import React from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "./styles.module.css";
import CancerInsuranceCard from "../../components/Card/CancerInsurance/index";

function index() {
  return (
    <>
      <Container className={`${classes.outer_container_box}`}>
        <Row>
          <button className={`${classes.return_button}`}>戻る</button>
          <button className={`${classes.next_button}`}>次へ</button>
        </Row>
        <Row className={`${classes.wapper}`}>
          <Container className={`${classes.inner_container_box}`}>
            <Row className="smallest-padding-box mb-3">
              <h5 className={`${classes.recruiter_select}`}>募集人の選択</h5>
            </Row>
            <Row className="smallest-padding-box mb-3">
              <select className={`${classes.select_box}`}>
                <option selected>Jiro Suzuki</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </Row>
            <Row className="smallest-padding-box mb-3">
              <h6 className={`${classes.learning_theme}`}>学習テーマ</h6>
            </Row>
            <Row className={`${classes.radio_font} smallest-padding-box mb-3`}>
              <label className={classes.radio_container}>
                保険プログラム
                <input
                  type="checkbox"
                  className={`${classes.radio_font}`}
                  value="保険プログラム"
                  name="theme"
                  checked
                />
                <span
                  className={`${classes.checkmark}`}
                ></span>
              </label>
            </Row>
            <Row className="smallest-padding-box mb-3">
              <h6 className={`${classes.learning_theme}`}>シナリオ</h6>
            </Row>
            {/* <Row
              className={`${classes.radio_font} smallest-padding-box mb-3`}
            ></Row> */}
            <Row className="smallest-padding-box mb-3">
              <label className={classes.radio_container}>
                医療保険の見直し
                <input
                  type="checkbox"
                  className={`${classes.radio_font}`}
                  value="医療保険の見直し"
                  name="scenario"
                  checked
                />
                <span
                  className={`${classes.checkmark} `}
                ></span>
              </label>
              <label className={classes.radio_container}>
                医療保険の見直し
                <input
                  type="checkbox"
                  className={`${classes.radio_font}`}
                  value="医療保険の見直し"
                  name="scenario"
                />
                <span
                  className={`${classes.checkmark} ${classes.disable}`}
                ></span>
              </label>
            </Row>
            <Row className={`${classes.card_wrapper}`}>
              <Col xs="4">
                <CancerInsuranceCard />
              </Col>
              <Col xs="4">
                <CancerInsuranceCard />
              </Col>
              <Col xs="4">
                <CancerInsuranceCard />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default index;
