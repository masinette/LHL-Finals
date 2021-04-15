import React from "react";
import "./messages.css";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function MessagesListItem(props) {
  const history = useHistory();
  console.log("Props in meessage item", props)


  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }


  

  return (
    <Container fluid onClick={() => history.push(`/messages/${props.inboxUser}/${props.applicant}`)}>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header>Thread with # {props.applicant}</Card.Header>
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
