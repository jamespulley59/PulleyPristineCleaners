import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Footer extends Component {
    render() {
        return (
            <div>
                <Link className='btn btn block' to='/ContactUs'>Contact Us
                </Link>                
            </div>
        )
    }
}
