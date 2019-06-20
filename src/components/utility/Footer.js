import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-dark bg-success fixed-bottom"> */}
                    <Link className='btn btn-block butn-success bg-success fixed-bottom' to="/contact">
                        <h2 className='text-center' >Contact Us</h2>
                    </Link>
                {/* </nav>                 */}
            </div>
        )
    }
}
