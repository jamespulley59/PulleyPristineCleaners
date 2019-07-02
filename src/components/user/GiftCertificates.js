import React, { Component } from "react";
import gift from "../img/gift.jpg";
import discount from "../img/discount.jpg";

export default class GiftCertificates extends Component {
  render() {
    return (
      <div>
        <h4 className="busy text-center">
          Give the gift of a clean home to someone with a busy lifestyle
        </h4>
        <h4 className="text-center"> More clean, less stress</h4>

        <div className="row">
          <div className="col-lg-4" />
          <div className="col-lg-4">
            <div className="text-center">
              <div className="form-group">
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
          </div>
          <div className="col-lg-4" />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h5>From:</h5>
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
            <div className="text-center">
              <img
                className="discount"
                id="discount"
                src={discount}
                height={400}
                width={500}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <section id="to">
              <div>
                <h5>To:</h5>
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
            <div className="text-center">
              <img className="gift" id="gift" src={gift} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
