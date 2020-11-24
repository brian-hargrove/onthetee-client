import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";

const AUTH = {
  isAuthenticated: false,
};

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setSessionToken(localStorage.getItem("token"));
      AUTH.isAuthenticated=true;
    }
  }, [sessionToken]);

  const updateToken = (newToken)=> {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearToken=()=>{
    localStorage.clear();
    setSessionToken("");
    AUTH.isAuthenticated=false;
  };

  return (
    <Router>
      <Navbar updateToken={updateToken}
      logout={clearToken}
      isLoggedIn={!!sessionToken}
      />
      <Switch>
        <Route path="/login">
          <LoginPage updateToken={updateToken} />
        </Route>
        <PrivateRoute path="">

        </PrivateRoute>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}



export default App;
