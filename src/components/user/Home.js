import React, { Component } from "react";
import pic2 from "../img/pic2.jpg";
import discount from "../img/discount.png";

export default class Home extends Component {
  render() {
    return (
      <div>
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
              <p>
                Our goal is to make you smile when you get home. You have enough
                on your plate; family, work, leisure activities. Imagine coming
                home, knowing you don't have another job (cleaning) to do.
                You're coming home to relax in comfort. Allow us to take care of
                the time consuming detail of keeping your home Pristine Clean.
                Click on Contact Us at the bottom of this page now and find out
                how much time Pulley's Pristine Clean can save you.
              </p>
              {/* how i want img aligned */}
              <div className="text-center">
                {/* img from import above from import file */}
                <img className="img-fluid" src={discount} alt="" />
              </div>
            </div>
            {/* what size is this part */}
            <div className="col-lg-6 text-center">
              {/* different size text befor p */}
              <h3>Commercial Services</h3>
              {/* talking */}
              <p>
                Everyone loves a clean office, especially your clients. We can
                keep your space Pulley's Pristine Clean on a daily, weekly or
                bi-weekly basis. A clean workspace says something to visitors
                and staff. Let your office's appearance speak to your clients.
                Click on Contact Us below to arrange a free in-office estimate.
              </p>
              <div className="text-center">
                {/* where i got pic from (from above import) */}
                <img className="img-fluid homeimg" src={pic2} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* footer from app.js */}
      </div>
    );
  }
}
