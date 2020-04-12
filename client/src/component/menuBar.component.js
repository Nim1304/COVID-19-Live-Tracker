import React, { Component } from 'react';

export default class MenuBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="black">
                <div className="nav-wrapper">
                    <div className="input-field" style={{width:"67%",float:"left"}} >
                        <input id="search" type="search" placeholder="Search" required />
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                    <ul id="nav-mobile" className="right" style={{marginRight:"100px"}}>
                        <li><a href="https://github.com/Nim1304/COVID-19-Live-Tracker/blob/master/db/data.js">Click->API</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}