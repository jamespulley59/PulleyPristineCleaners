import React, { Component } from "react";
import { Link } from "react-router-dom";
import discount from "../img/discount.jpg";
import axios from "axios";

export default class Login extends Component {
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
            again. If you are a new to Pulley's Pristine Clean, please complete
            the registration form.
          </div>
        ) : null}
        {/* rows and columns to put username & password on the same line */}

        <div className="row">
          <div className="col-lg-4" />

          <div className="col-lg-4">
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

            <Link className="btn btn-primary btn-block login" to="/profile/">
              Login{" "}
            </Link>
          </div>

          <div className="col-lg-4" />
        </div>
      </div>
    );
  }
}
