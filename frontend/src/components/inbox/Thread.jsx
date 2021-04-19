import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UniqueMessage from './UniqueMessage'


export default function ThreadListItem(props) {
  const history = useHistory();
  //console.log("Props in meessage item", props)


  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }

  const handleOnClick = (e) => {
    e.preventDefault()
    console.log("MATCH", props.recipient, props.applicant)
    if (props.recipient === props.applicant){
      history.push(`/messages/${props.inboxUser}/${props.recipient}`)

    } else {
      history.push(`/messages/${props.inboxUser}/${props.applicant}`)
    }
  }
  
  const showThread = (messagesArray) => {
    messagesArray.forEach((message, index) => {
      return (
                      <UniqueMessage
                      key={index}
                      sender={message.sender_id}
                      receiver = {message.receiver_id}
                      message = {message.message}
                      sentDate = {message.sentdate}
                      applicant = {message.applicant_id}
                      room = {message.room_id}
                      //inboxUser = {user.id}
                      //recipient = {writeTo}
                      //onClick={() => redirect}
                      />
      )

    })

  }

  return (
    <section>
    <Container fluid onClick={(e) => handleOnClick(e)}>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{props.senderId}</Card.Title>
              <Card.Text>
                {showThread(props.thread)}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">On {dateFormatted(props.sentDate)}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
}
