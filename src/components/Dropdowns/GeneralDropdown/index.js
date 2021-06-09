import React, { useRef, useState, useEffect  } from 'react';
import up_arrow from '../../../assets/images/up_arrow.png';
import down_arrow from '../../../assets/images/down_arrow.png';

import classes from './styles.module.css';

const GeneralDropdown = ({items, placeholder, onSelect, className, selectedData}) => {
    const list = useRef();
    
    const [height, setHeight] = useState();
    const [open, setOpen] = useState(false);
    selectedData = (selectedData) ?   selectedData :  '' ;
    const [selectedText, setSelectedText] = useState(selectedData);

    const onOpen = () => {
        setOpen(true);
        list.current.focus();
    }

    const close = () => {
        setOpen(false);
    }

    const itemClick = (e) => {
        setSelectedText(e.target.textContent);
        setOpen(false);
        onSelect(e.target);
    }

    return ( 
        <div className={`${classes.select_box} ${className}`}>
                <div onClick={onOpen} className={'d-flex justify-content-between align-items-center'}>
                    <span>{selectedText === '' ? placeholder : selectedText}</span>
                    <img src={`${open? up_arrow: down_arrow} ` } className={`${classes.arrows} `} />
                </div>
                <div
                    tabIndex="0" 
                    ref={list}
                    onBlur={close}
                >
                <ul className={`${open ? classes.showbox : classes.hidebox} `} >                                         
                        {
                            items && items.map((item, index) => (
                                <li key={index} value={item.id} id={item.id} onClick={itemClick}>
                                    {item.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </div>
    )
}

export {GeneralDropdown} ;