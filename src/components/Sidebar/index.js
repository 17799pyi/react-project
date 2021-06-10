import React, {useState, useEffect, useRef, createContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logo from '../../assets/images/logo.png';
import icon01 from '../../assets/images/sidebar_icon/icon01.svg';
import icon02 from '../../assets/images/sidebar_icon/icon02.svg';
import HistorycheckDetailIcon from '../../assets/images/sidebar_icon/historycheckdetail.svg';
import EvluationIcon from '../../assets/images/sidebar_icon/evaluation.svg';

import './styles.css';
const Sidebar = ({isOpen,setIsOpen, className, style}) => {
    
    const [height, setHeight] = useState();
    const elementRef = useRef(null);  
    useEffect(() => {
      setHeight(elementRef.current.clientHeight);
    }, []); //empty dependency array so

    const [isSubMenuIsOpen, setSubMenuIsOpen] = useState(false);

    const { t } = useTranslation();
    let lastId = 0;
    const autoId = (prefix = 'sidebar-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }

    return (
        <>
            
            <div id="sidebar" className='sidebar-large over-height'>
                <div>
                    <div className="logo-sec">
                    <NavLink to="/" activeClassName={`current`} id={autoId()}><img src={logo} className="mw-100" alt="logo"  id={autoId()}/></NavLink> <h6 className="" id={autoId()}>{t('sidebar.recruiter_training_ai')}</h6>
                    </div>
                    <ul className="sidebar-menu" ref={elementRef}>
                        <li id={autoId()}><NavLink to="/" activeClassName={`current`}><span>{t('sidebar.e_learning')}</span></NavLink></li>
                        <li id={autoId()}><NavLink to="/a"  activeClassName={`current`}><img src={icon01} alt="sidebar icon"/><span>{t('sidebar.role_playing_with_ai')}</span></NavLink></li>
                        <li id={autoId()}><NavLink to={{pathname:"/history-check-detail",state:{userId:"James"} }} activeClassName={`current`}><img src={HistorycheckDetailIcon} alt="sidebar icon"/><span> 管理者画面</span></NavLink></li>
                        <li id={autoId()}><NavLink to="/historycheck"  activeClassName={`current`}><img src={icon02} alt="sidebar icon"/><span> {t('sidebar.check_history')}</span></NavLink></li>
                        <li id={autoId()}><NavLink to="/evaluation"  activeClassName={`current`}><img src={EvluationIcon} alt="sidebar icon"/><span> ロープレ作成</span></NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar;