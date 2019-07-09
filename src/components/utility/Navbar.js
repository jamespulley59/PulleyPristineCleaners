import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
<<<<<<< HEAD
        <Link to="/Login">Login</Link>
=======
        <Link to="/LoginProfile">Login</Link>
        <Link to="/Register">Register</Link>
>>>>>>> 9c1fb952c1b83dc3bba68e9777a3038617c62149
        <Link to="/ScheduleServices">Schedule Service(s)</Link>
        <Link to="/BeforeAndAfter">Before and After Photos</Link>
        <Link to="/GiftCertificates">Gift Certificates Available</Link>
        <Link to="/Comments">Comments?</Link>
        <Link to="home">Home Page</Link>
      </nav>
    );
  }
}
