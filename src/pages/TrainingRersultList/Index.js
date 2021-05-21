import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Agency from "../../components/Training/Agency/Agency";
import AgencyList from "../../components/Training/AgencyList/AgencyList";
import SearchButton from "../../components/Training/SearchButton/SearchButton";
import classes from "./styles.module.css";

function Index() {
  return (
    <div className="cmn-inner-width">
      <Row className={`${classes.agency_page} mt-5`}>
        <Col xs="3">
          <Agency className="mb-2"/>     
          <Agency className="mb-2"/>
          <Agency className="mb-2"/>
          <Agency className="mb-2"/>     
          <SearchButton />
        </Col>
        <Col xs="9">
          <AgencyList />
        </Col>
      </Row>
      {/* <div className={`${classes.agency_page}`}>
        <ul>
          <li className={`${classes.li_agency_card}`}>
            <Agency />
          </li>
          <li className={`${classes.li_agency_card}`}>
            <Agency />
          </li>
          <li className={`${classes.li_agency_card}`}>
            <Agency />
          </li>
          <li className={`${classes.li_agency_card}`}>
            <Agency disable={true} />
          </li>
          <li  className={`${classes.li_agency_card}`}>
            <Agency disable={true} />
          </li>
          <li className={`${classes.li_agency_card}`}>
            <SearchButton />
          </li>
        </ul>
        <AgencyList />
      </div> */}
    </div>
  );
}

export default Index;
