import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Home from "./components/user/Home";
import BeforeAndAfter from "./components/user/BeforeAndAfter";
import Comments from "./components/user/Comments";
import ContactUs from "./components/user/ContactUs";
import GiftCertificates from "./components/user/GiftCertificates";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import ScheduleServices from "./components/user/ScheduleServices";
import Admin from "./components/administrator/Admin";
import Manage from "./components/administrator/Manage";
import AdminCalendar from "./components/administrator/AdminCalendar";
import Header from "./components/utility/Header";
import Navbar from "./components/utility/Navbar";
import Footer from "./components/utility/Footer";

class App extends Component {
  //check if user is now logged in
  loggedIn = async () => {
    const res = await Axios.get("/api/loggedIn");

    return res.data;
  };

  // function App()
  render() {
    return (
      <Router>
        <Header />
        <Navbar />
        <Switch className="main-section">
          {/* Home  */}
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          {/* Authentication */}
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route
            exact
            path="/Profile/:uid"
            render={props => <Profile {...props} loggedIn={this.loggedIn} />}
          />
          {/* Admin */}
          <Route
            exact
            path="/Admin"
            render={props => <Admin {...props} loggedIn={this.loggedIn} />}
          />
          <Route exact path="/AdminCalendar" component={AdminCalendar} />
          <Route exact path="/Manage" component={Manage} />
          {/* Else */}
          <Route exact path="/BeforeAndAfter" component={BeforeAndAfter} />
          <Route
            exact
            path="/Comments"
            render={props => <Comments {...props} loggedIn={this.loggedIn} />}
          />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route
            exact
            path="/GiftCertificates"
            render={props => (
              <GiftCertificates {...props} loggedIn={this.loggedIn} />
            )}
          />
          <Route
            exact
            path="/ScheduleServices"
            render={props => (
              <ScheduleServices {...props} loggedIn={this.loggedIn} />
            )}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
