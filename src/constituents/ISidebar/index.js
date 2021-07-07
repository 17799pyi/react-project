import React, { useState, useEffect, useRef, createContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../property/images/logo.png";
import icon01 from "../../property/images/sidebar_icon/icon01.svg";
import icon02 from "../../property/images/sidebar_icon/icon02.svg";
import HistorycheckIcon from "../../property/images/sidebar_icon/historycheck.svg";
import EvluationIcon from "../../property/images/sidebar_icon/evaluation.svg";
import EditScoringIcon from "../../property/images/sidebar_icon/edit_scoring_icon.svg";
import RegisterSynonymsIcon from "../../property/images/sidebar_icon/register_synonyms_icon.svg";
import { connect } from "react-redux";
import { SidebarList } from "./sidebarList";

import "./styles.css";
const Sidebar = ({ isOpen, setIsOpen, className, style, login_task_all }) => {
  const [height, setHeight] = useState();
  const elementRef = useRef(null);
  const [roleList, setRoleList] = useState([]);
  const [removeSidebar, setRemoveSidebar] = useState([]);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight);
    if (login_task_all) {
      setRoleList(login_task_all.userRoles);
    }
  }, [login_task_all]); //empty dependency array so

  const [isSubMenuIsOpen, setSubMenuIsOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    // GENERAL_USER (AS agent)
    // x-aanet-user:test-user-id
    // x-aanet-group:"G1test-agent","G6test-agent"
    // EVALUATOR (AS mgr)
    // x-aanet-user:test-user-id
    // x-aanet-group:"G1test-agent","G6test-agent","G5ASEmanager"
    // ADMINISTRATOR (AF amp)
    // x-aanet-user:test-user-id
    // x-aanet-group:"I3ARPadministrators"
    let arr = [];
    // if current user is 'GENERAL_USER', can not access to whole agency's history
    if (roleList && roleList.includes("GENERAL_USER")) {
      arr.push("history");
    }
    setRemoveSidebar(arr);
  }, [roleList]);

  return (
    <>
      <div id="sidebar" name="sidebar" className="sidebar-large over-height">
        <div>
          <div className="logo-sec">
            <NavLink
              to="/start-new-role-play"
              activeClassName={`current`}
              id="sidebar_link"
              name="sidebar_link"
            >
              <img
                src={logo}
                className="mw-100"
                alt="logo"
                id="sidebar_icon"
                name="sidebar_icon"
              />
            </NavLink>{" "}
            <h6 className="" id="sidebar_header" name="sidebar_header">
              {t("sidebar.recruiter_training_ai")}
            </h6>
          </div>
          <p id="e_learning" name="e_learning" className="sidebar-txt">
            {t("sidebar.e_learning")}
          </p>

          <ul className="sidebar-menu" ref={elementRef}>
            {SidebarList.map((menu, index) => {
              if (!removeSidebar.includes(menu.name)) {
                return (
                  <li key={index} id={menu.name} name={menu.name}>
                    <NavLink
                      id={`link_${menu.name}`}
                      name={`link_${menu.name}`}
                      to={menu.url}
                      to={{pathname:menu.url, state:(menu.name == 'role_play') && {locationCheck: 'clickLink'} }}
                      activeClassName={`current`}
                    >
                      <img
                        id={`icon_${menu.name}`}
                        name={`icon_${menu.name}`}
                        src={menu.icon}
                        alt="sidebar icon"
                      />
                      <span id={`text_${menu.name}`} name={`text_${menu.name}`}>
                        {t(menu.text)}
                      </span>
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

const stateToProps = (state) => {
  return {
    login_task_all: state.login_task_all,
  };
};

export default connect(stateToProps, null)(Sidebar);
