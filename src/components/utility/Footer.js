import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link className="btn-outline fixed-bottom" to="/ContactUs">
          <h2 className="text-center">Contact Us</h2>
        </Link>
      </div>
    );
  }
}
