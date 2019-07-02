import React, { Component } from "react";
import Calendar from "react-calendar";
import discount from "../img/discount.jpg";
import { Link } from "react-router-dom";
import moment from "moment";
export default class ScheduleServices extends Component {
  state = {
    date: "",
    time: "",
    frequency: ""
  };

  onChange = date => {
    this.setState({
      date
    });
  };

  changeTime = e => {
    this.setState({
      time: e.target.textContent
    });
  };

  changeFrequency = e => {
    this.setState({
      frequency: e.target.textContent
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Schedule Your Next Service!</h2>
        <h3 className="text-center">
          Please click on all the services you require.
        </h3>
        <h3 className="text-center">
          Please use the calendar to tell us when we should clean.
        </h3>
        <h3 className="text-center">
          When you click on Submit near the bottom of the page, we will email
          you a confirmation.
        </h3>

        <div className="row">
          <div className="servlist col-lg-3 ">
            <div className="form-group">
              <Link className="form-control" to="../administrator/admin">
                Dust/Wipe down
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Air Freshen/Deodorize
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Sweep/Mop/Vacuum
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Microwave
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Freezer
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Refrigerator
              </Link>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="form-group">
              <Link className="form-control" to="../administrator/admin">
                Kitchen
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Kitchen Cabinets/Drawers
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Wash Dishes/Pots
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Polish Silverware
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Laundry
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Windows
              </Link>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="form-group">
              <Link className="form-control" to="../administrator/admin">
                Baseboards
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Make Beds/Change Sheets
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Bathrooms
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Shampoo Rugs
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Shampoo Furniture
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Polish Wooden Surfaces
              </Link>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="form-group">
              <Link className="form-control" to="../administrator/admin">
                Wash Walls
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Wash/Wax Floors
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Vacuum Mattresses
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Vacuum Drapes
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Oven/Stove Top
              </Link>
              <Link className="form-control" to="../administrator/admin">
                Outside Windows
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-center">Choose Your Next Cleaning Date.</h2>
        <h3 className="text-center">
          Please tap on the calendar below to tell us when to clean for you.
        </h3>

        <h3 className="text-center">Weekends or weekdays, your choice!</h3>
        <h5 className="text-center">
          Remember, you can always edit your choices (including; services, date,
          frequency and time).
        </h5>
        <div className="row">
          <div className="text-center col-lg-4">
            <Calendar
              className="pb-3 m-auto"
              onChange={this.onChange}
              value={this.state.date}
            />

            <li className="p-1">
              <button
                onClick={this.changeFrequency}
                className="freqbtn btn btn-outline-primary"
              >
                Daily
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={this.changeFrequency}
                className="freqbtn btn btn-outline-primary"
              >
                Weekly
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={this.changeFrequency}
                className="freqbtn btn btn-outline-primary"
              >
                Bi-weekly
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={this.changeFrequency}
                className="freqbtn btn btn-outline-primary"
              >
                Monthly
              </button>
            </li>
            <li className="p-1">
              <button
                onClick={this.changeFrequency}
                className="freqbtn btn btn-outline-primary"
              >
                One time only
              </button>
            </li>
          </div>
          {/* <sp className="col-lg-2" /> */}
          <div className="col-lg-4 text-center">
            <ul className="pb-3" id="myUL">
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  8am - 9am
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  9am - 10am
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  10am - 11am
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  11am - 12noon
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  12noon - 1pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  1pm - 2pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  2pm - 3pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  3pm - 4pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  4pm - 5pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  5pm - 6pm
                </button>
              </li>
              <li className="pb-1">
                <button
                  onClick={this.changeTime}
                  className="btn btn-light btn-block btn-outline-primary"
                >
                  6pm - 7pm
                </button>
              </li>
            </ul>
            <sp />
            <br />
            <br />
            <br />
            <Link
              to="../administrator/Admin"
              className="btn btn-block btn-outline-primary ml-3"
            >
              <h2>Submit Your Order</h2>
            </Link>
          </div>
          {/* <span className="col-lg-2" /> */}
          <div className="col-lg-4 text-center">
            <h4 className="pb-5">You are being scheduled for:</h4>
            <div style={{ minHeight: "90px" }} className="bg-light">
              <h4 className="pt-4">
                {this.state.date !== ""
                  ? moment(this.state.date).format("MMM Do YYYY")
                  : ""}
                {this.state.time !== "" ? `, ${this.state.time}` : ""}
                {this.state.frequency !== "" ? `, ${this.state.frequency}` : ""}
              </h4>
            </div>
            <img
              className="img-fluid text-center p-5"
              src={discount}
              alt=""
              width="150%"
              height="150%"
            />
          </div>
        </div>
      </div>
    );
  }
}
