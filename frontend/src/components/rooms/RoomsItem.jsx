import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory, useParams, useLocation  } from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoomsItem.scss';


export default function RoomsItem(props) {
  const history = useHistory();
  const redirect = (id) => {
    history.push(`/search/rooms/${id}`)
  }


  const { room_id } = useParams();
  // const room  = props.rooms.filter(room => room.id === room_id);
  const room = props
  // const roomSearch = props.rooms.filter(rooms => {
  //   if (room.id === parseInt(room_id)){
  //     return room
  //   }
  // });

  let { cityId } = useParams();
  let { search } = useLocation();


  return (
    <Container>
      <Container fluid onClick={() => redirect(props.id)}>
        <Row> 
          <Col >
            <Card className="text-center">
              <Card.Header>Listing # {props.id}, {props.name}</Card.Header>
              <Card.Body>
              <div className="something">
                  <Image cloudName="Ds3bokefg"  publicId={`rooms/${room.id}/r${room.id}_p1.jpg`} className="d-block w-100" className="img">
                    <Transformation width="200" height="200" crop="fill" />
                  </Image>
                                
                  <div className="room-card-text">
                    <Card.Title onClick={() => redirect(props.id)}>{props.name}</Card.Title>
                    <Card.Text>
                      {props.description}
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">
                Home share located in: {props.city}
                <span>&nbsp;</span> 
                <Button variant="outline-info" className="room-details-button">Details</Button>
              </Card.Footer>
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