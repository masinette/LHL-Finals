import React from "react";
import { Col, Form, InputGroup } from "react-bootstrap";

export default function SizePriceField(props) {
  console.log(props);
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
                name="roomSize"
                onChange={props.handleInput}
              />
              <InputGroup.Append>
                <InputGroup.Text>Sqft</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label>Monthly Price</Form.Label>
            <Form.Control type="number" min="0" placeholder="Price" name="price" onChange={props.handleInput} />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  )
}