import React from 'react'
import PersonaCompletionHistory from '../../../components/Lesson/PersonaCompletionHistory/PersonaCompletionHistory'
import PersonaScenioChartResult from '../../../components/Lesson/PersonaScenioChartResult/PersonaScenioChartResult'
import './index.css'

function PersonaScenaio() {
    return (
        <div className="persona_scenaio">
            <div className="text">
                <p>Check the contents of the scenario and start training.</p>
            </div>
            <div className="persona_scenaio_content">
                <div className="scenaio_content_header">
                    <span className="scenaio_count">2</span>
                    <span className="scenaio_name">Jiro Suzuki's scenario</span>
                </div>
                <div className="scenaio_content_body">
                    <div className="left_body">
                        <div className="left_body_top">
                            <span className="left_body_count">2</span>
                        </div>
                        <div className="left_body_bottom">
                            <span className="left_body_letter">Letter Problem</span>
                            <span className="left_body_time">Time required: 30 minutes</span>
                        </div>
                    </div>
                    <div className="right_body">
                        <p className="right_body_context_status">Context</p>
                        <p className="right_body_context_text">
                        A description of the context. Some information about scenarios that help users understand the reason for the conversation, the client, and so on.
                        </p>
                    </div>
                </div>
            </div>
            <PersonaScenioChartResult />
            <PersonaCompletionHistory />
            <div className="persona_scenaio_footer">
                <button>Start the scenario</button>
            </div>
        </div>
    )
}

export default PersonaScenaio
