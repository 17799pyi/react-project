import React from 'react'
import PersonCard from '../../../components/Lesson/PersonCard/PersonCard'
import './index.css'

function PersonaSelection() {
    return (
        <div className="persona_selection">
            <div className="text">
                <p>Please select a persona.</p>
            </div>
            <div className="persona_cards">
                <div className="persona_wrapper">
                    <PersonCard />
                    <PersonCard />
                    <PersonCard />
                </div>
            </div>
        </div>
    )
}

export default PersonaSelection
