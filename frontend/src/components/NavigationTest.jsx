import  React, { useState, useEffect, useRef, useContext } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SearchInput from "./searchInput";
import { UserContext } from '../UserContext'

function NavigationTest(props) {

  // TypeError: Cannot destructure property 'user' of 'Object(...)(...)' as it is null.
  const {user, setUser} = useContext(UserContext)

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault()
    setUser("empty")
    history.push("/")
  }  

  return (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/" className= 'logo'>LivTogether</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item><Nav.Link as={Link} to="/users">My Profile</Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link as={Link} to="/messages">My Messages</Nav.Link></NavDropdown.Item>
          <NavDropdown.Item><Nav.Link as={Link} to="/rooms">My Listings</Nav.Link></NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      
      {user !== "empty" && <p>Logged in as: {user[1]}</p>}

      <SearchInput placeholder="Enter a city" name="search"/>

      {user === "empty" && <Button variant="outline-success" href="login">Login/Register</Button>}
      {user !== "empty" && <Button onClick={handleSubmit} variant="outline-danger" href="/logout">Logout</Button>}
    </Navbar.Collapse>
  </Navbar>


  );
}

export default withRouter(NavigationTest);