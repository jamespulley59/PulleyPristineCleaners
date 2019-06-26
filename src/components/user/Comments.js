import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../utility/Header'
import Navbar from '../utility/Navbar'
import Footer from '../utility/Footer'
import ContactUs from './ContactUs'
import Home from './Home'
import ScheduleServices from './ScheduleServices'
import BeforeAndAfter from './BeforeAndAfter'
import GiftCertificates from './GiftCertificates'
import LoginProfile from './LoginProfile'
import pic2 from "../img/pic2.jpg"
import discount from "../img/discount.png"

export default class Comments extends Component {
render() {
     
return (
<div className='Comments'>    
    <div className="container text-center">
       <h2>Your Opinion Matters</h2>
        <h4 className=''>   We want to hear from you. Is there something we can do better? Do less or more of?
        </h4>
        <h4 className='text-center'>
               At Pulley's Pristine Clean, our job is not done until you are 100% satisfied. 
        </h4> 
        <h4 className='text-center'>      
               If you have established a regular service, there may be occasions when you need more or different services. Of course we will cheerfully comply with any directions. Please let us know how to be of better service to you.
        </h4>
        <h4 className='text-center'>
        </h4>
        <h4 className='text-center'>
               Of course, we also like to hear when we have done something well. Your testimonial comments are always appreciated.
        </h4>        
        <h3 className='text-center'>
            Let us hear from you
        </h3>            
    </div>

    <div className='row'>        
        <div className='col-sm-8'> 
            <h2 className='text-center'>Your Comments?</h2>    
                <textarea  
                    rows='5'
                    className='container textarea'
                    type='text'
                    placeholder='Type your comments here'
                    name='description'
                    max-length='400'                
                />
            <div className='text-center Comment-btn'>
                <Link 
                className='btn-outline'
                to='./administrator/Admin'
                >Submit your comments
                </Link>
            </div>        
        </div>    
        <div className='col-sm-4'> 
            <div className='comments-img'>        
                <img className='img-fluid' src={discount} alt="" />
            </div>        
        </div>
    </div>     
</div>   
)}
}