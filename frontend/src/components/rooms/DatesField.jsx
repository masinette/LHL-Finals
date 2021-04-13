import React from "react";
import { Form, Col } from "react-bootstrap";

export default function DatesField(props) {

  return (
    <>
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
    </>
  )
}