import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">ON THE TEE</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        
                    </NavItem>
                </Nav>
            </Navbar>
            
        </header>
    )
}

export default Header;