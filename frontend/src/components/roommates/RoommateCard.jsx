import { Carousel, Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoommateCard.scss';
import ContactRoommates from './ContactRoommates';
import  {useState, useContext}  from 'react';
import { UserContext } from '../../UserContext'




export default function RoommateCard(props) {
  const { user_id } = useParams();
  const {user, setUser} = useContext(UserContext)

  const roommateSearch = props.users.filter(user => {
    console.log(user.id)
    if (user.id === parseInt(user_id)){
      //console.log("yoooo",user.firstname)
      return user
    }
  });
  const [index, setIndex] = useState(0);
  const roommate = roommateSearch[0];
  //console.log("ROOMIIIIE", roommate?.firstname, "ID", user_id, "PROPS", typeof(props.users[2]) )

 
  const picture1publicId = `users/${user_id}/u${user_id}_p1`
  const picture2publicId = `users/${user_id}/u${user_id}_p2`
  const picture3publicId = `users/${user_id}/u${user_id}_p3`
  const picture4publicId = `users/${user_id}/u${user_id}_p4`
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  //console.log(picture1publicId)
  let test="friends"
  return (

  <div className ="wholeComp">

    <div className="row" >
      <div className="room-column">
        <div className="profilePic">

      </div>
      <div className="row">
        <div className="room-column">

      <Container className="room-carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect} className="room-carousel">
          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg"  publicId={picture1publicId} className="d-block w-100" className="img">
             {/*  <Transformation width="400" height="400" gravity="face" radius="max" crop="crop" />  */}
              <Transformation width="200" height="200" crop="fill" />
            </Image>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg" publicId={picture2publicId} alt="picture2" className="d-block w-100" className="img">
             {/*  <Transformation width="400" height="400" gravity="face" radius="max" crop="crop" />  */}
              <Transformation width="200" height="200" crop="fill" />
            </Image>
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg" publicId={picture4publicId} alt="picture3" className="d-block w-100" className="img">
             {/*  <Transformation width="400" height="400" gravity="face" radius="max" crop="crop" />  */}
              <Transformation width="200" height="200" crop="fill" />
            </Image>
          </Carousel.Item>
        </Carousel>

          <Container className="thumbnails">
            <Row>
              <Col xs={6} md={4}>
                <Image className="img" cloudName="Ds3bokefg" publicId={picture2publicId} alt="picture2">
                  {/* <Transformation width="5" height="10"  /> */}
                  <Transformation height="200" width="200" crop="fill" />
                </Image>
              </Col>

              <Col xs={6} md={4}>
                <Image className="img" cloudName="Ds3bokefg" publicId={picture3publicId} alt="picture2">
                  {/* <Transformation width="5" height="10"  /> */}
                  <Transformation height="200" width="200" crop="fill" />
                </Image>
            </Col>

            <Col xs={6} md={4}>
              <Image className="img" cloudName="Ds3bokefg" publicId={picture4publicId} alt="picture3">
                {/* <Transformation width="5" height="10"  /> */}
                <Transformation height="200" width="200" crop="fill" />
              </Image>
            </Col>
          </Row>
        </Container>

      </Container>

      </div>

        <div className="room-column2">
          <h1 className="name">{roommate?.firstname + " " + roommate?.lastname}</h1>
          <div className="descText">
            <span>{roommate?.description}</span>
          </div>

          <div name="contact">
            <ContactRoommates>
              recipient ={roommate.id}
              applicant ={user_id}
            </ContactRoommates>
          </div>
            
        </div>


      </div>
      <div className="column justCenter">
        {/* <div name="contact">
          <ContactRoommate     
            recipient ={roommate.id}
            applicant ={user_id}
          >
          </ContactRoommate>
        </div> */}
      </div>
    </div>
  </div>
    </div>

  )
}