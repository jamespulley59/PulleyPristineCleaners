import React, { Component } from "react";
import { Link } from "react-router-dom";
import pic2 from "../img/pic2.jpg";
import discount from "../img/discount.png";

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Thanks for reaching out!</h1>
        <div className="container text-center">
          <h2>
            We enjoy hearing from new friends as well as our valued customers.
            <br />
            Please let us know how we can be of service.
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3>Would you like us to contact you?</h3>
              <div className="form-group">
                <label for="id1">Your name</label>
                <input
                  class="form-control"
                  type="text"
                  id="id1"
                  placeholder="Enter your full name here"
                />
              </div>
              <div className="form-group">
                <label for="id1">Phone number</label>
                <input
                  class="form-control"
                  type="text"
                  id="id1"
                  placeholder="Enter your phone number here"
                />
              </div>
              <div>
                <label className="pt-2">Email</label>
                <input
                  class="form-control"
                  type="text"
                  id="id1"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="form-group">
                <label for="id1">Subject</label>
                <input
                  class="form-control"
                  type="text"
                  id="id1"
                  placeholder="optional"
                />
              </div>
              <label className="pb-10">Your message</label>
              <textarea cols="45" rows="5" />
            </div>

            <div className="col-lg-4 pt-5">
              <img className="img-fluid" src={discount} alt="" />
            </div>

            <div className="col-lg-4">
              <h2>Or would you like to contact us?</h2>
              <h4>Call us at 774-441-0026</h4>
              <h4>Email us at .........</h4>
              <h4>Our Instagram is .........</h4>
              <h4>Follow us on Twitter at ...........</h4>
              <h4>Or on Facebook at ........... </h4>
            </div>
          </div>
        </div>
        <h2 className="text-center">
          For current customers, please use our Comments page if you don't have
          time for a chat.
        </h2>
      </div>
    );
  }
}
