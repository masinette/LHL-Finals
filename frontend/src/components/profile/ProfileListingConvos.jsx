import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { Link, useHistory } from "react-router-dom";

export default function ProfileListingConvos({user_id}) {
  console.log(user_id)

  const history = useHistory()
  if (!user_id) {
    history.push("/login");
  }

  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    const userRooms = `/api/users/rooms/${user_id}`
    const userMessages = `/api/messages/${user_id}`
    axios({
      method: "GET",
      url: userRooms
    })
      .then(results => {
        // if (user_id) {
          setRooms(results.data)
        // } else {
        //   history.push("/login");
        // }
      })
      .catch(err => console.error("roomList error: ", err))
  }, [])

  console.log(rooms)

  const handleClick = () => {

  };

  const roomList = rooms.map((room, index) => (
    
    <Container className="profile__card" key={index} >
      <Row>
        <h2>{room.title}</h2>
        <span>
          <Form>
            <Form.Check 
              type="switch"
              name="active"
              checked={true}
              onClick={handleClick}
            />
          </Form>
        </span>
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
    <div className="profile__card" >

    </div>
    {roomList}
    </>
  )
}