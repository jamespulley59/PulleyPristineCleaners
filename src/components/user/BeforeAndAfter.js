import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../utility/Header";
import Navbar from '../utility/Navbar';
import Footer from "../utility/Footer";
import clutter1 from "../img/clutter1.jpg";
import kitchen from "../img/kitchen.jpg";
import clutter2 from "../img/clutter2.jpg";
import whiteroom from "../img/whiteroom.jpg";
import clutter3 from "../img/clutter3.jpg";
import vacuum from "../img/vacuum.jpg";




export default class BeforeAndAfter extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />

        <div className="row">
        <div className="col-lg-6">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="5000">
              <img src={clutter1} className="house mx-auto" alt="" />
              <div class="carousel-caption " />
              <h1 className="center">Before</h1>
            </div>

            <div class="carousel-item" data-interval="4000">
              <img src={kitchen} className="house mx-auto" alt="" />
              <div class="carousel-caption" />
              <h1 className="center">After</h1>
            </div>
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
        </div>
        
   
        <div className="col-lg-6">
        <div id="carouselExampleCaptions"
          class= "carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div class="carousel-item active" data-interval="4000">
              <img src={clutter2} className="house mx-auto" alt="" />
              <div class="carousel-caption " />
              <h1 className="center">Before</h1>
            </div>

            <div class="carousel-item" data-interval="3000">
              <img src={whiteroom} className="house mx-auto" alt="" />
              <div class="carousel-caption" />
              <h1 className="center">After</h1>
            </div>
          </div>
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
        </div>
        
        <Footer />
      </div>
    );
  }
}

