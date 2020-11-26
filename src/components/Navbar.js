import React, {useState} from 'react';
// import {Route, Link, Switch } from 'react-router-dom';
import { Collapse, NavbarToggler, Navbar, Nav, NavbarBrand,NavItem, Button } from 'reactstrap';
// import Home from './Home';
// import SearchForm from './SearchForm';
// import Login from './Login';
// import Register from './Register';

const Sitebar = ()=>{
    const [isOpen, setIsOpen]=useState(false);

    const toggle =()=>{
        let newIsOpen=!isOpen;
        setIsOpen(newIsOpen);
    }


    return(
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">On The Tee</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={PaymentResponse.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        // <div className="sitebar">
        //     <div className="sitebar-list-styling">
        //         <ul className="sitebar-list list-unstyled">
        //             <li><Link to="/">Home</Link></li>
        //             <li><Link to="/searchForm">Search</Link></li>
        //             <li><Link to="/login">Login</Link></li>
        //             <li><Link to="/register">Register</Link></li>
        //         </ul>
        //     </div>
        //     <div className="sitebar-route">
        //         <Switch>
        //             <Route exact path="/home"><Home /></Route>
        //             <Route exact path="/searchForm"><SearchForm /></Route>
        //             {/* <Route exact path="/login"><Login /></Route>
        //             <Route exact path="/register"><Register /></Route> */}
        //         </Switch>
        //     </div>
        // </div>
    );
};


export default Sitebar;