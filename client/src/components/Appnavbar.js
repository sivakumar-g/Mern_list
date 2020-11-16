import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Appnavbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark>   
        <NavbarBrand href="/" className="mr-auto">Rapid AI</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sivakumar-g">SourceCode</NavLink>
            </NavItem>
          </Nav>  
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Appnavbar;