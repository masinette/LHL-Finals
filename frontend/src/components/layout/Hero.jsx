import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

export default function Hero(props) {



  return (
    <Jumbotron>
      <h1>Welcome to LivTogether!</h1>
      <p>
        Connecting Seniors and youth for housing
        and companionship. LivTogther, because we're better together. 
      </p>
      <div>   
        <p>&nbsp;</p>
      </div>

      <Row>
        <Col md={3}>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="outline-primary">Look for a rental</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="outline-primary">Look for a renter</Button>
        </Col>
      </Row>

    </Jumbotron>
  )
}