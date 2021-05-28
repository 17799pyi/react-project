import React, {useState, useEffect, useRef, createContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logo from '../../assets/images/logo.png';
import icon01 from '../../assets/images/sidebar_icon/icon01.svg';
import icon02 from '../../assets/images/sidebar_icon/icon02.svg';
import './styles.css';
const Sidebar = ({isOpen,setIsOpen, className, style}) => {
    
    const [height, setHeight] = useState();
    const elementRef = useRef(null);  
    useEffect(() => {
      setHeight(elementRef.current.clientHeight);
    }, []); //empty dependency array so

    const [isSubMenuIsOpen, setSubMenuIsOpen] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            
            <div id="sidebar" className='sidebar-large over-height'>
                <div>
                    <div className="logo-sec">
                    <NavLink to="/" activeClassName={`current`}><img src={logo} className="mw-100" alt="logo" /></NavLink> <h6 className="">{t('sidebar.recruiter_training_ai')}</h6>
                    </div>
                    <ul className="sidebar-menu" ref={elementRef}>
                        <li><NavLink to="/" activeClassName={`current`}><span>{t('sidebar.e_learning')}</span></NavLink></li>
                        <li><NavLink to="/a"  activeClassName={`current`}><img src={icon01} alt="sidebar icon"/><span>{t('sidebar.role_playing_with_ai')}</span></NavLink></li>
                        <li><NavLink to="/historycheck"  activeClassName={`current`}><img src={icon02} alt="sidebar icon"/><span> {t('sidebar.check_history')}</span></NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar;