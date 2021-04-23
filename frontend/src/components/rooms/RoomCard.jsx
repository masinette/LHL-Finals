import React, {useState, useContext} from 'react'
import { Carousel, Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useParams, useHistory} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoomCard.scss';
import { UserContext } from '../../UserContext'
import axios from 'axios';


export default function RoomCard(props) {
  const { room_id } = useParams();
  const room  = props.rooms.filter(room => room.id === room_id);
  const history = useHistory();
  const {user, setUser} = useContext(UserContext)

/*   if (!user.id) {
    history.push("/login");
  } */

  const roomSearch = props.rooms.filter(rooms => {
    if (room.id === parseInt(room_id)){
      return room
    }
  });

  
  const roomDetails = props.rooms ? props.rooms[room_id-1] : null
  //console.log( "roomdetails", roomDetails)
  
  const roomOwner = props.users.filter((u) => u.id === roomDetails.user_id)
  //console.log( "roomOwner", roomOwner[0].firstname)
  
  const [index, setIndex] = useState(0);
  const sender_id = user.id
  const [userMessage, setUserMessage] = useState(
    { sender_id: user.id, receiver_id: roomDetails?.user_id, message: '', room_id: room_id, applicant_id: roomDetails.user_id }
  );
  const handleChange = (event) => {
      setUserMessage({...userMessage, [event.target.name]: event.target.value})
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const handleSubmit = (event) => {
    //console.log("INSIDE SUBMIT", userMessage)
    event.preventDefault()
      axios({
        method: 'POST',
        url: '/api/messages',
        data: userMessage
      })
      .then((response)=>
      setUserMessage(response.data)
      // console.log("RESPONSE",response.data)
      ) 
      .then(()=> history.push("/search/rooms"))
      .catch((err) => console.log(err))
  }
 

  const convertDate = (dateString) => {
    const date = dateString.slice(0,10);
    return date;
  }
  if(props.rooms.length === 0){
    return 'loading';
  }

  return (

    <div className ="wholeComp">

      <div className="row" >
        <div className="room-column">
          <div className="mainRoomPic">

          </div>
      <div className="row">
        <div className="room-column">
          {/* <Carousel className="carousel"> */}
      <Container className="room-carousel-container">

        <Carousel activeIndex={index} onSelect={handleSelect} className="room-carousel">
          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p1.jpg`} className="d-block w-100" className="img">
              <Transformation width="300" height="300" 
              crop="scale" />
            </Image>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p2.jpg`} className="d-block w-100" className="img">
              <Transformation width="300" height="300" 
              crop="scale" />
            </Image>
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>          
          <Carousel.Item interval={1000} className="img">
            <Image cloudName="Ds3bokefg"  publicId={`rooms/${room_id}/r${room_id}_p3.jpg`} className="d-block w-100" className="img">
              <Transformation width="300" height="300" 
              crop="scale" />
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
        <div className="room-column2" >
          <h3>Homeshare Details</h3>
          <h5>{roomDetails.title}</h5>
          <p>{roomDetails.description}</p>
        <ul>
          <li>Room Size: {roomDetails.room_size} sqft</li>
          <li>Preferred Start Date: {convertDate(roomDetails.start_date)}</li>
          <li>Possible End Date: {convertDate(roomDetails.end_date)}</li>
          <li>Rental Cost: ${roomDetails.price}</li>
        </ul>
        {/* -------------------MESSAGE BOX-------------- */}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="message">
            <Form.Label>Send {roomOwner[0].firstname} a message:</Form.Label>
            <Form.Control as="textarea" type="text" onChange={handleChange} value={userMessage.message} name="message" required />
          </Form.Group>
          <Button type="submit" variant="outline-success" size="lg" type="text" placeholder="Large text">Send</Button>
        </Form>
        {/* -------------------MESSAGE BOX-------------- */}
      </div>

        </div>
      </div>
    </div>
  </div>
  )
}

