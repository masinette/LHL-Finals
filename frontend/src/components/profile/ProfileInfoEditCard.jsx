import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.scss"


export default function ProfileInfoEditCard(props) {
  console.log(props.user);

  const [userData, setUserData] = useState(props.user)

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setUserData({ ...userData,
      [target.name]: value
    })
  }

  const handleOptionChange = (e) => {
    const target = e.target;
    const value = target.value;
    setUserData({
      ...userData,
      [target.name]: value
    })
  }

  const editPath = `/api/users/${props.user.id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updated userData: ", userData)
    console.log(props.user)
    axios({
      method: "PUT",
      url: editPath,
      data: userData
    })
    .then(res => {
      console.log(res);
      props.setUser({
        ...userData
      })
      props.onSubmit();
      
    })
    .catch(err => console.error("update error: ", err))
  }

  console.log(props.user);

  return (
    <>
      <div className="profile__card" >
        <Form onSubmit={handleSubmit} >
          <Row>
          <div className="profile__card-label col-4" >First Name:</div>
            <Col>
              <Form.Control 
                type="text"
                name="firstname"
                value={userData.firstname}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Last Name:</div>
            <Col>
              <Form.Control 
                type="text"
                name="lastname"
                value={userData.lastname}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Description:</div>
            <Col>
            <Form.Control 
                as="textarea"
                name="description"
                rows={3}
                value={userData.description}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Address:</div>
            <Col>
              <Form.Control 
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Level:</div>
          </Row>

            <Col>
              <Form.Check 
                type="radio"
                label="Level 1: Light Cleaning, Grocery Shopping, Errands - 5hrs/week"
                value={1}
                onChange={handleOptionChange}
                checked={userData.level == 1}
                name="level"
              />
              <Form.Check 
                type="radio"
                label="Level 2: Level 1 + Yard Work, Snow removal - 10hrs/week"
                value={2}
                onChange={handleOptionChange}
                checked={userData.level == 2}
                name="level"
              />
              <Form.Check 
                type="radio"
                label="Level 3: Level 2 + Transportation(appointments) - 15hrs/week"
                value={3}
                onChange={handleOptionChange}
                checked={userData.level == 3}
                name="level"
              />
            </Col>
          <Row className="btn-row">
            {/* <Col className="center"> */}
            {/* </Col> */}
            {/* <Col className="center"> */}
              <Button className="btn-danger btn-spacing" onClick={props.onCancel} >
                Cancel
              </Button>
              <Button className="btn-success btn-spacing" type="submit" >
                Save
              </Button>
            {/* </Col> */}
          </Row>
          
        </Form>
        
      </div>
    </>
  )
}