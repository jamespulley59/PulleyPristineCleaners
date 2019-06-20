import React, { Component } from 'react'
import {Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        const {backBtn, title, rightBtn, form, rightBtnTo} = this.props
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
             <Link to="../user/LoginProfile"></Link>
             <Link to = "../user/Home"></Link>
             <Link to = "../user/ScheduleServices"></Link>
             <Link to = "../user/Comment"></Link>
            }
            </nav>
        )
    }
}