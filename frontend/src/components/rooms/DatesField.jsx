import React from "react";
import { Form, Col } from "react-bootstrap";

export default function DatesField({formData, handleInput}) {
  const {start_date, end_date} = formData;

  const formatDate = (dateString) => {
    return dateString.split("T")[0]
  }
  const formattedEnd = formatDate(end_date)
  const formattedStart = formatDate(start_date);

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
              value={formattedEnd}
              onChange={handleInput}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </>
  )
}