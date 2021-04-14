import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function UsersItem(props) {
  const history = useHistory();
  //console.log("PROPS in item WTF CITY?", props.city)
  const redirect = (id) => {
    console.log("Which id are you getting?", id)
    //history.push(`/about`)
    history.push(`/users/cards/${id}`)
  }
  return (
    <Container fluid onClick={() => redirect(props.id)}>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header>Listing # {props.id}</Card.Header>
            <Card.Body>
              <Card.Title onClick={() => redirect(props.id)}>{props.name}</Card.Title>
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