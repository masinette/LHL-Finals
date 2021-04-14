import React from "react";
import { Form } from "react-bootstrap";

export default function DescriptionField(props) {

  return (
    <>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Please enter a description of the room and home."
          name="description"
          onChange={props.handleInput}
          value={props.formData.description}
        />
      </Form.Group>
    </>
  )
}