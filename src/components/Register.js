import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import '../styles/Register.css';

const validateUsername = RegExp("((?=.*?[0-9]).*|(?=.*?[#?!@$%^&*-]).*)");


const Register = (props)=> {
    const [username, setUsername] = useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [passwordConfirm, setPasswordConfirm]=useState("");
    let history = useHistory();

    const resetForm = ()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    const handleSubmit=(event)=>{
        event.preventDefault();

        try{
            if(!username || !email || !password) throw "Please fill out all fields";
            if(password.length<5) throw "Password must be 5 or more characters";
            if(username.length < 4 || !validateUsername.test(username)) throw "Username must be 4 or more characters and include 1 number and/or special character";
            if(password !== passwordConfirm) throw "Passwords do not match";

            fetch(`http://localhost:3000/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({user: {username, email, password}}),
            })
            .then((response)=>response.json())
            .then((data)=>{
                props.updateToken(data.sessionToken);
                props.close();
                resetForm();
                history.push("/course");
            })
            .catch((error)=>console.log(error));
        }catch(error){
            alert(error);
        }
    };
    return (
        <div id="register" role="navigation">
            <Modal isOpen={props.open} id="registerModal">
                <ModalHeader className="modalHeader">
                    <div id="mainTitle">Welcome to On The Tee</div>
                    <Button className="closeModal" onClick={props.close}>
                        <span>x</span>
                    </Button>
                </ModalHeader>
                <ModalBody id="modalBody">
                    <div id="modalImage"></div>
                    <div id="modalForm">
                        <Form id="registerForm" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="registerUsername">Username</Label>
                                <Input
                                    onChange={(event) => setUsername(event.target.value)}
                                    value={username}
                                    id="registerUsername"
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
                                    onChange={(event)=>setPasswordConfirm(event.target.value)}
                                    value={passwordConfirm}
                                    id="passwordConfirm"
                                    type="password"
                                ></Input>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter className="modalFooter">
                    <Button form="registerForm" id="modalSubmitButton" type="submit">
                        Create Account
                    </Button>{" "}
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Register;























// import React, {useState} from 'react';
// import { Button, FormGroup, Input, Form, Label } from 'reactstrap';

// const Register = (props)=>{
//     const [username, setUsername]=useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordConfirm, setPasswordConfirm] = useState("");

//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         fetch("http://localhost:3000/user/register", {
//             method: 'POST',
//             body: JSON.stringify({user:{username: username, email:email, password:password}}),
//             headers: new Headers({
//                 'Content-Type':'application/json'
//             })
//         }).then(
//             (response)=>response.json()
//         ).then((data)=>{
//             props.updateToken(data.sessionToken)
//         })
//     }
//     return(
//         <div>
//             <h1>Register</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username">Username</Label>
//                     <Input 
//                         onChange={(event)=>setUsername(event.target.value)}
//                         name="username"
//                         value={username}
//                     ></Input>                
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlfor="email">Email</Label>
//                     <Input
//                         onChange={(event)=>setEmail(event.target.value)}
//                         name="email"
//                         value={email}
//                         type="email"
//                     ></Input>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input
//                         onChange={(event)=>setPassword(event.target.value)}
//                         name="password"
//                         value={password}
//                         type="password"
//                     ></Input>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="passwordConfirm">Confirm Password</Label>
//                     <Input
//                         onChange={(event)=>setPasswordConfirm(event.target.value)}
//                         name="passwordConfirm"
//                         value={passwordConfirm}
//                         type="password"
//                     ></Input>
//                 </FormGroup>
//                 <Button type="submit">Register</Button>
//             </Form>
//         </div>
//     );
// }


// export default Register;