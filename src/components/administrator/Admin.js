import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div classname='col-lg-3'>
                        <h4>Client Name/Id? Including address, etc...</h4>
                    </div>
                    <div classname='col-lg-2'>
                        <h2>Date of last svs/estimate</h2>
                    </div>
                    <div classname='col-lg-7'>
                        <h2>Last svs</h2>
                    </div>
                    <div classname='col-lg-1'>
                        <h2>Charge</h2>
                    </div>
                </div>
            </div>
        )
    }
}
