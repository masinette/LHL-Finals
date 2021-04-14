import React from "react";
import { Form } from "react-bootstrap";


export default function TitleField(props) {

  return (
    <>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="1 Bedroom Townhome"
          value={props.formData.title}
          name="title" 
          onChange={props.handleInput}
        />
      </Form.Group>
    </>
  )
}