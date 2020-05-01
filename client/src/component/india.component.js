import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';
export default class India extends Component {
    constructor(){
        super();

        this.state = {
            stateData : []
        }
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/v2/state_district_wise.json').then((data)=>{
            this.setState({
                stateData:data.data
            });
            console.log(this.state.stateData);
        });

        
    }

    render(){
        return(
            <div></div>
        )
    }
}