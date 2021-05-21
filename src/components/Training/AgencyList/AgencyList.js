import React from "react";
import Table from "react-bootstrap/Table";
import classes from './styles.module.css'
import ellipse from '../../../assets/icons/ellipse.png';
import MandatoryTitle from '../../../components/MandatoryTitle'

function AgencyList() {
  return (
    <>
      <div className={`table-responsive ${classes.container}`}>
      <Table className={`table ${classes.agency_list}`}>
        <thead>
          <tr>
            <th>Trainee</th>
            <th>Persona</th>
            <th>Scenario</th>
            <th>Last Date and time</th>
            <th colspan="3"><MandatoryTitle title="Final response rate" className="mb-0"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Letter problem</td>
            <td>2020/10/5 9:30</td>
            <td><img className="card_image" src={ellipse} /> 95% </td>
            <td><a href="#" className="scenariolink" >Scenario selection</a></td>
            <td><a className="historylink" href="#">Scenario History</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Conservation Proposal Intro</td>
            <td>2020/10/5 9:30</td>
            <td><img className="card_image" src={ellipse} /> 75% </td>
            <td><a href="#" className="scenariolink" >Scenario selection</a></td>
            <td><a className="historylink" href="#">Scenario History</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Recipient confirmation intro</td>
            <td>2020/10/5 9:30</td>
            <td><img className="card_image" src={ellipse} /> 55% </td>
            <td><a href="#" className="scenariolink" >Scenario selection</a></td>
            <td><a className="historylink" href="#">Scenario History</a></td>
          </tr>
        </tbody>
      </Table>
      </div>
    </>
  );
}

export default AgencyList;
