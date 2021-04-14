import React from "react";
import { Form, Col } from "react-bootstrap";

export default function DatesField(props) {

  return (
    <>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>Available Start Date</Form.Label>
            <Form.Control type="date" name="startDate" onChange={props.handleInput} />
          </Col>
          <Col>
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="endDate" onChange={props.handleInput} />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  )
}