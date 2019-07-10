import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <Link to="/Login">Login/Register</Link>
        <Link to="/ScheduleServices">Schedule Service(s)</Link>
        <Link to="/BeforeAndAfter">Before and After Photos</Link>
        <Link to="/GiftCertificates">Gift Certificates Available</Link>
        <Link to="/Comments">Comments?</Link>
        <Link to="home">Home Page</Link>
        <Link to="profile">Profile</Link>
      </nav>
    );
  }
}
