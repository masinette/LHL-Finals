import React from "react";
import {Form} from "react-bootstrap";


export default function PropertiesCheckbox(props) {

  return (
    <>
      <Form.Group name="properties" >
        <Form.Check
          type="checkbox"
          label="Heating/AC"
          name="hasHeating"
          onChange={props.handleInput}
        />
        <Form.Check
          type="checkbox"
          label="Parking"
          name="hasParking"
          onChange={props.handleInput}
        />
        <Form.Check
          type="checkbox"
          label="Pet Friendly"
          name="isPetFriendly"
          onChange={props.handleInput}
        />
        <Form.Check
          type="checkbox"
          label="Private Bath"
          name="HasPrivateBath"
          onChange={props.handleInput}
        />
      </Form.Group>
    </>
  )
}