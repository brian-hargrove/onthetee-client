import React, { useState, useEffect } from 'react';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import "../styles/RegistrationFrom.css";

const validateUsername = RegExp("((?=.*?[0-9]).*|(?=.*?[#?!@$%^&*-]).*)");

const RegistrationForm=(props)=> {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    let history = useHistory();

    const resetForm = ()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            //*fields not filled out
            if(!username || !email || !password) throw "Please fill out all fields";
            //*password too small
            if(password.length<8) throw " Password must be 8 or more characters";
            //*username too small or no special characters
            if(username.length<6 || !validateUsername.test(username)) throw "Username must be 6 or more chacters and inclue 1 number and/or special character";
            //*password does not match
            if(password !== passwordConfirm) throw "Passwords do NOT Match";

            fetch(`http://localhost:3000/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({user: {username, email, password}}),
            })
            .then((response)=>response.json())
            .then((data)=>{
                props.updateToekn(data.sessionToken);
                props.close();
                resetForm();
                history.push("/courses");
            })
            .catch((error)=>console.log(error));
        } catch (error){
            alert(error);
        }
    };
    return (
        <div id="divMain">
            <div id="registrationForm">
                <h1>Registration</h1>
                <Form id="formBody" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="registerUsername">Username</Label>
                        <Input 
                            onChange={(event)=>setUsername(event.target.value)}
                            name="username"
                            value={username}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="registerEmail">Email</Label>
                        <Input
                            onChange={(event)=>setEmail(event.target.value)}
                            value={email}
                            id="registerEmail"
                            type="email"
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="registerPassword">Password</Label>
                        <Input
                            onChange={(event)=>setPassword(event.target.value)}
                            value={password}
                            id="registerPassword"
                            type="password"
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="passwordConfirm">Confirm Password</Label>
                        <Input
                            onchange={(event)=>setPasswordConfirm(event.target.value)}
                            value={passwordConfirm}
                            id="passwordConfirm"
                            type="password"
                        ></Input>
                    </FormGroup>
                    <Button 
                        id="registerButton" 
                        type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};



export default RegistrationForm;