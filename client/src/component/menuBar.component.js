import React, { Component } from 'react';

export default class MenuBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="black">
                <div className="nav-wrapper">
                    <div className="input-field">
                        <input id="search" type="search" placeholder="Search" required />
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </div>
            </nav>
        )
    }
}