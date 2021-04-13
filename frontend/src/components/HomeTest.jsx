import { React, useState } from 'react';
import { Container, Jumbotron, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import CityCards from "./CityCards";


function HomeTest(props) {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Look for a rental', value: '1' },
    { name: 'Look for a renter', value: '2' }
  ];


  return (
    <>
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

      {/* <Row>
        <Col md={3}>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="success">Look for a rental</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="success">Look for a renter</Button>
        </Col>
      </Row> */}




    <>
      <ButtonGroup toggle className="mb-2">

      </ButtonGroup>
      <br />
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>




  {/* if renter is selected, disable owner, and vice versa */}  

    </Jumbotron>

    <CityCards cities={props.cities}/>

  </>
  )
}

export default HomeTest;