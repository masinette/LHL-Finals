import React from "react";
import "./messages.css";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';


export default function ThreadItem(props) {


  return (
    <Container fluid >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}




{/*       <Row> 
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
      </Row> */}