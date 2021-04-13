import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SearchInput from "./searchInput";

function NavigationTest(props) {
  return (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home" className= 'logo'>LivTogether</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item href="users">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="messages">My Messages</NavDropdown.Item>
          <NavDropdown.Item href="rooms">My Listings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
{/*       <Form inline>
        <FormControl type="text" placeholder="Enter a city" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>

      </Form> */}
      <NavItem>Hello
      <SearchInput
          suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
        />
        </NavItem>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      <Button variant="outline-success" href="login">Login/Register</Button>
      {/* <Button variant="outline-danger" href="/logout">Logout</Button> */}
    </Navbar.Collapse>
  </Navbar>


  );
}

export default withRouter(NavigationTest);