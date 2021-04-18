import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditProfileBtn from "./EditProfileBtn";

import { FaRegEdit } from "react-icons/fa";
import "./ProfileInfoCard.scss"


export default function ProfileInfoCard(props) {
  const user = props.user;


  console.log(user);

  return (
    <>
      <div >
        <Container className="profile__card" >
          <h4>
            {user.is_owner ? "Owner" : "Renter"}
            <div className="btn btn-gradient profile__info-edit" onClick={props.onEdit}>
              <FaRegEdit />
            </div>
          </h4>
          <hr/>
          <Row>
            <div className="profile__card-label col-4" >First Name:</div>
            <Col>{user.firstname}</Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Last Name:</div>
            <Col>{user.lastname}</Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Description:</div>
            <Col>{user.description}</Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Address:</div>
            <Col>{user.address}</Col>
          </Row>
          <Row>
            <div className="profile__card-label col-4" >Level:</div>
            <Col>{user.level}</Col>
          </Row>
          <Row>
            
          </Row>
          
        </Container>
        
      </div>
    </>
  )
}