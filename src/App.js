import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//import Axios from 'axios';
import Home from "./components/user/Home";
import BeforeAndAfter from "./components/user/BeforeAndAfter";
import Comments from "./components/user/Comments";
import ContactUs from "./components/user/ContactUs";
<<<<<<< HEAD
import Header from './components/utility/Header';
import Footer from './components/utility/Footer'
import GiftCertificates from "./components/user/GiftCertificates"
=======
import GiftCertificates from "./components/user/GiftCertificates";
import LoginProfile from "./components/user/LoginProfile";
import ScheduleServices from "./components/user/ScheduleServices";
import Admin from "./components/administrator/Admin";
import AdminCalendar from "./components/administrator/AdminCalendar";


>>>>>>> c12f1c78448917cf406e23595aa8efec0eaf1f83

function App() {
  return (
   <Router>
<<<<<<< HEAD
     {/* <Header /> */}
     <GiftCertificates />
     <Footer />
     <Route exact path="/contact" component={ContactUs} />   
=======
     
    <Route exact path='/' component={Home} />
    <Route exact path='/Home' component={Home} /> 
    <Route exact path="/BeforeAndAfter" component={BeforeAndAfter} />
    <Route exact path="/Comments" component={Comments} />
    <Route exact path="/ContactUs" component={ContactUs} />  
    <Route exact path="/GiftCertificates" component={GiftCertificates} />
    <Route exact path="/LoginProfile" component={LoginProfile} />
    <Route exact path="/ScheduleServices" component={ScheduleServices} />   
    <Route exact path="/Admin" component={Admin} />
    <Route exact path="/AdminCalendar" component={AdminCalendar} />
   

>>>>>>> c12f1c78448917cf406e23595aa8efec0eaf1f83
    </Router>
  );
}

export default App;
