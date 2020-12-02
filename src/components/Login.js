import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../styles/LoginPage.css";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(process.env.REACT_APP_URL + "/user/login",{
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
                alert("Login not valid, please try again");
            }else {
                props.updateToken(data.sessionToken);
                history.push("/userinfo");
            }
        });
    };console.log(username, password);


    // return (
    //             <div id="divMain">
    //                 <div id="loginForm">
    //                     <h1>Login</h1>
    //                     <Form id="formBody" onSubmit={handleSubmit}>
    //                         <FormGroup>
    //                             <Label htmlFor="username">Username</Label>
    //                             <Input
    //                                 onChange={(event)=>setUsername(event.target.value)}
    //                                 name="username"
    //                                 value={username}
    //                             />
    //                         </FormGroup>
    //                         <FormGroup>
    //                             <Label htmlFor="password">Password</Label>
    //                             <Input
    //                                 onChange={(event)=>setPassword(event.target.value)}
    //                                 name="password"
    //                                 type="password"
    //                                 value={password}
    //                             />
    //                         </FormGroup>
    //                         <Button id="loginButton" type="submit">Login</Button>
    //                     </Form>
    //                 </div>
    //             </div>
    //         );
    //     };
    //     export default Login;
       
       
       
       
       
       
        return (
            <div id="login">
                <Modal isOpen={props.open} id="loginModal">
                    <ModalHeader className="modalLoginHeader">
                        <div id="mainLoginTitle">Login</div>
                        <Button className="closeModal" onClick={props.close}>
                            <span>x</span>
                        </Button>
                    </ModalHeader>
                    <ModalBody id="modalLoginBody">
                        <div id="modalLoginBody"></div>
                        <div id="modalLoginForm">
                            <Form id="loginForm" onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="loginName">Username</Label>
                                    <Input
                                        onChange={(event)=>setUsername(event.target.value)}
                                        value={username}
                                        id="loginUsername"
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="loginPassword">Password</Label>
                                    <Input
                                        onChange={(event)=>setPassword(event.target.value)}
                                        value={password}
                                        id="password"
                                        type="password"
                                    ></Input>
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter className="modalLoginFooter">
                        <Button form="loginForm" id="modalLoginButton" type="submit">
                            Login to Account
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
        };
            
export default Login;