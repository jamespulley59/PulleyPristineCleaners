import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div classname="col-lg-3">
            <h4>Client Name/Id? Including address, etc...</h4>
            <input
              type="client name"
              className="form-control"
              id="client name"
            />
          </div>
          <div classname="col-lg-2">
            <h2>Date of last svs/estimate</h2>
            <input type="text" className="form-control" id="svs" />
          </div>
          <div classname="col-lg-7">
            <h2>Last svs</h2>
            <input type="text" className="form-control" id="last sevices" />
          </div>
          <div classname="col-lg-1">
            <h2>Charge</h2>
            <input type="text" className="form-control" id="charged" />
          </div>
        </div>
        <Link to="AdminCalendar" />
      </div>
    );
  }
}
