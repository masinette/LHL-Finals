
import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { UserContext } from '../UserContext'

// const messageList = state.messages.map((message) => (<li key={message.id} > {message.sentdate} || {message.sender_id} | {message.receiver_id} | {message.message}</li>));

function MessagesTest(props) {
  const {user, setUser} = useContext(UserContext)
    const history = useHistory();

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
<Container>
  <h1>Messages</h1>
    {/* {user === "empty" && <p>Please login to see your messages.<Button variant="outline-success" href="login">Login/Register</Button></p>} */}
    {user === "empty" && history.push("/login")}

    {user !== "empty" && <CardDeck>{messagesList}</CardDeck>}
  
</Container>
  )
}

export default MessagesTest;