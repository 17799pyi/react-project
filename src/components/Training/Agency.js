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
              <label className="grid_3">label</label>
              <a href="#" className="grid_4">link</a>
          </div>
      </div>
    </div>
  );
}

export default Agency;
