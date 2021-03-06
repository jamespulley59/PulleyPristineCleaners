import React, { Component } from "react";
import discount from "../img/discount.jpg";
import axios from "axios";

export default class Register extends Component {
  //what is needed to register
  state = {
    username: "",
    password: "",
    password2: "",
    address: "",
    telephone: "",
    email: "",
    name: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
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
      showPasswordAlert: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      password,
      password2,
      address,
      telephone,
      email,
      name,
      bedrooms,
      bathrooms,
      squareFootage
    } = this.state;

    this.register(
      username,
      password,
      password2,
      address,
      telephone,
      email,
      name,
      bedrooms,
      bathrooms,
      squareFootage
    );
  };

  async register(
    username,
    password,
    password2,
    address,
    telephone,
    email,
    name,
    bedrooms,
    bathrooms,
    squareFootage
  ) {
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
        email,
        name,
        telephone,
        address,
        bedrooms,
        bathrooms,
        squareFootage
      };

      const res2 = await axios.post("/api/register", newUser);
      this.props.history.push(`/Profile/${res2.data._id}`);
    }
  }

  render() {
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
            <h5>Required fields are annotated by a red dot.</h5>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Name
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="Please type your full name"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                placeholder="Please type your Email"
                onChange={this.onChange}
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
                name="address"
                required
                placeholder="Please type your full address"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>
                <span className="text-danger">*</span> Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="telephone"
                name="telephone"
                required
                placeholder="Numbers only please, without dashes"
                onChange={this.onChange}
              />
            </div>
            <h4 className="text-center">Please tell us about your home</h4>
            <div className="client-homeinfo pb-2">
              <label>Number of bathrooms</label>
              <input
                type="text"
                className="form-control"
                id="bathrooms"
                name="bathrooms"
                placeholder="Bathrooms"
                onChange={this.onChange}
              />
            </div>
            <div className="client-homeinfo pb-2">
              <label>Number of bedrooms</label>
              <input
                type="text"
                className="form-control"
                id="bedrooms"
                name="bedrooms"
                placeholder="Bedrooms"
                onChange={this.onChange}
              />
            </div>

            <div className="client-homeinfo1">
              <label>Total square footage</label>
              <input
                type="number"
                className="form-control"
                id="square feet"
                name="squareFootage"
                placeholder="Square footage"
                onChange={this.onChange}
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
            <large>
              <span className="text-danger">*</span> fields are required.
            </large>
            <button className="btn btn-primary btn-block mt-3">
              Submit your information
            </button>
          </div>
        </form>
      </div>
    );
  }
}
