import React, { Component } from "react";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Client</th>
              <th>Last service</th>
              <th>Services</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>James</td>
              <td>6/30/2019</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, itaque.
              </td>
              <td>$110</td>
            </tr>
            <tr>
              <td>James</td>
              <td>6/30/2019</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, itaque.
              </td>
              <td>$110</td>
            </tr>
            <tr>
              <td>James</td>
              <td>6/30/2019</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, itaque.
              </td>
              <td>$110</td>
            </tr>
            <tr>
              <td>James</td>
              <td>6/30/2019</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, itaque.
              </td>
              <td>$110</td>
            </tr>
            <tr>
              <td>James</td>
              <td>6/30/2019</td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, itaque.
              </td>
              <td>$110</td>
            </tr>
          </tbody>
        </table>

        <button className=" btn btn-block btn-primary" to="/AdminCalendar/">
          AdminCalendar
        </button>
      </div>
    );
  }
}
