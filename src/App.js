import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
//import Axios from 'axios';
import ContactUs from "./components/user/ContactUs";
import Header from './components/utility/Header';
import Footer from './components/utility/Footer'
import GiftCertificates from "./components/user/GiftCertificates"

function App() {
  return (
   <Router>
     <Header />
     <GiftCertificates />
     <Footer />
     <Route exact path="/contact" component={ContactUs} />   
    </Router>
  );
}

export default App;
