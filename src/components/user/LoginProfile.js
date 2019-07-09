import React, { Component } from "react";
import { Link } from "react-router-dom";
import discount from "../img/discount.jpg";
import axios from "axios";

export default class LoginProfile extends Component {
  //what is needed to login
  state = {
    username: "",
    password: "",
    showAlert: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showAlert: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };
    this.login(user);
  };

  login = async user => {
    // this confirms user and password, or not
    try {
      const res = await axios.post("api/login", user);
      this.props.history.push(`/user/${res.data._id}`);
    } catch {
      this.setState({
        showAlert: true
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.showAlert ? (
          <div className="alert alert-danger">
            Your username and password do not match our records, please try
            again. If you are new to Pulley's Pristine Clean, please go to the
            Register page to get started. .
          </div>
        ) : null}
        {/* rows and columns to put username & password on the same line */}
        <div className="row">
          <div className="col-lg-3" />
          <div className="col-lg-3">
            <div className="form-group">
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={this.onChange}
                type="username"
                className="form-control"
                id="username"
                placeholder="Please type your Username"
              />
            </div>
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
          <div className="col-lg-3" />
        </div>

        {/* row and column to place input fields to left of page */}

        {/* link to get info to admin */}
        <div className="btn block btn-warning">
          <Link to="../administrator/Admin">Admin</Link>
        </div>
      </div>
    );
  }
}
