import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function UniqueMessage(props) {
  const history = useHistory();
  console.log("Props in Unique message", props)


  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }

  return (
    <Container fluid>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{/* {props.senderId} */}</Card.Title>
              <Card.Text>
                {props.message}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Sent on {dateFormatted(props.sentDate)}  by {props.senderFirstName}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
