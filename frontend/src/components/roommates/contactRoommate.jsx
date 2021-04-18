import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactRoommate(props) {
  const handleInput = () => {

  }

  return (
    <>
      <Form.Group className="messageArea">
        <Form.Label>Send me a message:</Form.Label>
        <Form.Control
          
          as="textarea"
          rows={3}
          placeholder="Please enter a description of the room and home."
          name="description"
          onChange={() => handleInput}
       
        />
        <div className="roommate-message-button">
          <Button  type="submit" variant="outline-success" size="lg" type="text" placeholder="Large text">Send</Button>
        </div>
      </Form.Group>
    </>
  )
}