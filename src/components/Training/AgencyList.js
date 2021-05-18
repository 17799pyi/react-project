import React from "react";
import Table from "react-bootstrap/Table";
import './AgencyList.css'
import ellipse from '../../assets/icons/ellipse.png';

function AgencyList() {
  return (
    <div>
      <div className="container">
      <Table className="agency-list">
        <thead>
          <tr>
            <th>Trainee</th>
            <th>Persona</th>
            <th>Scenario</th>
            <th>Last Date and time</th>
            <th>Final response rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-top-non">120078</td>
            <td className="border-top-non">Jiro Suzuki</td>
            <td className="border-top-non">Letter problem</td>
            <td className="border-top-non">2020/10/5 9:30</td>
            <td className="border-top-non"><img className="card_image" src={ellipse} /> 95% <a href="#" className="scenariolink" >Scenario selection</a> <a className="historylink" href="#">Scenario History</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Conservation Proposal Intro</td>
            <td>2020/10/5 9:30</td>
            <td><img className="card_image" src={ellipse} />75% <a href="#" className="scenariolink" >Scenario selection</a> <a className="historylink" href="#">Scenario History</a></td>
          </tr>
          <tr>
            <td>120078</td>
            <td>Jiro Suzuki</td>
            <td>Recipient confirmation intro</td>
            <td>2020/10/5 9:30</td>
            <td><img className="card_image" src={ellipse} />55% <a href="#" className="scenariolink" >Scenario selection</a> <a className="historylink" href="#">Scenario History</a></td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default AgencyList;
