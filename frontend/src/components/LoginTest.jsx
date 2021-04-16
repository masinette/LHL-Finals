import  React, { useState, useEffect, useRef, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { UserContext } from '../UserContext'

function LoginTest(props) {

    const [userLogin, setUserLogin] = useState(
      { email: '', password: '' }
    );

    const [userInfo, setUserInfo] = useState("")
    const history = useHistory();

    const {user, setUser} = useContext(UserContext)


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
        setUserInfo(response.data)
        // console.log("RESPONSE",response.data)
        ) 
        .catch((err) => console.log(err))
    }

// if object is populated, login is successful, redirect to
const userAuthenticated = (userInfo) =>{
  if (!userInfo.firstname) {
    //alert user to login
    console.log(userInfo.msg)
    return false;
  } else {
    //redirect to new page
    console.log(userInfo)
    setUser(userInfo)
    history.push(`/messages/${userInfo.id}`)
    // console.log("USERINFO", user[3])
    return true;
  }
}


userAuthenticated(userInfo)



console.log("MSG",userInfo)
console.log("AUTH",userAuthenticated(userInfo))
// userAuthenticated(true)
// if object is empty, send alert to user that login failed. use msg from response for password

  return (
    <div className="contact">
      <div className="container">
        <h1>Login Page</h1>
      </div>

<Card>
  <Card.Body>
    <Form onSubmit={handleSubmit} >
    {/* <Form onSubmit={(event) =>handleSubmitUser(userLogin)}   > */}

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

    {/* <h1>Logged in as: {user}</h1> */}

  </Card.Body>
</Card>
    </div>
  );
}

export default LoginTest;