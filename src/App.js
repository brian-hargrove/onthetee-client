import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Dashboard from "./components/Dashboard";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() { 
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path={"/"} 
            render = {props => (
          <Home {...props}  loggedInStatus={this.state.loggedInStatus} />
          )} />
          <Route 
            exact 
            path={"/dashboard"} 
            render = {props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
          )} />
          
        </Switch>
        </BrowserRouter>
        
      </div>
      
      );
  }
}
 
export default App;




























// import React, {useState,useEffect} from "react";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./views/HomePage";
// import Login from "./components/Login";
// import Footer from "./components/Footer";
// import UserInfo from "./components/UserInfo";
// const AUTH = {isAuthenticated: false};

// function App() {
//   const [sessionToken, setSessionToken]=useState("");

//   useEffect(()=>{
//     if(localStorage.getItem("token")) {
//       setSessionToken(localStorage.getItem("token"));
//       AUTH.isAuthenticated=true;
//     }    
//   },[sessionToken]);
//   const updateToken = (newToken)=>{
//     localStorage.setItem("token",newToken);
//     setSessionToken(newToken);
//     console.log(sessionToken);
//   };
//   const clearToken=()=>{
//     localStorage.clear();
//     setSessionToken("");
//     AUTH.isAuthenticated=false;
//   };

//   return(
//     <Router>
     
//       <Navbar
//       updateToken={updateToken}
//       logout={clearToken}
//       isLoggedIn={!!sessionToken}
//     />
//     <Switch>
//       <Route to path="/login">
//         <Login updateToken={updateToken} />
//       </Route>
           
//       <Route path="/">
//         <HomePage />
//       </Route>
//     </Switch>
//     <Footer />
  
//     </Router>
    
//   )
// }

// export default App;
