import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

export default function CityCards(props) {

  // const cityList = props.cities.map((city) => (<li key={city.id}> {city.name} {city.longitude} {city.latitude}</li>));
  const cityList = props.cities.map((city) => 
  (
    <Card>
    <Card.Img variant="top" src="images/toronto.png" />
    <Card.Body>
      <Card.Title>
        {city.name}
      </Card.Title>
      <Card.Text>
        ************************** Create a db entry for city descriptions to go here. **************************
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  ));


  return (
   
  <CardDeck>
    {cityList}
  </CardDeck>

  )
}