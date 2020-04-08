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
            <div className="collapsible-header">
                <td> {props.country.country} </td>
                <td> {props.country.totalCases} </td>
                <td> {props.country.totalRecovered} <span class="new badge" data-badge-caption="">{recPerc.toFixed(2)}</span></td>
                <td> {props.country.totalDeaths} <span class="new badge red" data-badge-caption="">{deathPerc.toFixed(2)}</span></td>
            </div>
            <div className="collapsible-body">
                {props.country.casesPerMn}
            </div> 
        </tr>
    )
}


export default class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/').then((res) => {
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
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Total Cases</th>
                            <th>Total Recovered</th>
                            <th>Total Deaths</th>
                        </tr>
                    </thead>

                    <tbody className="collapsible">
                        {
                            this.buildTemplate()
                        }
                    </tbody>
                </table>

            </div>
        )
    }


}