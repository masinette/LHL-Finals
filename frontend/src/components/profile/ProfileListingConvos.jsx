import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { Link, useHistory } from "react-router-dom";

import "./ProfileListingConvos.scss"

export default function ProfileListingConvos(props) {
  console.log(props.user_id)

  const history = useHistory()
  if (!props.user_id) {
    history.push("/login");
  }


  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target)
  };

  const rooms = props.rooms;
  console.log(rooms)
  const roomList = rooms.map((room, index) => (
    <Container key={index} className="profile__card" >
      <Row>
        <Col>
          <h2>{room.title}</h2>
        </Col>
        <div className="active-switch" >
          <Form className="switch-container">
            <Form.Check
              id={`switch-${index}`}
              type="switch"
              name="active"
              label="Active"
              onChange={props.handleSwitch(index)}
              value={room.id}
              checked={room.active}
            />
          </Form>
        </div>
      </Row>
      <Row>
        <Col>
          <Image cloudName="Ds3bokefg" publicId={`rooms/${room.id}/r${room.id}_p1.jpg`} />
        </Col>
        <Col>
          <p>{room.description}</p>
          <p>${room.price}</p>
        </Col>
      </Row>
      <Row className="btn-position">
        <Link to={`/listings/edit/${room.id}`} className="btn-spacing btn btn-primary" >Edit Listing</Link>
        <Link to={`/messages`} className="btn-spacing btn btn-primary" >View Messages</Link>
      </Row>
    </Container>
  ))

  return (
    <>
    <div  >
      {roomList}

    </div>
    </>
  )
}