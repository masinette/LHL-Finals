import React, {useState, useContext} from 'react'
import { Carousel, Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoomCard.scss';
import { UserContext } from '../../UserContext'
import axios from 'axios';



export default function RoomCard(props) {
  const { room_id } = useParams();
  const room  = props.rooms.filter(room => room.id === room_id);

  const roomSearch = props.rooms.filter(rooms => {
    if (room.id === parseInt(room_id)){
      return room
    }
  });


  console.log("ROOMS OBJECT", props.rooms[room_id-1])

  const {user, setUser} = useContext(UserContext)

  const roomDetails = props.rooms[room_id-1]
  
  const [index, setIndex] = useState(0);
//sender_id, receiver_id, message, room_id, applicant_id
const sender_id = user.id
  const [userMessage, setUserMessage] = useState(
    { sender_id: user.id, receiver_id: roomDetails.user_id, message: '', room_id: room_id, applicant_id: sender_id }
  );
  const handleChange = (event) => {
      setUserMessage({...userMessage, [event.target.name]: event.target.value})
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const handleSubmit = (event) => {
      event.preventDefault()
        axios({
          method: 'POST',
          url: '/api/messages',
          data: userMessage
        })
        .then((response)=>
        // setUserMessage(response.data)
        console.log("RESPONSE",response.data)
        ) 
        .catch((err) => console.log(err))
    }


  return (

    <div className ="wholeComp">

      <div className="row" >
        <div className="column">
          <div className="mainRoomPic">

      </div>
      <div className="row">
        <div className="column">
          {/* <Carousel className="carousel"> */}
      <Container className="carouselContainer">

        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p1.jpg`} className="d-block w-100" className="img">
              {/* <Transformation width="300" height="300" crop="fill" /> */}
            </Image>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p2.jpg`} className="d-block w-100" className="img">
              {/* <Transformation width="300" height="300" crop="fill" /> */}
            </Image>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>          
          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p3.jpg`} className="d-block w-100" className="img">
              {/* <Transformation width="300" height="300" crop="fill" /> */}
            </Image>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>          
        </Carousel>


<Container className="thumbnails">
  <Row>
    <Col xs={6} md={4}>
      <Image className="img" cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p1.jpg`} rounded >
        <Transformation width="200" height="200" crop="fill" />
      </Image>
    </Col>
    <Col xs={6} md={4}>
      <Image className="img" cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p2.jpg`} rounded >
        <Transformation width="200" height="200" crop="fill" />
      </Image>
    </Col>
    <Col xs={6} md={4}>
      <Image className="img" cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p3.jpg`} rounded >
        <Transformation width="200" height="200" crop="fill" />
      </Image>
    </Col>
  </Row>
</Container>
      </Container>
        
      </div>
        <div className="column2" >
                 <h3>Homeshare Details</h3>
        <ul>
          <li>{roomDetails.title}</li>
          <li>{roomDetails.description}</li>
          <li>{roomDetails.room_size}</li>
          <li>{roomDetails.start_date}</li>
          <li>{roomDetails.end_date}</li>
          <li>{roomDetails.price}</li>
        </ul>

        </div>
            <Form 
            onSubmit={handleSubmit} 
            >
    {/* <Form onSubmit={(event) =>handleSubmitUser(userLogin)}   > */}

      <Form.Group id="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" 
        onChange={handleChange} 
        value={userMessage.message} 
        name="message" required />
      </Form.Group>


    <Form.Text className="text-muted">

    </Form.Text>

    <Button type="submit" variant="outline-primary" size="lg" type="text" placeholder="Large text">
      Submit 
    </Button>

    </Form>
        </div>
      </div>
    </div>
  </div>
  )
}

// TypeError: Cannot read property 'title' of undefined, ASK MENTOR, HAPPENS ON ROOM ID REFRESH