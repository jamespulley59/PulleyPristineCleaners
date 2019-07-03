import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import discount from "../img/discount.jpg";
import moment from "moment";

export default class ScheduleServices extends Component {
  state = {
    date: "",
    time: "",
    frequency: "",
    services: []
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

  chooseService = e => {
    // Do nothing if target is not button
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    // defines newServices
    const newServices = this.state.services;

    // index of service
    const index = newServices.indexOf(e.target.textContent);
    // check if the service is already in array
    if (index === -1) {
      // Adding service user clicked
      newServices.push(e.target.textContent);
      e.target.classList.add("bg-primary");
      e.target.classList.add("text-light");
    } else {
      // Remove service from array
      newServices.splice(index, 1);
      e.target.classList.remove("bg-primary");
      e.target.classList.remove("text-light");
    }

    this.setState({
      services: newServices
    });
    console.log(this.state.services);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Schedule Your Next Service!</h2>
        <h3 className="text-center">
          Please click on all the services you require. Your highlighted
          selections will be submitted.
        </h3>
        <h3 className="text-center">
          Please use the calendar section to tell us when we should clean.
        </h3>
        <h3 className="text-center">
          When you click on Submit near the bottom of this page, we will email
          you a confirmation.
        </h3>

        <div className="row">
          <div className="servlist col-lg-3 ">
            <div className="form-group">
              <button className="form-control" onClick={this.chooseService}>
                Dust/Wipe down
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Air Freshen/Deodorize
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Sweep/Mop/Vacuum
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Microwave
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Freezer
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Refrigerator
              </button>
            </div>
          </div>
          <div className="servlist col-lg-3 ">
            <div className="form-group">
              <button className="form-control" onClick={this.chooseService}>
                Kitchen
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Kitchen Cabinets/Drawers
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Wash Dishes/Pots
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Polish Silverware
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Laundry
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Windows
              </button>
            </div>
          </div>
          <div className="servlist col-lg-3 ">
            <div className="form-group">
              <button className="form-control" onClick={this.chooseService}>
                Baseboards
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Make Beds/Change Sheets
              </button>
              <button className="form-control" onClic={this.chooseService}>
                Bathrooms
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Shampoo Rugs
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Shampoo Furniture
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Polish Wooden Surfaces
              </button>
            </div>
          </div>
          <div className="servlist col-lg-3 ">
            <div className="form-group">
              <button className="form-control" onClick={this.chooseService}>
                Wash Walls
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Wash/Wax Floors
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Vacuum Mattresses
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Vacuum Drapes
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Oven/Stove Top
              </button>
              <button className="form-control" onClick={this.chooseService}>
                Outside Windows
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-center">Choose Your Next Cleaning Date.</h2>
        <h3 className="text-center">
          Please tap on the calendar, frequency and time charts to tell us when
          to clean for you.
        </h3>

        <h3 className="text-center">Weekdays or weekends , your choice!</h3>
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

            <h4>
              Something special we should know? After submitting your order
              click on comments at the top of the page.
            </h4>
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
