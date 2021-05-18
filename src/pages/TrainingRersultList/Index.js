import React from "react";
import Agency from "../../components/Training/Agency";
import AgencyList from "../../components/Training/AgencyList";
import SearchButton from "../../components/Training/SearchButton";
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
        <li>
          <Agency />
        </li>
        <li>
          <Agency />
        </li>
        <li>
          <SearchButton />
        </li>
      </ul>
      <AgencyList />
    </div>
  );
}

export default Index;
