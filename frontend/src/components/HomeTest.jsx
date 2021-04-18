import { React, useState } from 'react';
import { Container, Jumbotron, Button, Row, Col, ToggleButtonGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import CityCards from "./CityCards";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';



function HomeTest(props) {
  // const [checked, setChecked] = useState(false);
  // const [radioValue, setRadioValue] = useState('1');

  // const radios = [
  //   { name: 'Look for a rental', value: false },
  //   { name: 'Look for a renter', value: true }
  // ];
  // console.log("OWNER?", radioValue)

  const history = useHistory();
  
  const handleSubmit = (event) => {
    // if (radios[0].name === 'Look for a rental'){
    // history.push('/search/rooms')
    // } 
    // if (radios[0].name === 'Look for a renter'){
    // history.push('search/roommates')
    // }
//     if (Button.name="renter"){
// history.push('/search/roommates')
//     }
//     if (Button.name="rental"){
// history.push('/search/rooms')
//     }
  }
  // console.log("RADIOS", radios)

  const handleRenter = () => {
    history.push('/search/roommates')
  }
  const handleRental = () => {
    history.push('/search/rooms')
  }

const HomeCityCards = styled.div`
  margin-left: 100px;
  margin-right: 100px;

`


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

      <Row>
        <Col md={3}>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="primary" name="rental" type="submit" onClick={handleRental}>Look for a rental</Button>
        </Col>
        <Col xs={6} md={4}>
          <Button variant="primary" name="renter" type="submit" onClick={handleRenter}>Look for a roomate</Button>
        </Col>
      </Row>


    <>
      {/* <ButtonGroup toggle className="mb-2">

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
            onClick={handleSubmit}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
    </>




  {/* if renter is selected, disable owner, and vice versa */}  

    </Jumbotron>

    <HomeCityCards>
      <CityCards cities={props.cities}/>
    </HomeCityCards>

  </>
  )
}

export default HomeTest;