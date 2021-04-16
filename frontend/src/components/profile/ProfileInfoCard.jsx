import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditProfileBtn from "./EditProfileBtn";

import { FaRegEdit } from "react-icons/fa";
import "./styles.scss"


export default function ProfileInfoCard(props) {
  const user = props.user;


  console.log(user);

  return (
    <>
      <div className="profile__card" >
        <Container>
          <Row>
            <Col className="profile__card-label" >First Name:</Col>
            <Col>{user.firstname}</Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Last Name:</Col>
            <Col>{user.lastname}</Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Description:</Col>
            <Col>{user.description}</Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Address:</Col>
            <Col>{user.address}</Col>
          </Row>
          <Row>
            <Col className="profile__card-label" >Level:</Col>
            <Col>{user.level}</Col>
          </Row>
          <Row>
            <div className="btn btn-gradient" onClick={props.onEdit}>
              <FaRegEdit />
            </div>
          </Row>
          
        </Container>
        
      </div>
    </>
  )
}