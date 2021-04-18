import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";

import "./ProfileInquiryConvos.scss"

export default function ProfileInquiryConvos(props) {
  console.log(props.user_id)

  const rooms = props.rooms;
  console.log(rooms)
  const roomList = rooms.map((room, index) => (
    <Container key={index} className="profile__card" >
      <Row>
        <Col>
          <h4>
            {room.title}
            <span className="right">${room.price}/month</span>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image cloudName="Ds3bokefg" publicId={`rooms/${room.id}/r${room.id}_p1.jpg`}>
            <Transformation width="250" height="200" crop="fill" />
          </Image>

        </Col>
        <Col>
          <p>{room.description}</p>
        </Col>
      </Row>
      <Row className="link-btn">
        <div >
          <Link to={`/search/rooms/${room.id}`} className="btn btn-primary" >View Listing</Link>
        </div>
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