import React, { Component } from 'react'
import pic2 from "../img/pic2.jpg"
import discount from "../img/discount.png"


export default class Home extends Component {
render() {
     
return (
<div>   
    <section>
        <div className="row">
            <div className="col-lg-6 text-center">
            <h3>Residential Services</h3>
                <p>
                    Our goal is to make you smile when you get home.                               
                    You have enough on your plate; family, work, leisure activities.
                    Imagine coming home, knowing you don't have another job (cleaning) to do.
                    You're coming home to relax in comfort. Allow us to take care of the small yet time consuming detail of keeping your home showcase clean Click on Contact Us at the bottom of this page now and find out how much time Pulley's Pristine Clean can save you.
                </p>
                <div className="text-center">
                <img className='img-fluid' src={discount} alt="" />
                </div>
            </div>
             
            
            <div className="col-lg-6 text-center">
                <h3>Commercial Services</h3>
                <p>Everyone loves a clean office, especially your clients. We can keep your space Pulley's Pristine Clean on a daily, weekly or bi-weekly basis. A clean workspace says something to visitors and staff. Let your office's appearance speak to your clients. Click on Contact Us below to arrange a free in-office estimate.</p>
            <div className="text-center">
                <img className='img-fluid homeimg' src={pic2} alt="" />
            </div>
            </div>
        </div>
    </section>    
</div>                 
)}}


