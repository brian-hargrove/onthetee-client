import React, { Component } from 'react';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';


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
            <div>
                
                <Register handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Footer />
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