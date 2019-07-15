import React, { Component } from "react";
import { Link } from "react-router-dom";
import discount from "../img/discount.jpg";

export default class Comments extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>Your Opinion Matters</h2>
          <br />
          <h4 className="text-center">
            We would love to hear from you! Is there something we can do better?
            Do less or more of?
            <br />
            At Pulley's Pristine Clean, our job is not done until you are 100%
            satisfied.
            <br />
            If you are a regular client, there may be occasions when you need
            more or different services.
            <br /> <br />
            We will try our best to cheerfully comply with any special request.
            Please let us know how to be of better service to you.
            <br /> <br />
            Of course, we also like to hear when we have done something well.
            Your testimonial comments are always appreciated.
          </h4>
          <br />

          <h3 className="text-center">Let us hear from you</h3>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-center">Your Comments?</h2>
            <textarea
              rows="10"
              className="container textarea"
              type="text"
              placeholder="Type your comments here"
              name="description"
              max-length="400"
            />
            <div className="text-center Comment-btn pt-2 pb-5">
              <Link className="btn-primary" to="./administrator/Admin">
                Submit your comments
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="img max-auto text-center">
              <img src={discount} height={375} width={450} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
