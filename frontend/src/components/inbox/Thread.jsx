import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ThreadInfo from "./ThreadInfo";
import UniqueMessage from './UniqueMessage'


export default function ThreadListItem(props) {
  const history = useHistory();
  console.log("Props in Thread", props.thread)


  
  let writeTo = null
  if (parseInt(props.userLogged.id) === props.thread[0].applicant_id){
    console.log("Terend-tu?", props.thread[0].sender_id)
    writeTo = props.thread[0].sender_id
  } else {
    writeTo = props.thread[0].receiver_id
    //writeTo = thread[0].sender_id
  }

  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }

  //applicant_id serves as one stable reference for the thread. it is the recipient of the first email
  //this function is a workaround for a bug in the db, I cheat the URL which are the params of Convo
  const handleOnClick = (e) => {
    e.preventDefault()
    //console.log("MATCH", props.recipient, props.applicant)
    console.log("MATCH", writeTo, props.thread[0].applicant_id)
    const destinationUser = writeTo;
    const firstDestination = props.thread[0].applicant_id
    if (destinationUser === firstDestination){
      history.push(`/messages/${props.userLogged}/${destinationUser}`)

    } else {
      history.push(`/messages/${props.userLogged}/${firstDestination}`)
    }
/*     if (props.recipient === props.applicant){
      history.push(`/messages/${props.inboxUser}/${props.recipient}`)

    } else {
      history.push(`/messages/${props.inboxUser}/${props.applicant}`)
    } */
  }
  
  
  const showThread = () => {
    console.log("Show thread function",messagesArray)
    const messagesArray = props.thread;
    messagesArray.map((message, index) => {
      return ( <div>ALLOOOOOOOOO</div>
  /*                     <UniqueMessage
                      key={index}
                      sender={message.sender_id}
                      receiver = {message.receiver_id}
                      message = {message.message}
                      sentDate = {message.sentdate}
                      applicant = {message.applicant_id}
                      room = {message.room_id}
                      //inboxUser = {user.id}
                      //recipient = {writeTo}
                      //onClick={() => redirect}
                      /> */
      )

    })

  }

  return (
    <section>{
      showThread && <Container fluid onClick={(e) => handleOnClick(e)}>
        <Row> 
          <Col >
            <Card.Text className="thread">
              <ThreadInfo  recipientUser = {writeTo ? props.users[writeTo-1] : props.users[2]}/>
              <div className="threadMessages">
                {props.thread.map((message, index) => {
                  return (
                    <UniqueMessage
                    key={index}
                    sender={message.sender_id}
                    receiver = {message.receiver_id}
                    message = {message.message}
                    sentDate = {message.sentdate}
                    applicant = {message.applicant_id}
                    room = {message.room_id}
                    inboxUser = {props.userLogged.id}
                    recipient = {writeTo}
                    />
                  )
                })}
              </div>
            </Card.Text>
          </Col>
        </Row>
      </Container>
      
      
      
      
      
      
      }
    </section>
  );
}
