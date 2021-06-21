import React from 'react'
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import classes from './styles.module.css';
import { useTranslation } from 'react-i18next';

const CircleChart = ({precisionPercent, bestUserPrecision}) => {
    
    const { t } = useTranslation();

    return (
        <CircularProgressbarWithChildren value={precisionPercent} styles={{
            path: {
                // Path color
                stroke: '#00A5D9',
                strokeLinecap: 'unset',
            },
            trail: {
                stroke: '#E9FAFF',
                strokeLinecap: 'unset',
            }
        }}>
            <div className={classes.inner_circle}>
                <div>
                    <div className={`${classes.inner_circle_text_content} mb-3`}>
                        <span className={classes.inner_circle_text} id="circle_chart_precision_percent_header" name="circle_chart_precision_percent_header">{t('aiscore.cicle_percentage.header_1')}</span>
                        <span className={classes.inner_circle_p_text} id="circle_chart_precision_percent" name="circle_chart_precision_percent">{precisionPercent}%</span>
                    </div>
                    <div className={classes.inner_circle_text_content}>
                        <span className={classes.inner_circle_text} id="circle_chart_ppersonal_best_header" name="circle_chart_ppersonal_best_header">{t('aiscore.cicle_percentage.header_2')}</span>
                        <span className={`${classes.inner_circle_p_text} ${classes.inner_circle_personal_best}`} id="circle_chart_ppersonal_best" name="circle_chart_ppersonal_best">{bestUserPrecision}%</span>
                    </div>
                </div>
            </div>
        </CircularProgressbarWithChildren>
    )
}

export default CircleChart
