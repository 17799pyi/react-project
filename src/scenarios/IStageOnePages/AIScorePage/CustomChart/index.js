import React, {useRef, useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
import classes from './styles.module.css'

const CustomChart = ({aiScore, f_scoreClickHandle}) => {
    const { t } = useTranslation();
    const [vChartData, setvChartData] = useState([])
    const divRef = useRef(null);

    useEffect(() => {
      // wait for a better solution
      // setTimeout(()=>{
      //   if(divRef.current != null)
      //   {
      //     divRef.current.scrollIntoView({ behavior: 'smooth' });
      //   }
      // }, 2000)
    },[aiScore]);

    const percentage = (item) => {
        if(item.score)
        {
          return (item.score.precision*100).toFixed(0)
        }
        return 0;
    }

    const dateFormat = (item) => {
      let date = new Date(item);
      return `${date.getMonth()+1}${t('general.date.month')}${date.getDate()}${t('general.date.day')}` 
    }

    useEffect(() => {
        let chartArray = []
        let sorting = aiScore.sort((a, b) => a.recordId - b.recordId)
        sorting.map((item, index) => {
            chartArray.push(
                {id:index, month: dateFormat(item.start), percentage: percentage(item), item: item}
            )
        })
        setvChartData(chartArray)
    }, [aiScore])
  const average_score = 70;

  const clickBar = (item) => {
    f_scoreClickHandle(item)
  }
  
  return (
    <>    
      <div className={classes.chart_main_box_out}>
        <div className={classes.chart_main_box}>
          <div className={classes.chart_main_box_inr}>
            {
              vChartData.map((i, index) => (
                <div className={classes.chart_box} key={index} onClick={() => clickBar(i.item)}>
                  <div style={{height: i.percentage + '%'}} className={`${(i.percentage >= 70 && i.percentage <= 84)? classes.score_rate_medium: (i.percentage >= 85 && i.percentage <= 100)?classes.score_rate_more:classes.score_rate_less}`}>
                  {i.percentage}%</div>
                  <p className={classes.month_label}>{i.month}</p>
                </div>
              ))
            }
            <div ref={divRef}></div>
            <span className={classes.score_update_label} style={{bottom: average_score + "%"}}> 合格基準（{average_score}％） </span>
            <div className={classes.chart_per_label}>
                <ul>
                  <li><p>100%</p></li>
                  <li><p>75%</p></li>
                  <li><p>50%</p></li>
                  <li><p>25%</p></li>
                </ul>
                <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CustomChart