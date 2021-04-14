import { Carousel } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


export default function RoomCard(props) {
  const { id } = useParams();
  const room  = props.rooms.filter(room => room.id === id);

  console.log("ROOMS OBJECT", props.rooms)

  return (

    <div className ="wholeComp">
{/*       <Image cloudName="Ds3bokefg" publicId="users/1/mark.jpg" >
        <Transformation width="150" height="300" crop="fill" />
      </Image> */}
      <div className="row" >
        <div className="column">
          <div className="mainRoomPic">
            <Image cloudName="Ds3bokefg" publicId="users/1/702751_zr6enc.jpg" alt="guitar">
                  <Transformation width="150" height="300" crop="fill" />
            </Image>
          </div>
          <h1>{room}</h1>


        </div>
        <div className="column">


        </div>

      </div>
      <div className="row">
        <div className="column">
          <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <Image cloudName="Ds3bokefg" publicId="users/1/mark.jpg" alt="works!">
                <Transformation width="150" height="300" crop="fill" />
            </Image>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="column">
      </div>
    </div>
  </div>
  )
}