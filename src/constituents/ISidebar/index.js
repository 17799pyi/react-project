import React, {useState, useEffect, useRef, createContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logo from '../../property/images/logo.png';
import icon01 from '../../property/images/sidebar_icon/icon01.svg';
import icon02 from '../../property/images/sidebar_icon/icon02.svg';
import HistorycheckDetailIcon from '../../property/images/sidebar_icon/historycheckdetail.svg';
import EvluationIcon from '../../property/images/sidebar_icon/evaluation.svg';
import EditScoringIcon from '../../property/images/sidebar_icon/edit_scoring_icon.svg';
import RegisterSynonymsIcon from '../../property/images/sidebar_icon/register_synonyms_icon.svg';
import { connect } from 'react-redux'
import sidebarList from './sidebarList.json';

import './styles.css';
const Sidebar = ({isOpen,setIsOpen, className, style, login_task_all}) => {
    
    const [height, setHeight] = useState();
    const elementRef = useRef(null);  
    const [roleList , setRoleList] = useState([]);
    const [userRole ,setUserRole] = useState();
    const [removeSidebar , setRemoveSidebar] = useState([])

    useEffect(() => {
      setHeight(elementRef.current.clientHeight);
      if(login_task_all){
        // console.log(login_task_all.aanetRoles[0], "logRoles")
            // setUserRole(login_task_all.aanetRoles[1])
            // setRoleList(login_task_all.aanetRoles)
      }
      
    }, []); //empty dependency array so

    const [isSubMenuIsOpen, setSubMenuIsOpen] = useState(false);

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'sidebar-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }

    useEffect(() => {
        if(userRole){
            let arr = []
            //need to add this condition if api get response for role
            // if(userRole == "EVALUATOR"){
            //     arr.push("HistoryCheck","Evalutaion","aa")
            // }
            // if(userRole == "ADMINISTRATOR"){
            //     arr.push("Evalutaion","aa")
            // }
            setRemoveSidebar(arr)
        }
    },[userRole])   //handle sidebar

    const changeIcon = (icon) =>{
        console.log(icon, "icon text")
        if(icon == "icon01"){
            return icon01
        }
        else if(icon == "icon02"){
            return icon02
        }
        else if(icon == "HistorycheckDetailIcon"){
            return HistorycheckDetailIcon
        }
        else if(icon == "EditScoringIcon"){
            return EditScoringIcon
        }
        else if(icon == "RegisterSynonymsIcon"){
            return RegisterSynonymsIcon
        }
    }

    return (
        <>
            
            <div id="sidebar" name="sidebar" className='sidebar-large over-height'>
                <div>
                    <div className="logo-sec">
                    <NavLink to="/" activeClassName={`current`} id="sidebar_link" name="sidebar_link"><img src={logo} className="mw-100" alt="logo"  id="sidebar_icon" name="sidebar_icon"/></NavLink> <h6 className="" id="sidebar_header" name="sidebar_header">{t('sidebar.recruiter_training_ai')}</h6>
                    </div>
                    <p id="e_learning" name="e_learning" className="sidebar-txt">{t('sidebar.e_learning')}</p>
                    
                    <ul className="sidebar-menu" ref={elementRef}>
                    {
                        sidebarList.map((menu, index) => {
                            if(!removeSidebar.includes(menu.name)){
                                return <li key={index} id={menu.name} name={menu.name}><NavLink id={`link_${menu.name}`} name={`link_${menu.name}`} to={menu.url}  activeClassName={`current`}><img id={`icon_${menu.name}`} name={`icon_${menu.name}`} src={changeIcon(menu.icon)} alt="sidebar icon"/><span id={`text_${menu.name}`} name={`text_${menu.name}`}>{t(menu.text)}</span></NavLink></li>
                            }
                        })
                    }
                    </ul>
                </div>
            </div>

        </>
    )
}

const stateToProps = state => {
    return {
      login_task_all: state.login_task_all,
    }
  }
  
export default connect(stateToProps, null)(Sidebar)