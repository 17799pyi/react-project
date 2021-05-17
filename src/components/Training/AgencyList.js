import React from "react";
import Table from "react-bootstrap/Table";
import './AgencyList.css'

function AgencyList() {
  return (
    <div>
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
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td> df <a href="#">link1</a> <a href="#">Link2</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>fd</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            <td>df</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AgencyList;
