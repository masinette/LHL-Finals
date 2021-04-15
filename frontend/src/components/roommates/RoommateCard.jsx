import { Carousel } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoommateCard.scss';
import ContactRoommate from './contactRoommate';


export default function RoommateCard(props) {
  const { user_id } = useParams();

  const roommateSearch = props.users.filter(user => {
    console.log(user.id)
    if (user.id === parseInt(user_id)){
      //console.log("yoooo",user.firstname)
      return user
    }
  });
  const roommate = roommateSearch[0];



  console.log("ROOMIIIIE", roommate?.firstname, "ID", user_id, "PROPS", typeof(props.users[2]) )
 
 
 
 
 
 
 
  const picture1publicId = `users/${user_id}/u${user_id}_p1`
  const picture2publicId = `users/${user_id}/u${user_id}_p2`
  const picture3publicId = `users/${user_id}/u${user_id}_p3`
  const picture4publicId = `users/${user_id}/u${user_id}_p4`

  //console.log(picture1publicId)
  let test="friends"
  return (

    <div className ="wholeComp">
{/*       <Image cloudName="Ds3bokefg" publicId="users/1/mark.jpg" >
        <Transformation width="150" height="300" crop="fill" />
      </Image> */}
      <div className="row" >
        <div className="column alignJustCenter">
          <div className="profilePic">
            <Image cloudName="Ds3bokefg"  publicId={picture1publicId}>
     {/*          <Transformation width="400" height="400" gravity="face" radius="max" crop="crop" /> */}
              <Transformation width="200" crop="fill" />
            </Image>
           
          
    
          
          </div>



        </div>
        <div className="column alignJustCenter">
          <div className="descText">
                <h1 className="name">{roommate?.firstname + roommate?.lastname}</h1>
                <span>{roommate?.description}</span>
          </div>
        </div>

      </div>
      <div className="row">
  
        <div className="column alignJustCenter">
          <div name="morePictures">
         
              <Image cloudName="Ds3bokefg" publicId={picture2publicId} alt="picture2">
                  <Transformation width="5" height="10"  />
                  <Transformation width="200" crop="fill" />
              </Image>
              <Image cloudName="Ds3bokefg" publicId={picture3publicId} alt="picture2">
                  <Transformation width="5" height="10"  />
                  <Transformation width="200" crop="fill" />
              </Image>
              <Image cloudName="Ds3bokefg" publicId={picture4publicId} alt="picture3">
                  <Transformation width="5" height="10"  />
                  <Transformation width="200" crop="fill" />
              </Image>
    
          </div>
           
      </div>
      <div className="column justCenter">
        <div name="contact">
          <ContactRoommate></ContactRoommate>
          

        </div>
      </div>
    </div>
  </div>
  )
}