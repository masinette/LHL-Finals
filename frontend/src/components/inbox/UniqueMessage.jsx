import React from "react";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function UniqueMessage(props) {
  const history = useHistory();
  console.log("Props in Unique message", props)


  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }

/*   const handleOnClick = (e) => {
    e.preventDefault()
    console.log("MATCH", props.recipient, props.applicant)
    if (props.recipient === props.applicant){
      history.push(`/messages/${props.inboxUser}/${props.recipient}`)

    } else {
      history.push(`/messages/${props.inboxUser}/${props.applicant}`)
    }
  }
   */

  return (
    <Container fluid /* onClick={(e) => handleOnClick(e)} */>
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{props.senderId} ALLO uniqueMessage</Card.Title>
              <Card.Text>
                {props.message}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">On {dateFormatted(props.sentDate)}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
