import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoommatesItem.scss';

export default function RoommatesItem(props) {
  const history = useHistory();
  console.log("PROPS in item WTF CITY?", props.city, props.id)
  const redirect = (id) => {
    console.log("Which id are you getting?", id)
    //history.push(`/about`)
    history.push(`/search/roommates/${id}`)
  }
  return (
    <Container>
      <Container fluid className="oneCard" onClick={() => redirect(props.id)}>
        <Row> 
          <Col >
            <Card className="text-center">
              <Card.Header>{props.name}</Card.Header>
              <Card.Body>
                <div className="roommatesSomethingAll">
                  <Image cloudName="Ds3bokefg"  publicId={`users/${props?.id}/u${props?.id}_p1.jpg`} className="d-block w-100" className="img">
                    <Transformation width="200" height="200" crop="fill"/>
                  </Image>
                  
                  <div className="roommatesSomethingNoPicture">
                    <Card.Title onClick={() => redirect(props.id)}>{/* {props.name} */}</Card.Title>
                    <div>
                    <Card.Text className="rmaText">
                      {props.description}
                    </Card.Text>
                    </div>
                    <div  className="rmaInterestsText bottom">
                      <Card.Text className="description">
                        You have some common interests with {props.firstName}:
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">Looking for a place in: {props.city}</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}