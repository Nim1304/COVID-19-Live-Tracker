import React, { Component } from 'react';
import axios from 'axios';


const Country = (props) => {
    var Recovered = parseFloat((props.country.totalRecovered || '0').replace(/,/g, ''));
    var Deaths = parseFloat((props.country.totalDeaths || '0').replace(/,/g, ''));
    var Total = parseFloat((props.country.totalCases || '0').replace(/,/g, ''));
    var recPerc = Recovered / Total * 100;
    var deathPerc = Deaths / Total * 100;
    console.log(props.country.country, Deaths, Total, recPerc);
    return (
        <tr>
            <td> {props.country.country} </td>
            <td> {props.country.totalCases} </td>
            <td> {props.country.newCases.replace('+','') || '0'} </td>
            <td> {props.country.totalDeaths} <span className="new badge red" data-badge-caption="">{deathPerc.toFixed(2)}</span></td>
            <td style={{color:"red"}} > {props.country.newDeaths.replace('+','') || '0'} </td>
            <td> {props.country.totalRecovered} <span className="new badge" data-badge-caption="">{recPerc.toFixed(2)}</span></td>
        </tr>
    )
}


export default class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            yesterday: props.yesterday,
            data: []
        }
    }

    componentDidMount() {
        axios.get(`getData${this.state.yesterday ? '/yesterday' : '/'}`).then((res) => {
            this.setState({ data: res.data });
            console.log(this.state.data);
        }).catch(err => console.log(err));
    }

    buildTemplate() {
        return this.state.data.map((country, i) => {
            if (country.country === undefined || country.country === 'World') {
                return;
            } else
                return <Country country={country} />;
        })
    }


    render() {
        return (
            <div>
                <table className="highlight centered #212121 grey darken-4" style={{color:"white"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total Recovered</th>
                        </tr>
                    </thead>

                    <tbody id="filter">
                        {
                            this.buildTemplate()
                        }
                    </tbody>
                </table>

            </div>
        )
    }


}