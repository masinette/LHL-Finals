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
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleCancel = () => {
    props.onCancel();
  }

  const editPath = `/api/users/${props.user.id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: editPath
    })
    .then(res => {

    })
  }

  console.log(props.user);

  return (
    <>
      <div className="profile__card" >
        <Form>
          <Row>
            <Col className="profile__card-label" >First Name:</Col>
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
            <Col className="profile__card-label" >Last Name:</Col>
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
            <Col className="profile__card-label" >Description:</Col>
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
            <Col className="profile__card-label" >Address:</Col>
            <Col>
              {userData.address}
            </Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Level:</Col>
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
          </Row>
          <Row>
            <Col>
              <Button className="btn-gradient" onClick={props.onSubmit} >
                Save
              </Button>
            </Col>
            <Col>
              <Button className="btn-gradient" onClick={handleCancel} >
                Cancel
              </Button>
            </Col>
          </Row>
          
        </Form>
        
      </div>
    </>
  )
}