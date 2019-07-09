import React, { Component } from "react";
import { Link } from "react-router-dom";
import gift from "../img/gift.jpg";
import discount from "../img/discount.jpg";

export default class GiftCertificates extends Component {
  render() {
    return (
      <div>
        <div>
          <h4 className="busy text-center">
            Give the gift of a clean home to someone with a busy lifestyle.
          </h4>
          <h4 className="text-center"> More clean, less stress!</h4>
          <br />
          <span />
        </div>

        <div className="row pt-1">
          <div className="col-sm-6">
            <div className="text-center">
              <img
                className="discount"
                id="discount"
                src={discount}
                height={300}
                width={350}
                alt=""
              />
            </div>
            <h4>From:</h4>
            <section id="from">
              <div align="left">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="street">Street Address</label>
                    <input
                      placeholder="Street Address"
                      type="text"
                      className="form-control"
                      id="street"
                      name="street"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="csz">City, State, Zip</label>
                    <input
                      placeholder="City, State, Zip"
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                  </div>
                </form>
              </div>
            </section>
          </div>

          <div className="col-sm-6">
            <div className="text-center pb-3">
              <img
                className="gift"
                id="gift"
                src={gift}
                height={300}
                width={600}
                alt=""
              />
            </div>
            <h4>To:</h4>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                type="text"
                className="form-control"
                id="name"
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                placeholder="Street Address"
                type="text"
                className="form-control"
                id="street"
                name="street"
              />
            </div>

            <div className="form-group">
              <label htmlFor="csz">City, State, Zip</label>
              <input
                placeholder="City, State, Zip"
                type="text"
                className="form-control"
                id="city"
                name="city"
              />
            </div>
          </div>
        </div>

        <div className="row pt-1">
          <div className="col-sm-4" />

          <div className="col-sm-4">
            <div className="text-centerform-group">
              <label htmlFor="amount">
                <h5>Amount:</h5>
              </label>
              <input
                placeholder="Dollar Amount"
                type="text"
                className="form-control"
                id="amount"
                name="amount"
              />
            </div>
          </div>

          <div className="col-sm-4" />
        </div>

        <div className="gcb btn btn-block mb-4">
          <Link>Submit</Link>
        </div>
      </div>
    );
  }
}
