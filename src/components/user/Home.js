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
import pic1 from "../img/pic1.jpg"

export default class Home extends Component {
render() {
     
return (
    <div>
        <Header />
            <div>
                <nav className="navbar navbar-dark  ">
                    {/* <h2>Home Page</h2>           */}
                        <Link to = {`/LoginProfile${LoginProfile}`}>Login</Link>
                        <Link to = {`/ScheduleServices${ScheduleServices}`}>See or Schedule Service(s)</Link>
                        <Link to = {`/BeforeAndAfter${BeforeAndAfter}`}>Before and After Photos</Link>
                        <Link to = {`/GiftCertificates${GiftCertificates}`}>Gift Certificates Available</Link>  
                        <Link to = {`/Comments${Comments}`}>Comments?</Link>
                        {/* <Link to = {`/${Home}`}>Home Page</Link> */}
                </nav>
            </div>

            <section>
                <div class="row">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>

                <div className='text-center'>
                    <div className='col-lg-4 d-none d-lg-block'>
                        <h3>Residential Services</h3>
                            <p> Our goal is to make you smile when you get home
                            Home to your clean safe haven.
                            You have enough on your plate; 
                            family, work, leisure activities.
                            Pulleys Pristine Clean allows you to live your life.
                            Knowing you are not coming home to another job (cleaning).
                            You're coming home to relax in comfort and able to contemplate what is important; your real life. 
                            Allow us to take care of the small yet time consuming detail of keeping your home showcase clean 
                            (mission statemnet in italics) 
                            Click on Contact Us at the bottom of this page now and begin enjoying a more relaxed lifestyle.
                            </p>  
                    </div>

                    <div className='col-lg-4 d-none d-lg-block'>
                        <img className='homeimg' src={pic1} alt="" />
                    </div>

                    <div className='col-lg-4 d-none d-lg-block'>
                        <h3>Commercial Services</h3>
                            <p>We'll clean the shit out of your office                    
                            </p>
                    </div>         
                </div>
            </section> 
           

        <Footer />
         
    </div>                    
        
)
}
}
