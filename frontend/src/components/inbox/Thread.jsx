import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ThreadInfo from "./ThreadInfo";
import UniqueMessage from './UniqueMessage'


export default function ThreadListItem(props) {
  const history = useHistory();
  //console.log("Props in Thread", props.thread)
 

  //applicant_id serves as one stable reference for the thread. it is the recipient of the first email
  //This establish will be the next recipient. first message sender = !applicant
  let writeTo = null
  if (parseInt(props.userLogged) === props.thread[0].applicant_id){
    //console.log("Terend-tu?", props.thread[0].sender_id)
    writeTo = props.thread[0].sender_id
  } else {
    writeTo = props.thread[0].receiver_id
  }
  const recipientUser = props.users.filter((u) => u.id === writeTo)[0]


  //applicant_id serves as one stable reference for the thread. it is the recipient of the first email
  //this function is a workaround for a bug in the db, I cheat the URL which are the params of Convo
  const handleOnClick = (e) => {
    e.preventDefault()
    //console.log("MATCH", writeTo, props.thread[0].applicant_id)
    const destinationUser = writeTo;
    const firstDestination = props.thread[0].applicant_id
    if (destinationUser === firstDestination){
      history.push(`/messages/${props.userLogged}/${destinationUser}`)

    } else {
      history.push(`/messages/${props.userLogged}/${firstDestination}`)
    }
  }
  //console.log("WriteTo", writeTo)
  return (
    <section>
      <Container fluid onClick={(e) => handleOnClick(e)}>
        <Row> 
          <Col >
            <Card.Text className="thread">
            <ThreadInfo  recipientUser = {recipientUser}/>
              {/* <ThreadInfo  recipientUser = {writeTo ? props.users[writeTo-1] : props.users[2]}/> */}
              <div className="threadMessages">
                {props.thread.map((message, index) => {
                  const sender = props.users.filter((u) => u.id === message.sender_id)[0]
                  return (
                    <UniqueMessage
                    key={index}
                    senderFirstName={sender.firstname}
                    // receiver = {message.receiver_id}
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
              <Button variant="secondary" className="threadButton">Reply</Button>
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
