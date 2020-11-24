import React, { useState, useEffect} from 'react';
import "../styles/Navbar.css"
import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { useHistory} from 'react-router-dom';

import RegistrationForm from "./RegistrationForm"
import LoginPage from "../views/LoginPage";

const Sitebar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    // const [showRegister, setShowRegister] = useState(false);
    // const [hasScrolled, setHasScrolled] = useState(false);
.

    // useEffect(() =>{
    //     document.addEventListener("scroll",handleScroll);
    //     return () => {
    //         document.removeEventlistener("scroll",handleScroll);
    //     };
    // },[]);

    // const handleScroll = (event)=>{
    //     if(document.documentElement.scrollTop && !hasScrolled){
    //         setHasScrolled(true);
    //     }else if (!document.documentElement.scrollTop){
    //         setHasScrolled(false);
        // }
    // };

    const toggleNavbar=()=>setCollapsed(!collapsed);

    let history = useHistory();
    const handleLogout = ()=> {
        props.logout();
        history.push("/");
    };

    return (
        <div id="navbar" className={classNames({
            "is-expanded": !collapsed,
            // "has-scrolled": hasScrolled,
        })}>
            <Navbar color="faded" light expand="md">
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        {!props.isLoggenIn ? (
                            <>
                            <NavItem>
                                <NavLink href="/search">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Register">Register</NavLink>
                            </NavItem>
                            </>
                        ):null}
                        {props.isLoggedIn ? (
                            <>
                            <NavItem>
                                <NavLink href="/courses">Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/scorecard">Scorecards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={handleLogout}>Logout</NavLink>
                            </NavItem>
                            </>
                        ): null}
                    </Nav>
                </Collapse>
            </Navbar>
            <RegistrationForm
                updateToken={props.updateToken}
                        // open={showRegister}
                        // close={closeRegister}
                        />
        </div>
    );
};

export default Sitebar;

function classNames(classes) {
    return Object.entries(classes)
    .filter(([key,value])=>value)
    .map(([key,value])=>key)
    .join(" ");
}