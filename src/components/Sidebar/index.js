import React, {useState, useEffect, useRef, createContext} from 'react';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import logo from '../../assets/images/logo.png';
import icon01 from '../../assets/images/sidebar_icon/icon01.png';
import icon02 from '../../assets/images/sidebar_icon/icon02.png';
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
                        <img src={logo} className="mw-100" alt="logo" /> <span className="font-14">{t('募集人育成AI')}</span>
                    </div>
                    <ul className="sidebar-menu" ref={elementRef}>
                        <li><NavLink to="/" activeClassName={`current`}><span>{t('e-Learning')}</span></NavLink></li>
                        <li><NavLink to="/a"  activeClassName={`current`}><img src={icon01} alt="sidebar icon"/><span>{t('介護保険プログラム')}</span></NavLink></li>
                        <li><NavLink to="/b"  activeClassName={`current`}><img src={icon02} alt="sidebar icon"/><span> {t('履歴確認')}</span></NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar;