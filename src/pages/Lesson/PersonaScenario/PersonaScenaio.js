import React from 'react'
import PersonaCompletionHistory from '../../../components/Lesson/PersonaCompletionHistory/PersonaCompletionHistory'
import PersonaScenioChartResult from '../../../components/Lesson/PersonaScenioChartResult/PersonaScenioChartResult'
import classes from './styles.module.css'

function PersonaScenaio() {
    return (
        <div className="container">
            <div className="container-wrapper">
                <div className="persona_scenaio">
                    <div className="text">
                        <p className={classes.head_text}>Check the contents of the scenario and start training.</p>
                    </div>
                    <div className="persona_scenaio_content">
                        <div className={classes.scenaio_content_header}>
                            <span className={classes.scenaio_count}>2</span>
                            <span className={classes.scenaio_name}>Jiro Suzuki's scenario</span>
                        </div>
                        <div className={classes.scenaio_content_body}>
                            <div className="left_body">
                                <div className={classes.left_body_top}>
                                    <span className={classes.left_body_count}>2</span>
                                </div>
                                <div className={classes.left_body_bottom}>
                                    <span className={classes.left_body_letter}>Letter Problem</span>
                                    <span className={classes.left_body_time}>Time required: 30 minutes</span>
                                </div>
                            </div>
                            <div className={classes.right_body}>
                                <p className={classes.right_body_context_status}>Context</p>
                                <p className={classes.right_body_context_text}>
                                A description of the context. Some information about scenarios that help users understand the reason for the conversation, the client, and so on.
                                </p>
                            </div>
                        </div>
                    </div>
                    <PersonaScenioChartResult />
                    <PersonaCompletionHistory />
                    <div className={classes.persona_scenaio_footer}>
                        <button className={classes.persona_scenaio_footer_btn}>Start the scenario</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonaScenaio
