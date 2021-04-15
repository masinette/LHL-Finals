import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export default function SizePriceField({
  formData,
  handleInput
}) {
  const {
    room_size,
    price
  } = formData

  return (
    <>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>Room Size</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                min="0"
                placeholder="Size in Sqft"
                name="room_size"
                value={room_size}
                onChange={handleInput}
              />
              <InputGroup.Append>
                <InputGroup.Text>Sqft</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label>Monthly Price</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Price"
              name="price"
              value={price}
              onChange={handleInput}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  )
}