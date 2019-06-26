import React, { Component } from "react";
import { link } from "react-router-dom";
import Header from "../utility/Header";
//import {navbar} from './utility/Navbar';
import Footer from "../utility/Footer";
//import {css} from './src/App.css';
import {clutter1} from "../img/clutter1.jpg";
import {kitchen} from "../img/kitchen.jpg";

export default class BeforeAndAfter extends Component {
    render() {
        return (
            <div>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={clutter1} className="d-block w-100" alt=""/>
                </div>
    
        <div className="carousel-item">
        <img src={kitchen} className= "d-block w-100" alt="" />
        </div>
    
  
  </div>
</div>
</div>
    
        )}

