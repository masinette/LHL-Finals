import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export default function SizePriceField(props) {

  return (
    <>
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
    </>
  )
}