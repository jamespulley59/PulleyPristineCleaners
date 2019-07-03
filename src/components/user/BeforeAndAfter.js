import React, { Component } from "react";
import clutter1 from "../img/clutter1.jpg";
import kitchen from "../img/kitchen.jpg";
import whiteroom from "../img/whiteroom.jpg";
import clutter3 from "../img/clutter3.jpg";
import starting from "../img/starting.jpg";
import description from "../img/description.jpg";
import discount from "../img/discount.jpg";
import prices from "../img/prices.jpg";

export default class BeforeAndAfter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4">
            <div className="bacontainer">
              <div>
                <h4>Express Cleaning:</h4>
              </div>

              <div>
                <ul>
                  <li>Dust/wipe down</li>
                  <li>Sweep/Vacuum/Mop</li>
                  <li>Air Freshener/Deodorizer</li>
                  <li>Microwave</li>
                  <span />
                </ul>
                <span />
              </div>
              <span />
              <div>
                <h4>Additional Services:</h4>
              </div>
              <div>
                <ul>
                  <li>Oven</li>
                  <li>Shampoo Carpets</li>
                  <li>Shampoo couches/love seats</li>
                  <li>Kitchen Cabinets/drawers</li>
                  <li>Laundry</li>
                  <li>Freezer</li>
                </ul>
              </div>
            </div>
            <img
              id="prices"
              className="pb-2"
              src={prices}
              height={150}
              width={500}
              alt=""
            />
          </div>

          <div className="col-lg-4 text-center">
            <img
              className="description"
              src={description}
              height={45}
              width={350}
              alt=""
            />
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ul
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              />
              <ul data-target="#carouselExampleCaptions" data-slide-to="1" />
              <ul data-target="#carouselExampleCaptions" data-slide-to="2" />
              <ul data-target="#carouselExampleCaptions" data-slide-to="3" />

              <div class="carousel-inner">
                <div class="carousel-item active" data-interval="3500">
                  <img src={clutter1} className="house mx-auto" alt="" />
                  <h1 className="center">Before</h1>
                  <div class="carousel-caption " />
                </div>

                <div class="carousel-item" data-interval="3000">
                  <img src={kitchen} className="house mx-auto" alt="" />
                  <div class="carousel-caption" />
                  <h1 className="center">After</h1>
                </div>

                <div class="carousel-item" data-interval="3500">
                  <img src={clutter3} className="house mx-auto" alt="" />
                  <div class="carousel-caption" />
                  <h1 className="center">Before</h1>
                </div>

                <div class="carousel-item" data-interval="3000">
                  <img src={whiteroom} className="house mx-auto" alt="" />
                  <div class="carousel-caption" />
                  <h1 className="center">After</h1>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <img
                className="discount"
                src={discount}
                height={275}
                width={300}
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-4 text-justify">
            <div className="bacontainer">
              <h4>Deep Cleaning:</h4>
              <li>All express cleaning services</li>
              <li>Windows</li>
              <li>Baseboards</li>
              <li>Couch, loveseat vacuuming</li>
              <li>Refrigerator</li>
              <li>Wash dishes/silverware</li>
              <li>Make bed(s)/change sheets</li>
              <li>Mattress vacuuming</li>
              <li>Bathtub and tiles</li>
              <li>Toilet(s)</li>
            </div>
            <img
              className="starting"
              src={starting}
              height={100}
              width={600}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
