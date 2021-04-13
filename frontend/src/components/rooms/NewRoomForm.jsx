import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

import AddressSearch from "./AddressSearch"

export default function NewRoomForm(props) {

  return (
    <div className="form__card" >
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="1 Bedroom Townhome" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Please enter a description of the room and home." />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Room Size</Form.Label>
          <InputGroup>
            <Form.Control type="number" min="0" placeholder="120" />
            <InputGroup.Append>
              <InputGroup.Text>Sqft</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col>
              <Form.Label>Available Start Date</Form.Label>
              <Form.Control type="date" />
            </Col>
            <Col>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Monthly Price</Form.Label>
          <Form.Control type="number" min="0" placeholder="250" />
        </Form.Group>
        <Form.Check type="checkbox" label="Pet Friendly" />
        <AddressSearch />        
      </Form>
      {/* <form action="/api/rooms" method="post">
        <input type="text" placeholder="Title" />
        <button type="submit">Create New Room</button>
      </form> */}
    </div>
  )
}