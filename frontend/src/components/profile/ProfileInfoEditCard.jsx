import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.scss"


export default function ProfileInfoEditCard(props) {
  const user = props.user;

  const handleChange = (e) => {
    e.preventDefault();
  }

  const editPath = `/api/users/${user.id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: editPath
    })
    .then(res => {

    })
  }

  console.log(user);

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
                value={user[1]}
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
                value={user[2]}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Email:</Col>
            <Col>
              {user[8]}
            </Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Description:</Col>
            <Col>
              {user[7]}
            </Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Address:</Col>
            <Col>
              {user[5]}
            </Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Level:</Col>
            <Col>
              {user[4]}
            </Col>
          </Row>
          
        </Form>
        
      </div>
    </>
  )
}