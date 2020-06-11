import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className="navbar">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">ACNH Hints and Tips</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav>
                <NavItem>
                <NavLink href="/components/Profile/profile.js">Profile</NavLink>
                </NavItem>
    
                <NavItem>
                <NavLink href="/components/posts/postScreen.js">Feed</NavLink>
                </NavItem>
    
                <NavItem>
                  <NavLink href="/components/titleScreen.js">log Out</NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink href="https://github.com/alison-rootes10">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        )
    }
export default Navbar;