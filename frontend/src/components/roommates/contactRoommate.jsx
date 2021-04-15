import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactRoommate(props) {
  const handleInput = () => {

  }

  return (
    <>
      <Form.Group className="messageArea">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          
          as="textarea"
          rows={3}
          placeholder="Please enter a description of the room and home."
          name="description"
          onChange={() => handleInput}
       
        />
        <Button>Send</Button>
      </Form.Group>
    </>
  )
}