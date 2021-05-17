import React from 'react'
import './index.css'

function PersonaScenioChartResult() {
    return (
        <div className="persona_scenio_chart_result">
            <div className="chart_result_content">
                <div className="chart_result_percentage">
                    <p className="text">Result</p>
                    <p className="head_text">Total answer accuracy: 91%</p>
                    <ul className="percentage_lists">
                        <li className="percentage_list">
                            <span className="circle-li green"></span>
                            90-100% accuracy answer: 8
                        </li>
                        <li className="percentage_list">
                            <span className="circle-li yellow"></span>
                            90-100% accuracy answer: 8
                        </li>
                        <li className="percentage_list">
                            <span className="circle-li red"></span>
                            90-100% accuracy answer: 8
                        </li>
                    </ul>
                    <p className="under_head_text">Average accuracy of scenario 4: 87%</p>
                    <p className="under_text">Based on the mark of 42 people who completed Scenario 4</p>
                </div>
                <div>
                    Bubble chart
                </div>
                <div>
                    Pine chart
                </div>
            </div>
        </div>
    )
}

export default PersonaScenioChartResult
