import React from "react";
import Agency from "../../components/Training/Agency/Agency";
import AgencyList from "../../components/Training/AgencyList/AgencyList";
import SearchButton from "../../components/Training/SearchButton/SearchButton";
import classes from "./styles.module.css";

function Index() {
  return (
    <div className="container">
      <div className="container-wrapper">
      <div className={`${classes.agency_page}`}>
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
      </div>
    </div>
    </div>
  );
}

export default Index;
