import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

export default function Hero(props) {



  return (
    <Jumbotron  style={{ backgroundImage: `url('https://ychef.files.bbci.co.uk/1600x900/p08382zx.webp')`, backgroundPosition: 'top', minHeight: '300px' }}>
      <h1>Welcome to </h1>
      <h1>LivTogether!</h1>
      {/* <p>
        Connecting Seniors and youth for housing
        and companionship. LivTogther, because we're better together. 
      </p> */}
      <div>   
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>

      <Row>
        <Col md={3}>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="success">Look for a rental</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="success">Look for a renter</Button>
        </Col>
      </Row>

    </Jumbotron>
  )
}