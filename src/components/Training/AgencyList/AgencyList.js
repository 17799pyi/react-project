import React from "react";
import Table from "react-bootstrap/Table";
import classes from './styles.module.css'
import ellipse from '../../../assets/icons/ellipse.png';
import { useTranslation } from 'react-i18next';

function AgencyList() {
  const {t} = useTranslation();
  return (
    <div>
      <div className={`${classes.container}`}>
      <Table className={`${classes.agency_list} ${classes.table}`}>
        <thead>
          <tr>
            <th>{t('training.table_head_text_trainee')}</th>
            <th>{t('training.table_head_text_persona')}</th>
            <th>{t('training.table_head_text_scenario')}</th>
            <th>{t('training.table_head_text_date')}</th>
            <th>{t('training.table_head_text_rate')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${classes.border_top_non}`}>120078</td>
            <td className={`${classes.border_top_non}`}>Jiro Suzuki</td>
            <td className={`${classes.border_top_non}`}>Letter problem</td>
            <td className={`${classes.border_top_non}`}>2020/10/5 9:30</td>
            <td className={`${classes.border_top_non}`}><img className="card_image" src={ellipse} /> 95% <a href="#" className="scenariolink" >{t('training.scenario_selection')}</a> <a className="historylink" href="#">{t('training.scenario_history')}</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Conservation Proposal Intro</td>
            <td>2020/10/5 9:30</td>
            <td className={`${classes.border_top_non}`}><img className="card_image" src={ellipse} /> 95% <a href="#" className="scenariolink" >{t('training.scenario_selection')}</a> <a className="historylink" href="#">{t('training.scenario_history')}</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Recipient confirmation intro</td>
            <td>2020/10/5 9:30</td>
            <td className={`${classes.border_top_non}`}><img className="card_image" src={ellipse} /> 95% <a href="#" className="scenariolink" >{t('training.scenario_selection')}</a> <a className="historylink" href="#">{t('training.scenario_history')}</a></td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default AgencyList;
