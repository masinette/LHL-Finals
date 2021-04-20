import  React, { useState, useRef, useEffect } from "react";
import { Form, Button, Card, Alert, ButtonGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
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

  const InterestButton = styled.button`
    padding: 10px;
  `
  const interestsLists = interestsList.map((interest) => (
    <Button variant="outline-info" className="interestButton">{interest.name}</Button>
  ));

    const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Feel free to add a friend to your registration.
    </Tooltip>
  );


// -----------------------------------------STYLING------------------------------------------//
  const SignUpDiv = styled.div`
    display:flex;
    margin:30px;
  `
  const RightCol = styled.div`
    border: 1px solid grey;
    border-radius: 25px;
    width: 70%;
    margin: 30px;
    padding: 30px;
    box-shadow: 0 0 5px #0168D9;
    background-color: white;
  `
  const RegisterWrapper = styled.div`
    width: 30%;
    border: solid 1px grey;
    border-radius: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 5px #0168D9;
    background-color: white;
  `
  const SurveyWrapper = styled.div`
    // width: 70%;
    // margin-left: 30px;
  `
  const InterestsButtons = styled.div`
    width: 80%;
    padding-bottom: 20px;
    
  `
  const CitiesButtons = styled.div`
    padding-bottom: 25px;
  `
  const Levels = styled.div`
    // display:flex;
    justify-content:space-around;
    margin-bottom: 10px;
    // width:300px;
  `

// -----------------------------------------STYLING------------------------------------------//


  return (
    <div className="contact">
      <div className="registration-title-container">
        <h1>Registration</h1>
    </div>

  <SignUpDiv>

    <RegisterWrapper>
      <div className="registerWrapper">
        <Card.Body>
          <ButtonGroup className="owner-roommate-radio-buttons">
            <Button variant="info">Rommate</Button>
            <Button variant="primary">Owner</Button>
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

              <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Form.Group id="email">
                <Form.Label>Helper Email (Optional)</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
            </OverlayTrigger>
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
            <Button className="city-name" variant="outline-primary">Toronto</Button>
            <Button className="city-name" variant="outline-primary">Vancouver</Button>
            <Button className="city-name" variant="outline-primary">Calgary</Button>
            <Button className="city-name" variant="outline-primary">Montreal</Button>
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
          <div>
            <p> Here at LivTogether, we have a level system. Fostering friendships is always the goal. 
            Please read the options below, and select which level of involvement with which you feel most comfortable. Please note
            that you may change your selection in the future if you match with a companion you'd like to adjust for.
            Each level increases in time commitment.</p>
          </div>
            <div className="level-buttons">
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
                        <Card.Title>Level Three</Card.Title>
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

    </div>

  );
}

export default SignUp;