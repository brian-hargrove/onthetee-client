import React, { Component } from 'react';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';
import '../styles/Home.css';


class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        
    }
    
    handleSuccessfulAuth(data) {
        // this.props.handleLogin(data);
        this.props.history.push("/clubhouse");
    }

    

    render() { 
        return ( 
            <div id="splashPage">
                <h1 id="homeTitle">Welcome to On The Tee</h1>
                <p>This is a website designed for the golfer, Amatuer to Pro, Young to Old, <br/>to store their rounds.  We will be adding exciting new features in the future, <br/>so please come back. But for now, please register so you can enter the Clubhouse. <br/>Or Login if your have already created an account. </p>
                {/* <Register handleSuccessfulAuth={this.handleSuccessfulAuth} id="registerForm"/> */}
                {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
            <div className="footer">
             <Footer className="footer"/>
            </div>    
            </div>
            
         );
    }
}
 
export default Home;
























// import React from "react";
// import { Container } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../styles/HomePage.css";

// const HomePage = () => {
//     return (
//         <Container>
//             <div id="landingPage">
//                 <h1 className="landingTitle">NOW</h1>
//                 <p className="landingTitleProper">On The Tee</p>
//             </div>
//         </Container>
//     );
// };


// export default HomePage;




























// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return(
//         <div className="main">
//             <div className="mainDiv">
//                 <h1>Welcome to, </h1>
//                 <h2> NOW, On The Tee</h2>
//             </div>
//         </div>
//     );
// }

// export default Home;