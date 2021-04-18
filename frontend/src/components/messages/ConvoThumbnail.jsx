import React from "react";
import "./convo.scss";
import { CardDeck, Card, Button, Col, Row, Container, Image } from 'react-bootstrap';


export default function ConvoThumbnail(props) {
  console.log("Pis des PROPS?", props, "ConvoThumbnail")


  return (
    <div>
    {!props && <div>LOADING</div>}
    {props && (<Container fluid >
      <Card style={{ width: '18rem'  }} className="convoRecipientCard">
        <Card.Body  className="convoCardContent">
          <Card.Title >{props.recipientUser.firstname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.recipientUser.description}</Card.Subtitle>
      
            <Image src={`https://res.cloudinary.com/ds3bokefg/image/upload/v1618626354/users/${props.recipientUser.id}/u${props.recipientUser.id}_p1.jpg`} fluid />
        

        </Card.Body>
      </Card>

    </Container>)}
    </div>
  );
}