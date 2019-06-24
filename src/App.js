import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//import Axios from 'axios';
import Home from "./components/user/Home";
import BeforeAndAfter from "./components/user/BeforeAndAfter";
import Comments from "./components/user/Comments";
import ContactUs from "./components/user/ContactUs";
import GiftCertificates from "./components/user/GiftCertificates";
import LoginProfile from "./components/user/LoginProfile";
import ScheduleServices from "./components/user/ScheduleServices";
import Admin from "./components/administrator/Admin";
import AdminCalendar from "./components/administrator/AdminCalendar";



function App() {
  return (
   <Router>
     
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
   
    </Router>
  );
}

export default App;

