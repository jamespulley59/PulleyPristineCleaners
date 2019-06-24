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
                
                    <Link to = {`/LoginProfile${LoginProfile}`}>Login</Link>
                    <Link to = {`/ScheduleServices${ScheduleServices}`}>See or Schedule Service(s)</Link>
                    <Link to = {`/BeforeAndAfter${BeforeAndAfter}`}>Before and After Photos</Link>
                    <Link to = {`/GiftCertificates${GiftCertificates}`}>Gift Certificates Available</Link>  
                    <Link to = {`/Comments${Comments}`}>Comments?</Link>
                    {/* <Link to = {`/${Home}`}>Home Page</Link> */}
            </nav>
        </div>

    <section>
        <div className="row">
        <div className='text-center'>                
            <div className='col-lg-4 d-none d-lg-block'>
                <h3>Residential Services</h3>
                    <p> Our goal is to make you smile when you get home.                               
                    You have enough on your plate; family, work, leisure activities.
                    Imagine coming home, knowing you don't have another job (cleaning) to do.
                    You're coming home to relax in comfort. Allow us to take care of the small yet time consuming detail of keeping your home showcase clean 
                        
                    Click on Contact Us at the bottom of this page now and find out how much time Pulley's Pristine Clean can save you.
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
        </div>
    </section> 
    

    <Footer />
        
</div>                    
    
)
}
}
