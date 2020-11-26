import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sitebar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Auth from './auth/Auth'


const App = ()=>{

const [sessionToken, setSessionToken] = useState("");

useEffect(()=>{
  if(localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken)=>{
  localStorage.setItem('token',newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken=()=>{
  localStorage.clear();
  setSessionToken('');
}
  return(
    <div>
      <Header />
      <Router>
        <Sitebar clickLogout={clearToken}/>
        <Auth updateToken={updateToken}/>
      </Router>
      <Footer />
    </div>
  )
}


export default App;