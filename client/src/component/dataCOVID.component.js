import React, { Component } from 'react';
import axios from 'axios';


const Country = (props)=>{
    return (
        <tr>
            <td> {props.country.country}</td>
            <td> {props.country.totalCases} </td>
            <td> {props.country.totalRecovered} </td>
            <td> {props.country.totalDeaths} </td>
        </tr>
    )
}


export default class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/').then((res) => {
            this.setState({ data: res.data });
        }).catch(err => console.log(err));
    }

    buildTemplate (){
        return this.state.data.map((i,country)=>{
            if(country.country!=undefined || country.country!='World'){
                return <Country country={Country} />
            }
        })
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Cases</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    </tbody>
                </table>

            </div>
        )
    }


}