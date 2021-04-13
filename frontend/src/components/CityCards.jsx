import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

function CityCards(props) {

  const cityList = props.cities.map((city) => 
  (
    <Card>
      <Card.Img variant="top" src={city.image} />
      <Card.Body>
        <Card.Title>
          {city.name}
        </Card.Title>
        <Card.Text>
          {city.description}
        </Card.Text>
      </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated today</small>
    </Card.Footer>
  </Card>
  ));

  return (
  <CardDeck>
    {cityList}
  </CardDeck>
  )
}

export default CityCards;