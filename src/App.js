import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import ContactUs from "./components/user/ContactUs";
import Header from './components/utility/Header';
import Navbar from './components/utility/Navbar';

function App() {
  return (
   <Router>
     <Header />
     <Navbar />
     <Route exact path="/contact" component={ContactUs} />   
    </Router>
  );
}

export default App;
