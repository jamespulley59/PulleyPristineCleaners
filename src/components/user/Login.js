import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic2 from "../img/pic2.jpg";
import pic from "../img/pic.jpg";
import discount from "../img/discount.jpg";
import gift from "../img/gift.jpg";
import vacuum from "../img/vacuum.jpg";
import mop from "../img/mop.jpg";
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
          <div className="col-lg-3">
            <div className="text-center">
              <img
                className="img-fluid mx-auto"
                src={pic2}
                height="50%"
                width="75%"
                alt=""
              />
            </div>
            <div className="text-center">
              <div className="text-center mt-3">
                <img
                  className="img-fluid"
                  src={mop}
                  height="80%"
                  width="75%"
                  alt=""
                />
              </div>

              <div className="text-center mt-3">
                <img
                  className="img-fluid"
                  src={vacuum}
                  height="80%"
                  width="75%"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1" />

          <div className="col-lg-4">
            <h5>
              If you are new to Pulley's Pristine Clean, please continue to our
              registration page by clicking on the button below.
            </h5>
            <div className="form-group">
              <label>Username</label>
              <input
                value={this.state.username}
                onChange={this.onChange}
                name="username"
                type="text"
                id="username"
                className="form-control"
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
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>

            <Link className="btn btn-primary btn-block login" to="/profile/">
              Login{" "}
            </Link>

            <Link
              className="btn btn-primary btn-block register"
              to="/register/"
            >
              Register{" "}
            </Link>

            <div>
              <img className="img-fluid mt-5" src={gift} alt="" />
            </div>
          </div>

          <div className="col-lg-1" />

          <div className="col-lg-3">
            <div className="text-center">
              <img
                className="img-fluid mx-auto"
                src={discount}
                height="35%"
                width="63%"
                alt=""
              />
            </div>
            <div className="text-center mt-3">
              <img className="img-fluid" src={pic} alt="" />
            </div>

            <div className="text-center mt-3">
              <img className="img-fluid" src={mop} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
