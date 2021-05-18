import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PersonaFolder from '../../../components/Lesson/PersonaFolder/PersonaFolder';

function PersonaSelected() {
    return (
        <div className="persona_selection">
            <div className="text">
                <p>Please select a persona.</p>
            </div>
            <div className="persona_selection_content">
                <div className="selected_persona">
                    <img src={elderly_man} className="selected_persona_img"/>
                    <div className="selected_persona_info">
                        <span className="selected_persona_number">2</span>
                        <span className="selected_persona_name">List of scenarios by Jiro Suzuki</span>
                        <span></span>
                        <span className="selected_persona_type">57 Years Old / Male</span>
                        <span className="selected_persona_count">3 / 10</span>
                    </div>
                </div>
                <div className="selected_persona_content">
                    <div className="selected_persona_content_left">
                        <div className="selected_persona_content_folder_btn_wrapper active">
                            <span>Any Folder</span>
                            <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                        </div>
                        <div className="selected_persona_content_folder_btn_wrapper">
                            <span>Any Folder</span>
                            <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                        </div>
                        <div className="selected_persona_content_folder_btn_wrapper">
                            <span>Any Folder</span>
                            <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
                        </div>
                    </div>
                    <div className="selected_persona_content_right">
                        <div className="selected_persona_folder_cards">
                            <PersonaFolder />
                            <PersonaFolder />
                            <PersonaFolder />
                            <PersonaFolder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaSelected
