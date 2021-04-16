import { React, useState, useEffect} from "react";
import "./ReplyForm.scss";
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { RiSendPlaneFill } from 'react-icons/ri';

export default function ReplyForm(props) {
  console.log("PROPS reply", props)
  const [messageContent, setMessageContent] = useState("")

  const sendMail = (event) => {
    event.preventDefault()
    console.log("send", messageContent)
  }
  const updateMail = (event) => {
    event.preventDefault()
    setMessageContent(event.target.value)
    console.log("update", messageContent)
  }



  return (

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Reply to: </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" onChange={(e) => updateMail(e)}/>
    <InputGroup.Append>
      <Button variant="outline-secondary">
        <RiSendPlaneFill
          onClick={(e) => sendMail(e)}
        >
        </RiSendPlaneFill>
      </Button>
    </InputGroup.Append>
  </InputGroup>

  )

}