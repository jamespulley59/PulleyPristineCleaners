import React, { Component } from "react";
import { Link } from "react-router-dom";
import discount from "../img/discount.jpg";
import axios from "axios";

export default class Register extends Component {
  //what is needed to register
  state = {
    username: "",
    password: "",
    password2: "",
    //if too short/don't match
    showUsernameAlert: false,
    showPasswordAlert: false,
    showUsernameLengthAlert: false,
    showPasswordLengthAlert: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showUsernameAlert: false,
      showPasswordAlert: false,
      showUsernameLengthAlert: false,
      showPasswordLengthAlert: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password, password2 } = this.state;

    this.register(username, password, password2);
  };

  async register(username, password, password2) {
    // username minimum length
    if (username.length < 5) {
      this.setState({
        showUsernameLengthAlert: true
      });
      return;
    }
    // password minimum length
    if (password.length < 5) {
      this.setState({
        showPasswordLengthAlert: true
      });
      return;
    }
    // if passwords don't match
    if (password !== password2) {
      this.setState({
        showPasswordAlert: true
      });
      return;
    }
    // see if username is available
    const res = await axios.get(`/api/user?username=${username}`);
    if (res.data) {
      this.setState({
        showUsernameAlert: true
      });

      return;
    } else {
      const newUser = {
        username,
        password,
        password2,
        email: "",
        name: "",
        teleNumber: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        squareFootage: ""
      };

      const res2 = await axios.post("/api/register", newUser);
      this.props.history.push(`/Profile/${res2.data._id}`);
    }
  }

  render() {
    const { username, password, password2 } = this.state;
    return (
      <div>
        <h1 className="text-center pb-3">Register</h1>
        <h4 className="text-center pb-3">
          We request you register by providing us with a little information.
          Your details will be kept secure in our database, creating a profile
          allowing us to better serve you.
        </h4>
        <form onSubmit={this.onSubmit} className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Username
              </label>
              <input
                placeholder="Please type your Username"
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
                // value={username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                placeholder="Please type your Password"
                onChange={this.onChange}
              />
              <div className="form-group">
                <label>
                  <span className="text-danger">*</span> Confirm Your Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  name="password2"
                  required
                  placeholder="Please confirm your Password"
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="text-center mx-auto">
                <img
                  className="img-fluid"
                  src={discount}
                  alt=""
                  height="75%"
                  width="55%"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* explain add and edit function */}
            <h4>
              If this is your first time logging in, please complete all fields
              to create your profile in our records. While you only need to do
              this once, you can always update your information later.
            </h4>
            <h5>Required fields annotated are by a red dot.</h5>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Please type your full name"
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Email
              </label>
              <input
                type="email"
                className="form-control"
                required
                id="email"
                placeholder="Please type your Email"
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Address
              </label>
              <input
                type="address"
                className="form-control"
                id="address"
                required
                placeholder="Please type your full address"
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Phone Number
              </label>
              <input
                type="address"
                className="form-control"
                id="address"
                required
                placeholder="Please type your phone number"
              />
            </div>
            <h4 className="text-center">Please tell us about your home</h4>
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

            {this.state.showUsernameAlert && (
              <div className="alert alert-danger">
                That username is already in use. Please choose another.
              </div>
            )}

            {this.state.showPasswordAlert && (
              <div className="alert alert-danger">
                The passwords do not match. Please re-enter.
              </div>
            )}
            {this.state.showUsernameLengthAlert && (
              <div className="alert alert-danger">
                The Username must be at least 6 characters long.
              </div>
            )}
            {this.state.showPasswordLengthAlert && (
              <div className="alert alert-danger">
                The Password must be at least 6 characters long.
              </div>
            )}
            <medium>
              <span className="text-danger">*</span> fields are required.
            </medium>
            <button className="btn btn-secondary btn-block mt-3">
              Submit your information
            </button>
          </div>
        </form>
      </div>
    );
  }
}
