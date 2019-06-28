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
                <label>Your name</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter your full name here"
                />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter your phone number here"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter your email here"
                />
              </div>
              <div className="pt-3">
                <label>Subject</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="optional"
                />
              </div>
              <div>
                <label className="pt-3">Your message</label>
              </div>
              <textarea className="form-control" rows="3" />
              <div className="text-center pt-2">
                <Link className="btn-outline" to="./administrator/Admin">
                  Send your message
                </Link>
              </div>
            </div>
            <div className="col-lg-4 pt-5">
              <img className="img-fluid" src={discount} alt="" />
            </div>

            <div className="col-lg-4">
              <h2>Or would you like to contact us?</h2>
              <br />
              <h5>Call us at:</h5>
              <h4>774-441-0026</h4>
              <br />
              <h5>Email us at:</h5>
              <h4>PulleysPristineClean@gmail.com</h4>
              <br />
              <h5>Our Instagram is .........</h5>
              <h4>774-441-0026</h4>
              <br />
              <h5>Follow us on Twitter at ...........</h5>
              <h4>774-441-0026</h4>
              <br />
              <h5>Or on Facebook at ........... </h5>
              <h4>774-441-0026</h4>
            </div>
          </div>
        </div>
        <h2 className="text-center text-center1">
          For current customers, please use our Comments page if you don't have
          time for a chat.
        </h2>
      </div>
    );
  }
}
