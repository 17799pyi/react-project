import React from 'react'
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';

function PersonaScenioChartResult() {

    const { t } = useTranslation();

    return (
        <div className={classes.persona_scenio_chart_result}>
            <div className={classes.chart_result_content}>
                <div className="chart_result_percentage">
                    <p className={classes.text}>Result</p>
                    <p className={classes.head_text}>{t('lesson.scenario.total_ans_accuracy')}: 91%</p>
                    <ul className={classes.percentage_lists}>
                        <li className={classes.percentage_list}>
                            <span className={`${classes.circle_li} ${classes.circle_green}`}></span>
                            90-100% {t('lesson.scenario.accuracy_answer')}: 8
                        </li>
                        <li className="percentage_list">
                            <span className={`${classes.circle_li} ${classes.circle_yellow}`}></span>
                            90-100% {t('lesson.scenario.accuracy_answer')}: 8
                        </li>
                        <li className="percentage_list">
                            <span className={`${classes.circle_li} ${classes.circle_red}`}></span>
                            90-100% {t('lesson.scenario.accuracy_answer')}: 8
                        </li>
                    </ul>
                    <p className={classes.under_head_text}>{t('lesson.scenario.avg_accuracy_of_scenario')} 4: 87%</p>
                    <p className={classes.under_text}>{t('lesson.scenario.base_on_the_mark')}</p>
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
