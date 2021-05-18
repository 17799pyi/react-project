import React from "react";
// import Card from '../../components/Training/Agency.js'
import Card from "react-bootstrap/Card";
import classes from "./Agency.css";

function Agency() {
  return (
    <div>
      <div className="card">
        <div className="agency-box">
          <button className="grid_1">Agency</button>
          <span className="grid_2"></span>
          <label className="grid_3">007</label>
          {/* <a href="#" className="grid_4"> */}
          <div class="grid_4">
              <select className="select-box-border-non">
                <option selected> Select Box </option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
          </div>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Agency;
