import  React, { useState, useRef } from "react";
import { Form, Button, Card, Alert, ButtonGroup } from 'react-bootstrap';
// import { useAuth } from "../contexts/AuthContext"

function SignUp(props) {


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()


  return (
    <div className="contact">
      <div class="container">
        <h1>Register</h1>
    </div>

<Card>
  <Card.Body>


    <ButtonGroup>
      <Button variant="secondary">Renter</Button>
      <Button variant="secondary">Owner</Button>
    </ButtonGroup>

    <Form>
      <Form.Group id="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group id="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>

      <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={emailRef} required />
      </Form.Group>

      <Form.Group id="password">
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" ref={passwordRef} required />
      </Form.Group>

      <Form.Group id="password-confirm">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} required />
      </Form.Group>
    </Form>

    <Form.Text className="text-muted">
      Already have an account? 
      <a href="login">Login here!</a>
    </Form.Text>

    <Button type="submit">
      Log in 
    </Button>

  </Card.Body>
</Card>
    </div>
  );
}

export default SignUp;