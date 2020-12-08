import React, { Component } from 'react';
import {Form, Button, Input, FormGroup} from 'reactstrap';
import UserInfo from './UserInfo';
import APIURL from '../helpers/environment';
import "../styles/Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        

        this.state = { 
            username:'',
            email:'',
            password:'',
            passwordConfirm:''
         }

         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
    };

    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    userValid (username, password){
        let userValidation = false;

        if (
            (username.length>7) &&
            (password.length>7) &&
            (
                !(/^[A-Za-z0-9]+$/).test(password) || /([0-9]{1,})/.test(password)
            )
        ) {userValidation = true;
        };
        return userValidation;
    };

    handleSubmit (event){
        event.preventDefault();

        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let passwordConfirm = this.state.passwordConfirm;

        if(username && password && email) {
            if(this.userValid(username, password)){
                if(password === passwordConfirm){
                    fetch(`${process.env.REACT_APP_URL}/user/register`, {
                        method: "POST",
                        headers: new Headers ({
                            "Content-Type": "application/json"
                        }),
                        body: JSON.stringify({
                            user: {
                                username: username,
                                email: email,
                                password: password
                            }
                        })
                    })
                    // .then(response=>{
                    //      {
                    //         this.props.handleSuccessfulAuth(response.data);
                            
                    //     }
                    // })
                    .then(response => response.json())
                    .then((data)=>{
                        localStorage.setItem('token',data.sessionToken);
                        console.log(data);
                        // <UserInfo />
                        window.location.href='/userinfo';
                       
                    //    alert("Congrats. Please login to access The Clubhouse");
                    })                    
                    .catch(error => console.log(error));
                } else {
                    alert("Passwords do not match");}
                }else {alert("Username must be at least 8 characters in length. Password must include special character, number and be at least 8 characters in length. Email is required.");}
            }else{
                alert("All field must be filled out");
            };
        }
    



    render() { 
        return ( 
            <div >
                <Form className="registerForm" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input
                            id="registerUsername"
                            name="username"
                            placeholder="Username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        
                        <Input
                            id="registerEmail"
                            name="email"
                            placeholder="Email Address"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        
                        <Input
                            id="registerPassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        
                        <Input
                            id="registerPasswordConfirm"
                            name="passwordConfirm"
                            placeholder="Confirm Password"
                            type="password"
                            value={this.state.passwordConfirm}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button 
                        id="registerButton" type="submit">
                        Register
                        </Button>
                </Form>
            </div>
         );
    }
}
 
export default Register;