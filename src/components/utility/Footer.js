import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Footer extends Component {
    

    render() {
        const {uid}= this.props
        return (
            <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <div className="full-width">
            <Link className="float-right" to="../user/contactUs">
              </Link>
              </div>
          </nav>
        )
    }