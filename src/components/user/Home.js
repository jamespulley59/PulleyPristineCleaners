import React, { Component } from "react";
import starting from "../img/starting.jpg";
import prices from "../img/prices.jpg";
import pic2 from "../img/pic2.jpg";
import discount from "../img/discount.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 text-center">
            <h3>Residential Services</h3>
            <p>
              Our goal is to make you smile when you get home. You have enough
              on your plate; family, work, leisure activities. Imagine coming
              home, knowing you don't have another job (cleaning) to do. You're
              coming home to relax in comfort. Allow us to take care of the time
              consuming detail of keeping your home Pristine Clean. Click on
              Contact Us at the bottom of this page now and find out how much
              time Pulley's Pristine Clean can save you.
            </p>
            {/* how i want img aligned */}
            <div className="text-center">
              {/* img from import above from import file */}
              <img className="img-fluid" src={discount} alt="" />
            </div>

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
          </div>

          {/* {/* what size is this part */}
          <div className="col-lg-6 text-center">
            <h3>Commercial Services</h3>
            <p>
              Everyone loves a clean office, especially your clients. We can
              keep your space Pulley's Pristine Clean on a daily, weekly or
              bi-weekly basis. A clean workspace says something to visitors and
              staff. Let your office's appearance speak to your clients. Click
              on Contact Us below to arrange a free in-office estimate.
            </p>

            {/* <div className="text-center col-lg-6"> */}
            {/* where i got pic from (from above import) */}
            <img
              className="pb-5"
              src={starting}
              alt=""
              width="70%"
              height="150px"
            />
            <img className="img-fluid homeimg pb-5" src={pic2} alt="" />
          </div>
        </div>
        <div className="text-center">
          {/* where i got pic from (from above import) */}
          <img className="pb-5" src={prices} alt="" width="50%" height="70%" />
        </div>
        {/* footer from app.js */}
      </div>
    );
  }
}
