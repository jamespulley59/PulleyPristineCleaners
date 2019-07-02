import React, { Component } from "react";
import { Link } from "react-router-dom";
import discount from "../img/discount.jpg";

export default class LoginProfile extends Component {
  render() {
    return (
      <div>
        {/* rows and columns to put username & password on the same line */}
        <div className="row">
          {/* text explaining page's purpose */}
          <h4 className="logintext text-center ">
            Please create your username and password. Remember, you do not need
            to login to schedule an in-home estimate, simply click on Contact Us
            below.
          </h4>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username</label>
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="Please type your Username"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Please type your Password"
              />
            </div>
          </div>
        </div>

        {/* row and column to place input fields to left of page */}
        <div className="row">
          <div className="col-lg-6">
            {/* explain add and edit function */}
            <h4>
              {" "}
              If this is your first time logging in, please complete all fields
              to create your profile in our records. You will only need to do
              this once. You can always update your profile later.
            </h4>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="confirm password"
                className="form-control"
                id="confirm password"
                placeholder="Please confirm your Password"
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Please type your full name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Please type your Email"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="address"
                className="form-control"
                id="address"
                placeholder="Please type your full address"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="address"
                className="form-control"
                id="address"
                placeholder="Please type your phone number"
              />
            </div>

            {/* submit btn to DB */}
            <div className="btn btn-block">
              <Link>Submit your information</Link>
            </div>
          </div>
          {/* second col for img and client home info */}
          <div className="col-lg-6 text-center">
            <div className="mx-auto">
              <img className="img-fluid " src={discount} alt="" />

              {/* getting client home size */}

              <div className="row">
                <div className="col-lg-3" />
                <div className="col-lg-6 text-center">
                  <h4 className="text-center">
                    Please tell us about your home
                  </h4>
                  <div className="client-homeinfo pb-2">
                    <label>Number of bathrooms</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bathrooms"
                      placeholder="Bathrooms"
                    />
                  </div>
                  <div className="client-homeinfo pb-2">
                    <label>Number of bedrooms</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bedrooms"
                      placeholder="Bedrooms"
                    />
                  </div>
                  <div className="client-homeinfo1">
                    <label>Total square footage</label>
                    <input
                      type="number"
                      className="form-control"
                      id="square feet"
                      placeholder="Square footage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* link to get info to admin */}
          <div className="btn block btn-warning">
            <Link to="../administrator/Admin">Admin</Link>
          </div>
        </div>
      </div>
    );
  }
}
