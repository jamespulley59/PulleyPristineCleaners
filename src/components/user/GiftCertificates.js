import React, { Component } from "react";
import { link } from "react-router-dom";
import Header from "../utility/Header";
//import {navbar} from './utility/Navbar';
import Footer from "../utility/Footer";
//import {css} from '../src/App.css';
import {giftCert} from "../img/giftCert.jpg";
import {off} from "../img/10 Off.png"

export default class GiftCertificates extends Component {
  render() {
    return (
      <div>
        <Header />
        <h4 className="busy">
          Give the gift of a clean home to someone with a busy lifestyle
        </h4>
        <h4 className="busy"> More clean, less stress</h4>
        <div className="row">
          <div className="col-lg-6">
            <h6>From:</h6>
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
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                      placeholder="Dollar Amount"
                      type="text"
                      className="form-control"
                      id="amount"
                      name="amount"
                    />
                  </div>
                </form>
              </div>
            </section>
            <img className="off" src={off} alt=""/>
          </div>

          <div className="col-lg-6">
            <section id="to">
              <div>
                <h6>To:</h6>
                <form>
                  <div className="form-group2">
                    <label htmlFor="name">Name</label>
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="form-group2">
                    <label htmlFor="street">Street Address</label>
                    <input
                      placeholder="Street Address"
                      type="text"
                      className="form-control"
                      id="street"
                      name="street"
                    />
                  </div>
                  <div className="form-group2">
                    <label htmlFor="password2">City, State, Zip</label>
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
            <img className= "gift" src={giftCert}alt=""  />
          </div>
          
        </div>
        
      </div>
    );
  }
}
