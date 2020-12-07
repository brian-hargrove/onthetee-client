import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import App from '../App';
import MenuItems from './MenuItems';
import '../styles/Navbar.css';
import { Button } from './Button';

class Sitebar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked })
  }

  handleLogout = ()=>{
    
    localStorage.clear();
    window.location.href='/';
    
    
  };


  render() { 
    return (
      <div className="NavbarItems">
      <nav ></nav>
        <h1 className="navbar-logo">On The Tee  <i className="fas fa-golf-ball"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>


        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index)=>{
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
         
          
        </ul>
        <Button onClick={this.handleLogout}>Logout</Button>
        </div>
      );
  }
}
 
export default Sitebar;





// import React, { Component } from 'react';
// import {Nav, NavItem, NavLink} from 'reactstrap';

// class Sitebar extends Component {
    
//     state = {  }

    
//     render() { 
//         return (
//             <div>
//               <Nav pills>
//                 <NavItem>
//                   <NavLink href="/" active>Home</NavLink>
//                 </NavItem>
                
//                 <NavItem>
//                   <NavLink href="/enterscore">Enter Round</NavLink>
//                 </NavItem>
//                 <NavItem>
//                   <NavLink href="/clubhouse">Clubhouse</NavLink>
//                 </NavItem>
               
//               </Nav>
//             </div>
//           );
//     }
// }
 
// export default Sitebar;

























// import React, { useState, useEffect } from "react";
// import "../styles/Navbar.css"
// import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
// import { NavLink, useHistory } from "react-router-dom";
// import Register from "./Register";
// import Login from "./Login";

// const Sitebar = (props) => {
//     const [collapsed, setCollapsed] = useState(true);
//     const [showRegister, setShowRegister] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);
//     const [hasScrolled, setHasScrolled] = useState(false);

//     useEffect(()=>{
//         document.addEventListener("scroll",handleScroll);
//         return()=>{
//             document.removeEventListener("scroll",handleScroll);
//         };
//     },[]);

//     const handleScroll = (event) =>{
//         if(document.documentElement.scrollTop && !hasScrolled){
//             setHasScrolled(true);
//         }else if (!document.documentElement.scrollTop){
//             setHasScrolled(false);
//         }
//     };
//     const toggleNavbar = ()=>setCollapsed(!collapsed);
    
//     let history = useHistory();
//     const handleLogout = () => {
//         props.logout();
//         history.push("/");
//     };

//     const openRegister = () => setShowRegister(true);
//     const closeRegister = () => setShowRegister(false);
//     const openLogin = () => setShowLogin(true);
//     const closeLogin = () => setShowLogin(false);

//     return(
//         <div
//         id="navbar"
//         className=
//         {
//             classNames({
//             "is-expanded": !collapsed,
//             "has-scrolled": hasScrolled,
//         })}
//         >
//             <Navbar color="faded" light expand="md">
//                 <NavbarBrand to path="/" className="mr-auto"></NavbarBrand>
//                 <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//                 <Collapse isOpen={!collapsed} navbar>
//                     <Nav navbar>
//                         <NavItem>
//                             <NavLink to path="/">Home</NavLink>
//                         </NavItem>
//                         {!props.isLoggedIn ? (
//                             <>
//                             <NavItem>
//                                 <NavLink to path="/course">Golf Courses</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <Button onClick={openLogin}>Login</Button>
//                             </NavItem>
//                             <NavItem>
//                                 <Button onClick={openRegister}>Register</Button>
//                             </NavItem>
//                             </>
//                         ): null}
//                         {props.isLoggedIn ? (
//                             <>
//                             <NavItem>
//                                 <NavLink to path="/scoreCard">Scorecard</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink to path="/course">Golf Courses</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <Button onClick={handleLogout}>Logout</Button>
//                             </NavItem>
//                             </>
//                         ) : null}
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//             <Login
//                 updateToken={props.updateToken}
//                 open={showLogin}
//                 close={closeLogin}
//             />                    
//             <Register
//                 updateToken={props.updateToken}
//                 open={showRegister}
//                 close={closeRegister}
//             />
//         </div>
//     );
// };

// export default Sitebar;

// function classNames(classes) {
//     return Object.entries(classes)
//     .filter(([key,value])=>value)
//     .map(([key,value])=>key)
//     .join(" ");
// }

























// import React, {useState} from 'react';
// // import {Route, Link, Switch } from 'react-router-dom';
// import { Collapse, NavbarToggler, Navbar, Nav, NavbarBrand,NavItem, Button } from 'reactstrap';
// // import Home from './Home';
// // import SearchForm from './SearchForm';
// // import Login from './Login';
// // import Register from './Register';

// const Sitebar = (props)=>{
//     const [isOpen, setIsOpen]=useState(false);

//     const toggle =()=>{
//         let newIsOpen=!isOpen;
//         setIsOpen(newIsOpen);
//     }


//     return(
//         <Navbar color="faded" light expand="md">
//             <NavbarBrand to path="/">On The Tee</NavbarBrand>
//             <NavbarToggler onClick={toggle}/>
//             <Collapse isOpen={isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                     <NavItem>
//                         <Button onClick={props.clickLogout}>Logout</Button>
//                     </NavItem>
//                 </Nav>
//             </Collapse>
//         </Navbar>
//         // <div className="sitebar">
//         //     <div className="sitebar-list-styling">
//         //         <ul className="sitebar-list list-unstyled">
//         //             <li><Link to="/">Home</Link></li>
//         //             <li><Link to="/searchForm">Search</Link></li>
//         //             <li><Link to="/login">Login</Link></li>
//         //             <li><Link to="/register">Register</Link></li>
//         //         </ul>
//         //     </div>
//         //     <div className="sitebar-route">
//         //         <Switch>
//         //             <Route exact path="/home"><Home /></Route>
//         //             <Route exact path="/searchForm"><SearchForm /></Route>
//         //             {/* <Route exact path="/login"><Login /></Route>
//         //             <Route exact path="/register"><Register /></Route> */}
//         //         </Switch>
//         //     </div>
//         // </div>
//     );
// };


// export default Sitebar;