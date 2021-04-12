import React from 'react';
import { Jumbotron, Button, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';



export default function Hero(props) {
  // const [value, setValue] = useState([1, 3]);
  // const handleChange = (val) => setValue(val);

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
{/* 
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton value={1}>Option 1</ToggleButton>
      <ToggleButton value={2}>Option 2</ToggleButton>
      <ToggleButton value={3}>Option 3</ToggleButton>
    </ToggleButtonGroup>

 */}
{/* if renter is selected, disable owner, and vice versa */}

    </Jumbotron>
  )
}