import React, { Component } from 'react';

class ScorecardEdit extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            golfcourse:"",
            date:"",
            hole1:"",
            hole2:"",
            hole3:"",
            hole4:"",
            hole5:"",
            hole6:"",
            hole7:"",
            hole8:"",
            hole9:"",
            hole10:"",
            hole11:"",
            hole12:"",
            hole13:"",
            hole14:"",
            hole15:"",
            hole16:"",
            hole17:"",
            hole18:"",
            notes: "",
            scores: ""
        }
    }

    cardEdit () {
        fetch(`${process.env.REACT_APP_URL}/score/${this.props.score.id}`,{
            method: "PUT",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            }),
        })
        .then((response)=>response.json())
        .then((body)=>{this.setState({scores: body})})
    }
}