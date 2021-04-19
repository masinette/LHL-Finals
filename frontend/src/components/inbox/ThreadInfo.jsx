import React from "react";
import { Card, Container, Image } from 'react-bootstrap';


export default function ThreadInfo(props) {
  console.log("PROPS THREAD Info", props)

  return (
    <div>
    {!props && <div>LOADING</div>}
    {props && (<Container fluid >
      <Card style={{ width: '18rem'  }} className="recipientCard">
        <Card.Body  >
          <Card.Title>{props.recipientUser.firstname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.recipientUser.description}</Card.Subtitle>
            <Image src={`https://res.cloudinary.com/ds3bokefg/image/upload/v1618626354/users/${props.recipientUser.id}/u${props.recipientUser.id}_p1.jpg`} fluid />
        </Card.Body>
      </Card>
    </Container>)}
    </div>
  );
}