import React from 'react'
import './index.css'
import ellipse from '../../../assets/icons/ellipse.png';

function PersonaFolder() {
    return (
        //if folder card is private, add private class in selected_persona_folder_card tag
        <div className="selected_persona_folder_card">
            <div className="selected_persona_folder_card_top">
                <span className="folder_card_count">1</span>
                <span className="folder_card_status">
                    <img src={ellipse} />
                    <span>Re-Implementation</span>
                </span>
            </div>
            <div className="selected_persona_folder_card_bottom">
                <span className="foler_text">Any Folder</span>
                <span className="foler_text_name">Scenario Name</span>
            </div>
        </div>
    )
}

export default PersonaFolder
