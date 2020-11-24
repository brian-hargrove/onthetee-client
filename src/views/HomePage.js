import React from 'react';
import { Container } from 'reactstrap';
import { link } from 'react-router-dom';
import "../styles/HomePage.css";

const HomePage = () =>{
    return (
        <Container>
        <div id="landingTitle">
            <h1 className="title">On The Tee</h1>
        </div>
        </Container>
    );
};

export default HomePage;