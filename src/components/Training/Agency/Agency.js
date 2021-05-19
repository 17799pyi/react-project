import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./Agency.css";

function Agency({disable}) {
  return (
    <div>
      <div className={disable ? "card disable" : "card"}>
        <div className="agency-box">
          <button className="grid_1">Agency</button>
          <span className="grid_2"></span>
          <label className="grid_3 active">007</label>
          <div class="grid_4">
              <select className="select-box-border-non">
                <option selected>Select</option>
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
