import React from "react";
import { Col, Form, InputGroup, Button } from "react-bootstrap";

import AddressField from "./AddressField";
import UploadButton from "./UploadButton";

export default function NewRoomForm(props) {

  const handleSubmit = event => {
    event.preventDefault()
    const target = event.target
    console.log(target.name);
  }

  return (
    <div className="form__card" >
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="1 Bedroom Townhome" name="room_title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Please enter a description of the room and home." name="room_description" />
        </Form.Group>
        <AddressField /> 
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Row>
            <Col>
              <Form.Label>Room Size</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="Size in Sqft" name="room_size" />
                <InputGroup.Append>
                  <InputGroup.Text>Sqft</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label>Monthly Price</Form.Label>
              <Form.Control type="number" min="0" placeholder="Price" name="room_title" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Row>
            <Col>
              <Form.Label>Available Start Date</Form.Label>
              <Form.Control type="date" name="room_startDate" />
            </Col>
            <Col>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="room_endDate" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput4">
          <Form.Check type="checkbox" label="Heating/AC" />
          <Form.Check type="checkbox" label="Parking" />
          <Form.Check type="checkbox" label="Pet Friendly" />
          <Form.Check type="checkbox" label="Private Bath" />
        </Form.Group>
        <UploadButton />
        <Button variant="primary" type="submit" >Create Room</Button>
      </Form>
      {/* <form action="/api/rooms" method="post">
        <input type="text" placeholder="Title" />
        <button type="submit">Create New Room</button>
      </form> */}
    </div>
  )
}