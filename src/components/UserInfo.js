import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


class UserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            hand:"",
            favCourse:"",
            favGolfer:"",
          }

        this.userInfoSubmit = this.userInfoSubmit.bind(this);
        this.userInfoChange = this.userInfoChange.bing(this);
    };

    userInfoSubmit(event){
        event.preventDefault();

        let hand = this.state.hand;
        let favCourse = this.state.favCourse;
        let favGolfer = this.state.favGolfer;

        fetch(`${process.env.REACT_APP_URL}/userinfo/new`, {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token')
            }),
            body: JSON.stringify({
                userinfo: {
                    hand: hand, 
                    favCourse: favCourse,
                    favGolfer: favGolfer
                }
            })
            })
            .then(response=>response.json())
            .then((data)=>{console.log('userinfo', data)})
    };

    
    render() { 
        return (
            <div>
                <h1>Welcome to On The Tee</h1>
                <p> Before you begin, we would like to get to know you.</p>
                
            </div>

        );
    }
}
    


export default UserInfo;