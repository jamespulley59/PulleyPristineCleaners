import React, { Component } from 'react'
import {link} from 'react-router-dom';
import Header from '../utility/Header';
//import {navbar} from './utility/Navbar';
import Footer from '../utility/Footer';
//import {css} from './src/App.css';
import giftCert from "../img/giftCert.jpg"

export default class GiftCertificates extends Component {
    render() {
        return (
            
            <div>
        <Header />

        <h5 className ="busy"> Give the gift of a clean home to someone with a busy lifestyle</h5>
      
        <h5 className ="busy"> More clean, less stress</h5>

        <h6>From:</h6>

        <div>
            
    <section id="from">
      <div class="from">
      <form>
        <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           placeholder="name"
           type="text"
           className="form-control"
           id="name"np
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
         <label htmlFor="password2">City, State, Zip</label>
         <input
           placeholder="City, State, Zip"
           type="text"
           className="form-control"
           id="city"
           name="city"></input>
        
       </div>

       <div className="form-group ">
         <label htmlFor="amount">Amount</label>
         <input
           placeholder="Dollar Amount"
           type="text"
           className="form-control"
           id="amount"
           name="amount"></input>
             </div>
             </form>
             

           
        <div class="to">
        <form>
        <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           placeholder="name"
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
         <label htmlFor="password2">City, State, Zip</label>
         <input
           placeholder="City, State, Zip"
           type="text"
           className="form-control"
           id="city"
           name="city"></input>
        
       </div>

       <div className="form-group ">
         <label htmlFor="amount">Amount</label>
         <input
           placeholder="Dollar Amount"
           type="text"
           className="form-control"
           id="amount"
           name="amount"></input>
             </div>
             </form>
   
        </div>
        </div>
    </section>
    </div>
    </div>

          
        
        )
    }
}