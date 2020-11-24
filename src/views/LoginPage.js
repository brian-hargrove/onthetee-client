import React, {useState, useEffect} from 'react';
import { FormGroup, Label, Form, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import "../styles/LoginPage.css";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            body: JSON.stringify({
                user: {username: username, password: password},
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.error){
                alert("Login has hooked into the trees, Take a Mulligan and try again");
            }else {
                props.updateToken(data.sessionToken);
                history.push("/course");  //? sends user to course list upon successful login
            }
        });
    };
    return(
        <div id="divMain">
            <div id="loginForm">
                <h1>Login</h1>
                <Form id="formBody" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            onChange={(event)=>setUsername(event.target.value)}
                            name="username"
                            value={username}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            onChange={(event)=>setPassword(event.target.value)}
                            name="password"
                            type="password"
                            value={password}
                        />
                    </FormGroup>
                    <Button id="loginButton" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage;