import React from 'react'
import styles from './styles.module.css'
import { connect } from 'react-redux'


const Tab = ({ className, selectedTab, onSelect, tabItems }) => {
    const handleClick = (id, personaInfo) => {
        onSelect && onSelect(id, personaInfo);
    }

    return (
        <div id="tab_box" name="tab_box" className={`${styles.tabs} ${className} `}>
            <ul className={`${styles.tabs_titles}`}>
                {
                tabItems.map((item, index) => (
                    <li key={item.id} id={`persona_info_${index+1}`} name={`persona_info_${index+1}`} className={` ${styles.tab_title} ${selectedTab === item.id && styles.tab_title__active} }`}>
                        {item.personaInfo}
                    </li>
                    // <li key={item.id} id={`persona_info_${index+1}`} name={`persona_info_${index+1}`} onClick={() => handleClick(item.id, item.personaInfo)} className={` ${styles.tab_title} ${selectedTab === item.id && styles.tab_title__active} }`}>
                    //     {item.personaInfo}
                    // </li>
                ))
                }
            </ul>
        </div>
    )
}
const stateToProps = state => {
    return {
      evaluation_task_all: state.evaluation_task_all,
    }
  }
  
export default connect(stateToProps, null)(Tab)
