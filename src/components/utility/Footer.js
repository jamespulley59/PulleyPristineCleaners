import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Footer extends Component {    

render() {
    //const {uid}= this.props
    return (
        <div>                
            <Link className='btn btn-block  fixed-bottom' to="/contact">
                <h2 className='text-center' >Contact Us</h2>
            </Link>               
        </div>
    )
    }
}