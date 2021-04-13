import  React, { useState, useEffect, useRef } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

// import { useAuth } from "../contexts/AuthContext"

function LoginTest(props) {

  const [email, setEmail] = useState(props.email || "Not logged in");
  const [password, setPassword] = useState(props.password || "");
  const [error, setError] = useState("");


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  useEffect(() => {
    
    axios({
      method: 'POST',
      url: '/api/users/login'
    })
    .then((response)=>
    console.log(response)) 
    .catch((err) => console.log(err))
  }, []);


    const [userLogin, setUserLogin] = useState(
        { email: '', password: '' }
    );

    const handleChange = (event) => {
        setUserLogin({...userLogin, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    




  return (
    <div className="contact">
      <div class="container">
        <h1>Login Page</h1>
      </div>

<Card>
  <Card.Body>
    <Form>
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
      Don't have an account? 
      <a href="signup">Register here!</a>
    </Form.Text>

    <Button type="submit">
      Log in 
    </Button>


    <h1>Logged in as: {props.email}</h1>

      {/* <Form onSubmit={event => event.preventDefault()}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          email="" 
          value={email}
          onChange={event => setEmail(event.target.value)}
          />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value="password"
          onChange={event => setPassword(event.target.value)}

          />
        </Form.Group>

          <Form.Text className="text-muted">
            Don't have an account? 
            <a href="register">Register here!</a>
          </Form.Text>

        <Button variant="primary" type="submit" onClick={(event) =>validate()}>
          Sign in
        </Button>
      </Form> */}
  </Card.Body>
</Card>
    </div>
  );
}

export default LoginTest;