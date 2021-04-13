import  React, { useState, useEffect, useRef } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

// import { useAuth } from "../contexts/AuthContext"

function LoginTest(props) {

    const [userLogin, setUserLogin] = useState(
        { email: '', password: '' }
    );

    //when form fields take user input. set the input to userLogin
    const handleChange = (event) => {
        setUserLogin({...userLogin, [event.target.name]: event.target.value})
    }
   

    const handleSubmit = (event) => {
      event.preventDefault()
        axios({
          method: 'POST',
          url: '/api/users/login',
          data: userLogin
        })
        .then((response)=>
        console.log("RESPONSE",response.data.firstname)
        ) 
        .catch((err) => console.log(err))
    }

// if object is populated, login is successful, redirect to
// userAuthenticated(true)
// if object is empty, send alert to user that login failed. use msg from response for password



  return (
    <div className="contact">
      <div class="container">
        <h1>Login Page</h1>
      </div>

<Card>
  <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={handleChange} value={userLogin.email} name="email" required />
      </Form.Group>

      <Form.Group id="password">
        <Form.Label>Password</Form.Label> 
        <Form.Control type="password" onChange={handleChange} value={userLogin.password} name="password" required />
      </Form.Group>

    <Form.Text className="text-muted">
      Don't have an account? 
      <a href="signup">Register here!</a>
    </Form.Text>

    <Button type="submit">
      Log in 
    </Button>

    </Form>

    <h1>Logged in as: {}</h1>

  </Card.Body>
</Card>
    </div>
  );
}

export default LoginTest;