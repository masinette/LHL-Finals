import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function RoomsItem(props) {
  const history = useHistory();
  const redirect = (id) => {
    history.push(`/search/rooms/${id}`)
  }
  return (
    <Container>
      <Container fluid onClick={() => redirect(props.id)}>
        <Row> 
          <Col >
            <Card className="text-center">
              <Card.Header>Listing # {props.id}, {props.name}</Card.Header>
              <Card.Body>
                <Card.Title onClick={() => redirect(props.id)}>{props.name}</Card.Title>
                <Card.Text>
                  {props.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">Home share located in: {props.city}</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    <Container>
    <div>
    </div>
    </Container>

    </Container>

  )
}