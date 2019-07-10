import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {
  //what a user is
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    oldUsername: "",
    updateComplete: false,
    usernameTaken: false,
    role: ""
  };
  //   async componentDidMount() {
  //     const isLoggedIn = await this.props.loggedIn();
  //     if (isLoggedIn === 0) {
  //       this.props.history.push("/login");
  //       return;
  //     }

  //     const uid = this.props.match.params.uid;
  //     const res = await axios.get(`/api/user/${uid}`);
  //     if (res.data) {
  //       this.showUser(res.data);
  //     } else {
  //       alert("No user is found with given id");
  //     }
  //   }

  showUser = user => {
    const { username, password, email, name, role } = user;
    this.setState({
      username,
      password,
      email,
      name,
      oldUsername: username,
      role
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      updateComplete: false,
      usernameTaken: false
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { username, password, email, name, oldUsername } = this.state;
    if (username !== oldUsername) {
      const res = await axios.get(`/api/user?username=${username}`);
      if (res.data) {
        this.setState({ usernameTaken: true });
        return;
      }
    }
    const newUser = {
      _id: this.props.match.params.uid,
      username,
      password,
      email,
      name
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
    const { username, email, name, role } = this.state;

    return (
      <div>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
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
                <label htmlFor="password">Address</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Phone Number</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Bathrooms</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Bedrooms</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Square Footage</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <Link
                className="btn btn-primary btn-block"
                to={`/user/${this.props.match.params.uid}/ScheduleServices`}
              >
                Schedule Service(s)
              </Link>
              {role === "admin" ? (
                <Link
                  to="../administrator/Admin"
                  className="btn btn-warning btn-block"
                >
                  Manage Users
                </Link>
              ) : null}

              <button
                type="button"
                onClick={this.logout}
                className="btn btn-danger btn-block"
              >
                Logout
              </button>
            </div>

            <div className="col-lg-4" />
          </div>
        </form>
      </div>
    );
  }
}
