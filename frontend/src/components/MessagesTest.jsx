
import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
// const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));

function MessagesTest(props) {
  const messagesList = props.messages.map((message) => 
  (

  <Container fluid>
    <Row> 
      <Col >
        <Card className="text-center">
          <Card.Header>Listing # {message.room_id}</Card.Header>
          <Card.Body>
            <Card.Title>User {message.receiver_id} said:</Card.Title>
            <Card.Text>
              {message.message}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          <Card.Footer className="text-muted">{message.sentdate}</Card.Footer>
        </Card>
      </Col>
    </Row>
  </Container>
  ));


  return (
   
  <CardDeck >
    {messagesList}
  </CardDeck>

  )
}

export default MessagesTest;