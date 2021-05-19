import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./styles.module.css";
import { useTranslation } from 'react-i18next';


function Agency({disable}) {
  const { t } = useTranslation();

  return (
    <div>
      <div className={disable ? `${classes.card} ${classes.disable}` : `${classes.card}`}>
        <div className={`${classes.agency_box}`}>
          <button className={`${classes.grid_1}`}>Agency</button>
          <span className={`${classes.grid_2}`}></span>
          <label className={`${classes.grid_3}`}>007</label>
          <div class={`${classes.grid_4}`}>
              <select className="select-box-border-non">
                <option selected>{t('training.training_select_box_text')}</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
