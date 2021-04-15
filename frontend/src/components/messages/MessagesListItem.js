import React from "react";
import "./messages.css";
import { CardDeck, Card, Button, Col, Row, Container } from 'react-bootstrap';


export default function MessagesListItem(props) {
  console.log("Props in meessage item", props)

/*   const formatMessages = (props) => {
    if (props === 0) {
      return "no messages";
    } else {
      return `Here are your messages: ${props.messages}`;
    }
  }; */
/*   Date.createFromMysql = function(mysql_string) {
    var t, result = null;
    if( typeof mysql_string === 'string' )
    {
        t = mysql_string.split(/[- :]/);
        //when t[3], t[4] and t[5] are missing they defaults to zero
        result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
    }
    return result;   
  } */
  const dateFormatted = (sqlDate) => {
    return sqlDate.split('T')[0] + " at " + sqlDate.split('T')[1].substr(0,8)
  }
  console.log("Veux ma date", dateFormatted, props.sentDate)

  

  return (
    <Container fluid >
      <Row> 
        <Col >
          <Card className="text-center">
            <Card.Header>Thread with # {props.applicant}</Card.Header>
            <Card.Body>
              <Card.Title>{props.senderId}</Card.Title>
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
