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
                
                {/* <Register handleSuccessfulAuth={this.handleSuccessfulAuth} id="registerForm"/> */}
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            <div className="footer">
             <Footer />
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