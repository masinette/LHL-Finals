import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';

export default function UsersItem(props) {
  //console.log("PROPS in item WTF CITY?", props.city)
  return (
    <Container fluid>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header>Listing # {props.id}</Card.Header>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Looking for a place in: {props.city}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}