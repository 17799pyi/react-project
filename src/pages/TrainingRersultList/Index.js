import React from "react";
import Agency from "../../components/Training/Agency";
import AgencyList from "../../components/Training/AgencyList";
import classes from "./styles.module.css";

function Index() {
  return (
    <div className={`${classes.agency_page}`}>
      <ul>
        <li>
          <Agency />
        </li>
        <li>
          <Agency />
        </li>
        <li>
          <Agency />
        </li>
      </ul>
      <AgencyList />
    </div>
  );
}

export default Index;
