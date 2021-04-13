import React from "react";
import {Form} from "react-bootstrap";


export default function PropertiesCheckbox(props) {

  return (
    <>
      <Form.Group controlId="exampleForm.ControlInput4">
        <Form.Check type="checkbox" label="Heating/AC" />
        <Form.Check type="checkbox" label="Parking" />
        <Form.Check type="checkbox" label="Pet Friendly" />
        <Form.Check type="checkbox" label="Private Bath" />
      </Form.Group>
    </>
  )
}