import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Register from '../components/Register';
import Login from '../components/Login';

const Auth=(props)=>{
    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Register updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;