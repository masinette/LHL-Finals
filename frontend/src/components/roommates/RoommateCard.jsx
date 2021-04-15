import { Carousel } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoommateCard.scss';


export default function RoommateCard(props) {
  const { user_id } = useParams();
  const roommateSearch = props.users.filter(user => {
    console.log(user.id)
    if (user.id === parseInt(user_id)){
      return user
    }
  });
  const roommate = roommateSearch[0];


  console.log("ROOMIIIIE", roommateSearch, "ID", user_id, "PROPS", typeof(props.users[2]) )
  // const picture1publicId = `users/${roommate.id}/u${roommate.id}_p1`
  // const picture2publicId = `users/${roommate.id}/u${roommate.id}_p2`
  // const picture3publicId = `users/${roommate.id}/u${roommate.id}_p3`
  // const picture4publicId = `users/${roommate.id}/u${roommate.id}_p4`

  //console.log(picture1publicId)

  return (

    <div className ="wholeComp">
{/*       <Image cloudName="Ds3bokefg" publicId="users/1/mark.jpg" >
        <Transformation width="150" height="300" crop="fill" />
      </Image> */}
      <div className="row" >
        <div className="column">
          <div className="profilePic">
            <Image cloudName="Ds3bokefg" publicId="friends" alt="guitar">
                  <Transformation width="150" height="300" crop="fill" />
            </Image>
            <img src="https://res.cloudinary.com/ds3bokefg/image/upload/v1618432531/users/3/u3_p2.jpg"></img>
          </div>



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