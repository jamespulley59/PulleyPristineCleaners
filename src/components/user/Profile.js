import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {
  //what a user is
  state = {
    username: "",
    email: "",
    name: "",
    oldUsername: "",
    role: "",
    address: "",
    telephone: "",
    squareFootage: "",
    bedrooms: "",
    bathrooms: "",
    updateComplete: false,
    usernameTaken: false
  };

  // check if user is logged
  async componentDidMount() {
    const isLoggedIn = await this.props.loggedIn();
    if (isLoggedIn === 0) {
      this.props.history.push("/login");
      return;
    }

    const uid = this.props.match.params.uid;
    const res = await axios.get(`/api/user/${uid}`);
    if (res.data) {
      this.showUser(res.data);
    }
  }

  // user info
  showUser = user => {
    const {
      username,
      email,
      name,
      role,
      address,
      telephone,
      squareFootage,
      bedrooms,
      bathrooms
    } = user;
    this.setState({
      username,
      email,
      name,
      oldUsername: username,
      role,
      address,
      telephone,
      squareFootage,
      bedrooms,
      bathrooms
    });
  };

  //accepting changes to profile
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      updateComplete: false,
      usernameTaken: false
    });
    return;
  };

  // check if username is taken
  onSubmit = async e => {
    e.preventDefault();
    const {
      username,
      email,
      name,
      oldUsername,
      role,
      address,
      telephone,
      squareFootage,
      bedrooms,
      bathrooms
    } = this.state;
    // accept new username
    if (username !== oldUsername) {
      const res = await axios.get(`/api/user?username=${username}`);
      if (res.data) {
        this.setState({ usernameTaken: true });
        return;
      }
    }

    // accepting new user info
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      email,
      name,
      role,
      address,
      telephone,
      squareFootage,
      bedrooms,
      bathrooms
    };
    await axios.put("/api/user", newUser);
    this.setState({
      updateComplete: true
    });
  };

  logout = async () => {
    await axios.post("/api/logout");
    this.props.history.push("/Home");
  };

  render() {
    const {
      username,
      email,
      name,
      address,
      role,
      telephone,
      squareFootage,
      bedrooms,
      bathrooms
    } = this.state;

    return (
      <div>
        <form id="profileForm" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-lg-4" />

            <div className="col-lg-4">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  className="form-control"
                  type="text"
                  id="username"
                  value={username}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="telephone"
                  name="telephone"
                  value={telephone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <input
                  type="text"
                  className="form-control"
                  id="bathrooms"
                  name="bathrooms"
                  value={bathrooms}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <input
                  type="text"
                  className="form-control"
                  id="bedrooms"
                  name="bedrooms"
                  value={bedrooms}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="squareFootage">Square Footage</label>
                <input
                  type="text"
                  className="form-control"
                  id="squareFootage"
                  name="squareFootage"
                  value={squareFootage}
                  onChange={this.onChange}
                />
              </div>

              {role === "admin" ? (
                <Link
                  to="../administrator/UserManage"
                  className="btn btn-success btn-block"
                >
                  Manage Users
                </Link>
              ) : null}

              {this.state.updateComplete && (
                <div className="alert alert-success">
                  Your update was completed successfully
                </div>
              )}
              {this.state.usernameTaken && (
                <div className="alert alert-danger">
                  Username is taken, please try another
                </div>
              )}
              <button
                type="button"
                onClick={this.onSubmit}
                className="btn btn-warning btn-block"
              >
                Update
              </button>

              <button
                type="button"
                onClick={this.logout}
                className=" profilelogout btn btn-danger btn-block"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="col-lg-4" />
        </form>
      </div>
    );
  }
}
