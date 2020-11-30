import React, {useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import Login from "./components/Login"
import Footer from "./components/Footer"
const AUTH = {isAuthenticated: false};

function App() {
  const [sessionToken, setSessionToken]=useState("");

  useEffect(()=>{
    if(localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
      AUTH.isAuthenticated=true;
    }    
  },[sessionToken]);
  const updateToken = (newToken)=>{
    localStorage.setItem("token",newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken=()=>{
    localStorage.clear();
    setSessionToken("");
    AUTH.isAuthenticated=false;
  };

  return(
    <Router>
      <Navbar
      updateToken={updateToken}
      logout={clearToken}
      isLoggedIn={!!sessionToken}
    />
    <Switch>
      <Route path="/login">
        <Login updateToken={updateToken} />
      </Route>
      
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer />
    </Router>
    
  )
}

export default App;




// import React, {useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Sitebar from './components/Navbar';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Auth from './auth/Auth';
// import CourseList from './views/CourseList';


// const App = ()=>{

// const [sessionToken, setSessionToken] = useState("");

// useEffect(()=>{
//   if(localStorage.getItem('token')){
//     setSessionToken(localStorage.getItem('token'));
//   }
// }, [])

// const updateToken = (newToken)=>{
//   localStorage.setItem('token',newToken);
//   setSessionToken(newToken);
//   console.log(sessionToken);
// }

// const clearToken=()=>{
//   localStorage.clear();
//   setSessionToken('');
// }

// const protectedViews = () => {
//   return(sessionToken === localStorage.getItem('token') ? <CourseList token={sessionToken}/>
//   :<Auth updateToken={updateToken}/>)
// }
//   return(
//     <div>
//       <Header />
     
//         <Sitebar clearToken={clearToken}/>
//         {protectedViews()}
        
     
//       <Footer />
//     </div>
//   )
// }


// export default App;