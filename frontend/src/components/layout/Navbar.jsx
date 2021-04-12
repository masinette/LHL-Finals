import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function TopNav(props) {

return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home" className= 'logo'>LivTogether</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">My Messages</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">My Listings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>


      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}


      <Button variant="outline-success" href="/login">Login/Register</Button>
      {/* <Button variant="outline-danger" href="/logout">Logout</Button> */}


    </Navbar.Collapse>
  </Navbar>
  )
}