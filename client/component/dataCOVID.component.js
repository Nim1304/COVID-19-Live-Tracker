import React, { Component } from 'react';
import axios from 'axios';

export default class Data extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/').then((res)=>{
            this.setState({data : res.data});
        }).catch(err=>console.log(err));
    }

    

    render(){
        return(
            <div></div>
        )
    }


}