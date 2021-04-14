import React from "react";
import { Form, Col } from "react-bootstrap";

export default function DatesField({formData, handleInput}) {
  const {start_date, end_date} = formData;

  console.log(start_date);
  const formattedStart = new Date(start_date).toString("YYYY-MM-DD")
  console.log(formattedStart);
  return (
    <>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>Available Start Date</Form.Label>
            <Form.Control
              type="date"
              name="start_date"
              value={formattedStart}
              onChange={handleInput}
            />
          </Col>
          <Col>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              value={end_date}
              onChange={handleInput}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  )
}