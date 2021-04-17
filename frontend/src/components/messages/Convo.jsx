// import logo from './logo.svg';
import ConvoItem from './ConvoItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState, Fragment}  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import ReplyForm from './ReplyForm';
import PropertiesCheckbox from '../rooms/PropertiesCheckbox';
import { propTypes } from 'react-bootstrap/esm/Image';




const Convo = (props) => {

  const [loading, setLoading] = useState(true);
  const [thread, setThread] = useState([]);
  //cheat here, I should pass props from Messages to Convo but using redirect now and don't know how to get out
  const [roomId, setRoomId] = useState(null);
  const [applicantId, setApplicantId] = useState(null);
  const [destination, setDestination] = useState(20);
  //const [threadWith, setThreadWith] = useState(null);
  const { user_id, recipient_id } = useParams();
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];
  
  let writeTo = null
  



  useEffect(() => {

    const apiURL = user_id ? `/api/messages/${user_id}/${recipient_id}` : `/api/messages`;
    axios({
      method: 'GET',
      url: apiURL

    })
    .then(({
      data
    }) => {
      if (parseInt(user_id) === data[0].applicant_id) {
        console.log("te rends-tu")
        data[0].sender_id ? setDestination(data[0].sender_id) : setDestination(2)
      } else {
        setDestination(data[0].applicant_id)
      }
      console.log("PIIIIS", typeof(parseInt(user_id)), typeof(data[0].applicant_id), destination)
      if (parseInt(user_id) === data[0].applicant_id){
        writeTo = data[0].sender_id
      } else {
         writeTo = data[0].receiver_id
        //writeTo = thread[0].sender_id
      }
      const sortByMostRecent = data.reverse()
      const messages = sortByMostRecent.map((message, index) => {
        if (true){
          
          setRoomId(message.room_id);
          setApplicantId(message.applicant_id)
          return (
            <ConvoItem
              key={index}
              sender={message.sender_id}
              receiver = {message.receiver_id}
              message = {message.message}
              sentDate = {message.sentdate}
              room = {message.room_id}
              applicant = {message.applicant_id}
              recipient_name = {props.users[writeTo-1].firstname}
            />
          )
        }
      });
      //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      setThread(messages)
      })
      .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      {loading && <div>LOADING</div>}
      {!loading &&  (
        <Fragment>
          <ReplyForm
            userLogged={user_id}
            recipient={destination}
            room={roomId}
            applicant={applicantId}
            recipient_name={"Poil"}
          >
          </ReplyForm>
          <CardDeck >
            {thread} 
          </CardDeck>
        </Fragment>
      )
      }
    </div>
  )
  
};

export default Convo;
