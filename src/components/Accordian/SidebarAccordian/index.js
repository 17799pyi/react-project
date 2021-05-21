import React from 'react'
import SlideToggle from "react-slide-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


import NumberStyleRec from '../../Number/NumberStyleRec'
import classes from './styles.module.css';

function SlideCard({show}) {
    return (
        <SlideToggle
                duration={200}
                collapsed={show?'':'collapsed'}
                interpolateOnReverse
                render={({ onToggle, setCollapsibleElement, progress }) => (
                <div className={`my-collapsible ${classes.slide_card_wrapper}`}>
                    <div  className={`${classes.show_wrapper}`}>
                        <p className="mb-0">フォルダ1</p>
                        <button className={`my-collapsible__toggle ${classes.slide_card_button}`} onClick={onToggle}>
                        詳細を非表示 <FontAwesomeIcon icon={faAngleDown} className="ml-2"/>
                        </button>
                    </div>
                    <div className="mt-2" ref={setCollapsibleElement}>
                        <ul className={`${classes.side_scenarios_list} p-0 m-0`}>
                            <li>
                                <div>
                                    <NumberStyleRec title="1" className="mr-2"/>
                                    <span>シナリオ名</span>
                                </div>
                                <div className="d-flex align-items-center font-gray">
                                    <span className="mr-2">260</span>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NumberStyleRec title="2" className="mr-2"/>
                                    <span>シナリオ名</span>
                                </div>
                                <div className="d-flex align-items-center font-gray">
                                    <span className="mr-2">261</span>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <NumberStyleRec title="3" className="mr-2"/>
                                    <span>シナリオ名</span>
                                </div>
                                <div className="d-flex align-items-center font-gray">
                                    <span className="mr-2">262</span>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </div>
                            </li>
                            <li className={`${classes.add}`}>
                                <button className="font-gray btn w-100 p-0"><FontAwesomeIcon icon={faPlus}/> シナリオを追加</button>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
                )}
            />
    )
}

export default SlideCard
