import React, { Component } from "react";
<<<<<<< HEAD
import pic2 from "../img/pic2.jpg";
import discount from "../img/discount.png";
<<<<<<< HEAD
import prices from "../img/prices.jpg";
import starting from "../img/starting.jpg";
=======
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Header from "../utility/Header";
import Footer from "../utility/Footer";
import ContactUs from "./ContactUs";
import Comments from "./Comments";
import ScheduleServices from "./ScheduleServices";
import BeforeAndAfter from "./BeforeAndAfter";
import GiftCertificates from "./GiftCertificates";
import LoginProfile from "./LoginProfile";
import pic2 from "../img/pic2.jpg";
import discount from "../img/discount.jpg";
>>>>>>> beforeafter
=======
>>>>>>> contact
>>>>>>> 324a4d42323772a54d2965c28820356f033a4025

export default class Home extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        {/* Header from utility */}
        {/* Navbar from utility */}
        <section>
          {/* tag to keep rows together */}
          <div className="row">
            {/* what size is this part of the row */}
            <div className="col-lg-6 text-center">
              {/* wanted this text outside of p to make it bigger */}
              <h3>Residential Services</h3>
              {/* talking */}
=======
        <Header />
        <div>
          <nav className="navbar navbar-dark  ">
            <Link to="/LoginProfile">Login</Link>
            <Link to="/ScheduleServices">See or Schedule Service(s)</Link>
            <Link to="/BeforeAndAfter">Before and After Photos</Link>
            <Link to="/GiftCertificates">Gift Certificates Available</Link>
            <Link to="/Comments">Comments?</Link>
            {/* <Link to = 'home'>Home Page</Link> */}
          </nav>
        </div>

        <section>
          <div className="row">
            <div className="col-lg-6 text-center">
              <h3>Residential Services</h3>
>>>>>>> beforeafter
              <p>
                Our goal is to make you smile when you get home. You have enough
                on your plate; family, work, leisure activities. Imagine coming
                home, knowing you don't have another job (cleaning) to do.
                You're coming home to relax in comfort. Allow us to take care of
<<<<<<< HEAD
                the time consuming detail of keeping your home Pristine Clean.
                Click on Contact Us at the bottom of this page now and find out
                how much time Pulley's Pristine Clean can save you.
              </p>
              {/* how i want img aligned */}
              <div className="text-center">
                {/* img from import above from import file */}
                <img className="img-fluid" src={discount} alt="" />
              </div>
<<<<<<< HEAD
              <div className="row">
                {/* what size is this part of the row */}
                <div className="col-lg-6 text-center">
                  <h3>Express Cleaning:</h3>
                  <h5>*Dust/Wipe down</h5>
                  <h5>*Sweep/Vacuum/Mop</h5>
                  <h5>*Freshen/Deodorize</h5>
                  <h5>*Microwave</h5>

                  <h3>Additional Services:</h3>
                  <h5>*Ovens</h5>
                  <h5>*shampoo Carpets/Furniture</h5>
                  <h5>*Kitchen, including Cabinets and Drawers</h5>
                  <h5>*Freezers</h5>
                  <h5>*Laundry</h5>
                </div>
                <div className="col-lg-6 text-center">
                  <h3>Deep Cleaning:</h3>
                  <h5>*All Express Cleaning Service</h5>
                  <h5>*Windows</h5>
                  <h5>*Baseboards</h5>
                  <h5>*Refrigerators</h5>
                  <h5>*Dish Washing</h5>
                  <h5>*Make Beds/Change Sheets</h5>
                  <h5>*Vacuum Mattresses/Furniture</h5>
                  <h5>*Dish Washing</h5>
                </div>
              </div>
=======
>>>>>>> contact
            </div>
            {/* what size is this part */}
            <div className="col-lg-6 text-center">
              {/* different size text befor p */}
              <h3>Commercial Services</h3>
              {/* talking */}
=======
                the small yet time consuming detail of keeping your home
                showcase clean Click on Contact Us at the bottom of this page
                now and find out how much time Pulley's Pristine Clean can save
                you.
              </p>
              <div className="text-center">
                <img className="img-fluid" src={discount} alt="" />
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <h3>Commercial Services</h3>
>>>>>>> beforeafter
              <p>
                Everyone loves a clean office, especially your clients. We can
                keep your space Pulley's Pristine Clean on a daily, weekly or
                bi-weekly basis. A clean workspace says something to visitors
                and staff. Let your office's appearance speak to your clients.
                Click on Contact Us below to arrange a free in-office estimate.
              </p>
              <div className="text-center">
<<<<<<< HEAD
                {/* where i got pic from (from above import) */}
<<<<<<< HEAD
                <img className="img-fluid homeimg pb-5" src={pic2} alt="" />
              </div>
              <div className="text-center">
                {/* where i got pic from (from above import) */}
                <img
                  className="pb-5"
                  src={prices}
                  alt=""
                  width="70%"
                  height="200px"
                />
                {/* where i got pic from (from above import) */}
                <img
                  className="pb-5"
                  src={starting}
                  alt=""
                  width="70%"
                  height="150px"
                />
=======
                <img className="img-fluid homeimg" src={pic2} alt="" />
<<<<<<< HEAD
>>>>>>> beforeafter
=======
>>>>>>> contact
>>>>>>> 324a4d42323772a54d2965c28820356f033a4025
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* footer from app.js */}
=======

        <Footer />
>>>>>>> beforeafter
      </div>
    );
  }
}
