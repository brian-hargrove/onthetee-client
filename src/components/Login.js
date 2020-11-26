import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response)=>response.json()
        ).then((data)=>{
            props.updateToken(data.sessionToken);
        })
    }

        return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        onChange={(event)=>setUsername(event.target.value)}
                        name="username"
                        value={username}
                        type="text"
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        onChange={(event)=>setPassword(event.target.value)}
                        name="password"
                        value={password}
                        type="password"
                    ></Input>
                </FormGroup>
                <Button type="submit">Button</Button>
            </Form>
        </div>
    )
}

export default Login;