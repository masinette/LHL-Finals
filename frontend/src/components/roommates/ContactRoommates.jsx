import { React, useState, useContext, useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { Form, Button } from 'react-bootstrap';


export default function ContactRoommates(props) {
  //console.log("PROPS reply", props)
  const [messageContent, setMessageContent] = useState("")
  const {user} = useContext(UserContext)
  const history = useHistory()

  const handleInput = (event) => {
    event.preventDefault()
    setMessageContent(event.target.value)
    console.log("update", messageContent)
  }

  const postData = { 
    sender_id: user.id, receiver_id: props.recipient, message: messageContent, room_id: props.room, applicant_id: props.applicant 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   // console.log("INSIDE CONTACT RENTER FORM", postData)
      axios({
        method: 'POST',
        url: '/api/messages',
        data: postData
      })
      .then((response)=> {
        console.log("RESPONSE",response.data)
        history.push(`/messages/${user.id}`)

      }) 
      .then()
      .catch((err) => console.log(err))
  }



  return (
    (
      <>
        <Form.Group className="messageArea">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please enter a description of the room and home."
            name="description"
            onChange={(e) => handleInput(e)}
          />
          <Button className="roommate-message-button" type="submit" variant="outline-success" size="lg" type="text" placeholder="Large text" onClick ={handleSubmit}>Send</Button>
        </Form.Group>
      </>
    )
  )

}