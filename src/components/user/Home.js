import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../utility/Header'
import Footer from '../utility/Footer'
import ContactUs from './ContactUs'
import Comments from './Comments'
import ScheduleServices from './ScheduleServices'
import BeforeAndAfter from './BeforeAndAfter'
import GiftCertificates from './GiftCertificates'
import LoginProfile from './LoginProfile'
import pic2 from "../img/pic2.jpg"
import discount from "../img/discount.png"

export default class Home extends Component {
render() {
     
return (
    <div>   
    <Header />
    <nav className="navbar navbar-dark  ">
        {/* <h2>Home Page</h2>           */}
        <Link to = {`/LoginProfile${LoginProfile}`}>Login</Link>
        <Link to = {`/ScheduleServices${ScheduleServices}`}>See or Schedule Service(s)</Link>
        <Link to = {`/BeforeAndAfter${BeforeAndAfter}`}>Before and After Photos</Link>
        <Link to = {`/GiftCertificates${GiftCertificates}`}>Gift Certificates Available</Link>  
        <Link to = {`/Comments${Comments}`}>Comments?</Link>
        {/* <Link to = {`/${Home}`}>Home Page</Link> */}
    </nav>
    <section>        
        <div className="row">
            <div className="col-lg-4 text-center">
            <h3>Residential Services</h3>
                <p>
                    Our goal is to make you smile when you get home.                               
                    You have enough on your plate; family, work, leisure activities.
                    Imagine coming home, knowing you don't have another job (cleaning) to do.
                    You're coming home to relax in comfort. Allow us to take care of the small yet time consuming detail of keeping your home showcase clean Click on Contact Us at the bottom of this page now and find out how much time Pulley's Pristine Clean can save you.
                </p>
                <div>
                <img className='img-fluid homeimg' src={discount} alt="" />
            </div>  
            </div>
            <div className="col-lg-4 text-center">
                <img className='img-fluid homeimg' src={pic2} alt="" />
            </div>
            <div className="col-lg-4 text-center">
                <h3>Commercial Services</h3>
                <p>We'll clean the shit out of your office</p>
            </div>
        </div>
    </section> 
    

    <Footer />
        
</div>                    
    
)
}
}
