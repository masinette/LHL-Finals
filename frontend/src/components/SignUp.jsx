import  React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Alert, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import './SignUp.scss'

function SignUp(props) {


  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [interestsList, setInterestsList] = useState([])


  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/interests'
    })
    .then(({
      data
    }) => {
      console.log("INTERESTS",data);
      setInterestsList(data)
    })
    .catch((err) => console.log(err));
  }, []); 

  const InterestButton = styled.div`
    // padding: 10px;
  `
  const interestsLists = interestsList.map((interest) => (
    <Button variant="outline-info" className="interestButton">{interest.name}</Button>
  ));

// -----------------------------------------STYLING------------------------------------------//
  const SignUpDiv = styled.div`
    display:flex;
    margin:30px;

  `
  const RightCol = styled.div`
    border: 1px solid black;
    width: 70%;
    margin: 30px;
    padding: 30px;
  `
  const RegisterWrapper = styled.div`
    width: 30%;
  `
  const SurveyWrapper = styled.div`
    // width: 70%;
    // margin-left: 30px;
  `
  const InterestsButtons = styled.div`
    width: 80%;
    &.interestButton {
      margin: 10px;
    }
  `
  const CitiesButtons = styled.div`
  `
  const Levels = styled.div`
  display:flex;
  justify-content:space-around;
    // width:300px;
  `

// -----------------------------------------STYLING------------------------------------------//


  return (
    <div className="contact">
      <div className="container">
        <h1>Register</h1>
    </div>

<Card>
  <SignUpDiv>

    <RegisterWrapper>
      <div className="registerWrapper">
        <Card.Body>
          <ButtonGroup>
            <Button variant="info">Renter</Button>
            <Button variant="info">Owner</Button>
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

        </Card.Body>
      </div>
    </RegisterWrapper>

    <RightCol>
      <div className="rightSide">
        <SurveyWrapper>
          <div className="surveyWrapper">
            <Card.Body>
              <Form className="address-form">
                <h4>Home Address</h4>
                <Form.Group id="address">
                  <Form.Label>Street number</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group id="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>

                <Form.Group id="postal-code">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" ref={emailRef} required />
                </Form.Group>

                {/* <Form.Text className="text-muted">
                  Already have an account? 
                  <a href="login">Login here!</a>
                </Form.Text> */}

                {/* <Button type="submit">
                  Submit
                </Button> */}

              </Form>
            </Card.Body>
          </div>
        </SurveyWrapper>

        <CitiesButtons>
          <div className="citiesButtons">
            <h4>Choose a home city:</h4>
            <Button variant="outline-success">Toronto</Button>
            <Button variant="outline-success">Vancouver</Button>
            <Button variant="outline-success">Calgary</Button>
            <Button variant="outline-success">Montreal</Button>
          </div>
        </CitiesButtons>

        <InterestsButtons>
          <div className="interestsButtons">
            <h4>What are your interests?</h4>
            {interestsLists}
              <Form>
                <Form.Group id="firstName">
                  <Form.Label>Add another interest...</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Form>
          </div>
        </InterestsButtons>

        <h4>How can you help?</h4>
        <Levels>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                    <Card border="success">
                      <Card.Header>1</Card.Header>
                      <Card.Body >
                        <Card.Title>Level One </Card.Title>
                        <Card.Text >
                          <ul>
                            <li>Light cleaning</li>
                            <li>Grocery shopping</li>
                            <li>Running Errands</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                    <Card border="success">
                      <Card.Header>2</Card.Header>
                      <Card.Body >
                        <Card.Title>Level Two </Card.Title>
                        <Card.Text >
                          <ul>
                            <li>Yard maintenance</li>
                            <li>Shovelling snow</li>
                            <li>Deep cleaning</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                    <Card border="success">
                      <Card.Header>3</Card.Header>
                      <Card.Body >
                        <Card.Title>Level One </Card.Title>
                        <Card.Text >
                          <ul>
                            <li>House maintenance</li>
                            <li>Yard maintenance</li>
                            <li>Transportation</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </label>
              </div>
        </Levels>

          <Form.Text className="text-muted">
            Already have an account? 
            <a href="login">Login here!</a>
          </Form.Text>
          <Button type="submit">
            Submit
          </Button>
      </div>
    </RightCol>


  </SignUpDiv>
</Card>

    </div>

  );
}

export default SignUp;