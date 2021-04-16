import React from "react";
import "./messages.css";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function MessagesListItem(props) {
  const history = useHistory();
  //console.log("Props in meessage item", props)


  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }

  const handleOnClick = () => {
    console.log("MATCH", props.recipient, props.applicant)
    if (props.recipient === props.applicant){
      history.push(`/messages/${props.inboxUser}/${props.recipient}`)

    } else {
      history.push(`/messages/${props.inboxUser}/${props.applicant}`)
    }
  }
  

  return (
    <Container fluid onClick={handleOnClick}>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header>Thread with # {props.recipient} Room Id {props.room}</Card.Header>
            <Card.Body>
              <Card.Title>{props.senderId}</Card.Title>
              <Card.Text>
                {props.message}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">On {dateFormatted(props.sentDate)}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
