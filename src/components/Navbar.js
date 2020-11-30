import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css"
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import Register from "./Register";

const Sitebar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(()=>{
        document.addEventListener("scroll",handleScroll);
        return()=>{
            document.removeEventListener("scroll",handleScroll);
        };
    },[]);

    const handleScroll = (event) =>{
        if(document.documentElement.scrollTop && !hasScrolled){
            setHasScrolled(true);
        }else if (!document.documentElement.scrollTop){
            setHasScrolled(false);
        }
    };
    const toggleNavbar = ()=>setCollapsed(!collapsed);
    
    let history = useHistory();
    const handleLogout = () => {
        props.logout();
        history.push("/");
    };

    const openRegister = () => setShowRegister(true);
    const closeRegister = () => setShowRegister(false);

    return(
        <div
        id="navbar"
        // className=
        // {
        //     classNames({
        //     "is-expanded": !collapsed,
        //     "has-scrolled": hasScrolled,
        // })}
        >
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        {!props.isLoggedIn ? (
                            <>
                            <NavItem>
                                <NavLink href="/course">Golf Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={openRegister}>Register</Button>
                            </NavItem>
                            </>
                        ): null}
                        {props.isLoggedIn ? (
                            <>
                            <NavItem>
                                <NavLink href="/scoreCard">Scorecard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/course">Golf Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button onClick={handleLogout}>Logout</Button>
                            </NavItem>
                            </>
                        ) : null}
                    </Nav>
                </Collapse>
            </Navbar>
            <Register
                updateToken={props.updateToken}
                open={showRegister}
                close={closeRegister}
            />
        </div>
    );
};

export default Sitebar;

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
//             <NavbarBrand href="/">On The Tee</NavbarBrand>
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