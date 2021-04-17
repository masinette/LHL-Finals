import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { Link, useHistory } from "react-router-dom";

import "./ProfileListingConvos.scss"

export default function ProfileListingConvos(props) {
  const { user_id, rooms, setRooms, handleSwitch} = props;
  console.log(user_id)

  const history = useHistory()
  if (!user_id) {
    history.push("/login");
  }

  // const [rooms, setRooms] = useState([]);


  // useEffect(() => {
  //   const userRooms = `/api/users/rooms/${user_id}`
  //   const userMessages = `/api/messages/${user_id}`
  //   axios({
  //     method: "GET",
  //     url: userRooms
  //   })
  //     .then(results => {
  //       setRooms(results.data)
  //     })
  //     .catch(err => console.error("roomList error: ", err))
  // }, [])

  // console.log(rooms)

  const handleClick = (e) => {
    e.preventDefault();

  };

  const roomList = rooms.map((room, index) => (
    
    <Container className="profile__card" key={index} >
      <Row>
        <Col>
          <h2>{room.title}</h2>
        </Col>
        <div className="active-switch" >
          <Form>
            <Form.Check 
              type="switch"
              name="active"
              label="Active"
              checked={true}
              onClick={handleClick}
            />
          </Form>
        </div>
      </Row>
      <Row>
        <Col>
          <Image cloudName="Ds3bokefg" publicId={`rooms/${room.id}/r${room.id}_p1.jpg`} />
        </Col>
        <Col>
          <p>${room.price}</p>
          <p>{room.description}</p>
        </Col>
      </Row>
      <Row>
        <Link to={`/listings/edit/${room.id}`} className="btn btn-primary" >Edit Listing</Link>
      </Row>
    </Container>
  ))

  return (
    <>
    <div className="my-listings" >
      <h2>My Listings</h2>
      {roomList}

    </div>
    </>
  )
}