import { React, useState, useContext, useEffect} from "react";
import "./ReplyForm.scss";
import { InputGroup, FormControl, Button, Container, Image } from 'react-bootstrap'
import { RiSendPlaneFill } from 'react-icons/ri';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';


export default function ReplyForm(props) {
  //console.log("PROPS reply", props)
  const [messageContent, setMessageContent] = useState("")
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()

  const sendMail = (event) => {
    event.preventDefault()
    console.log("send", messageContent)
  }
  const updateMail = (event) => {
    event.preventDefault()
    setMessageContent(event.target.value)
    console.log("update", messageContent)
  }

  const postData = { 
    sender_id: props.userLogged, receiver_id: props.recipient, message: messageContent, room_id: props.room, applicant_id: props.applicant 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("INSIDE SUBMIT REPLY FORM", postData)
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
    <Container fluid>
      <InputGroup className="replyText">
        <InputGroup.Prepend>
          <InputGroup.Text>Reply to { props.recipient_name} </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl  as="textarea" aria-label="With textarea" onChange={(e) => updateMail(e)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary"onClick={(e) => handleSubmit(e)}>
            <RiSendPlaneFill
              
            >
            </RiSendPlaneFill>
          </Button>
          
        </InputGroup.Append>
      </InputGroup>
    </Container>

  )

}