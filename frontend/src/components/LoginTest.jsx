import  React, { useState, useEffect, useRef } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

// import { useAuth } from "../contexts/AuthContext"

function LoginTest() {

    const [userLogin, setUserLogin] = useState(
        { email: '', password: '' }
    );

    const [userFirstName, setUserFirstName] = useState("")


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
        setUserFirstName(response.data.firstname)
        // console.log("RESPONSE",response.data)
        ) 
        .catch((err) => console.log(err))
    }

// if object is populated, login is successful, redirect to
const userAuthenticated = (userFirstName) =>{
  if (!userFirstName) {
    //alert user to login
    console.log("prompt to try login again")
  } else {
    //redirect to new page
    console.log("redirect")
  }

}
userAuthenticated(userFirstName)
// userAuthenticated(true)
// if object is empty, send alert to user that login failed. use msg from response for password


const onSubmit = (e) => {
    //console.log(value)
    e.preventDefault();
    window.location.assign( "/about" )
  }



  return (
    <div className="contact">
      <div className="container">
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

    <h1>Logged in as: {userFirstName}</h1>

  </Card.Body>
</Card>
    </div>
  );
}

export default LoginTest;