import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
//import Axios from 'axios';
import Home from "./components/user/Home";
import BeforeAndAfter from "./components/user/BeforeAndAfter";
import Comments from "./components/user/Comments";
import ContactUs from "./components/user/ContactUs";
import GiftCertificates from "./components/user/GiftCertificates";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import ScheduleServices from "./components/user/ScheduleServices";
import Admin from "./components/administrator/Admin";
import Manage from "./components/administrator/Manage";
import AdminCalendar from "./components/administrator/AdminCalendar";
import Header from "./components/utility/Header";
import Navbar from "./components/utility/Navbar";
import Footer from "./components/utility/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="main-section">
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/BeforeAndAfter" component={BeforeAndAfter} />
        <Route exact path="/Comments" component={Comments} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/GiftCertificates" component={GiftCertificates} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/ScheduleServices" component={ScheduleServices} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Manage" component={Manage} />
        <Route exact path="/AdminCalendar" component={AdminCalendar} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
