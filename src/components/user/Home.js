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
                    <h2>Home Page</h2>          
                        <Link to = {`/LoginProfile${LoginProfile}`}>Login</Link>
                        <Link to = {`/ScheduleServices${ScheduleServices}`}>Review or Schedule Service(s)</Link>
                        <Link to = {`/BeforeAndAfter${BeforeAndAfter}`}>Before and After Photos</Link>
                        <Link to = {`/GiftCertificates${GiftCertificates}`}>Gift Certificates Available</Link>  
                        <Link to = {`/Comments${Comments}`}>Comments?</Link>
                        <Link to = {`/${Home}`}>Home Page</Link>
                </nav>
            </div>

            <div className='text-center'>
            <img className='homeimg' src={pic1} alt="" />
            </div>

        <Footer />
         
    </div>                    
        
)
}
}
