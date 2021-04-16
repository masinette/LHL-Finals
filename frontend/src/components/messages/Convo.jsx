// import logo from './logo.svg';
import ConvoItem from './ConvoItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState, Fragment}  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import ReplyForm from './ReplyForm';




const Convo = () => {

  const [loading, setLoading] = useState(true);
  const [thread, setThread] = useState([]);
  //cheat here, I should pass props from Messages to Convo but using redirect now and don't know how to get out
  const [roomId, setRoomId] = useState(null);
  const [applicantId, setApplicantId] = useState(null);

  
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { user_id, recipient_id } = useParams();

  console.log("ALLO CONVO", user_id, recipient_id)
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];


  useEffect(() => {

    const apiURL = user_id ? `/api/messages/${user_id}/${recipient_id}` : `/api/messages`;
    axios({
      method: 'GET',
      url: apiURL

    })
    .then(({
      data
    }) => {
      console.log("ALL CONVOS",data);
      const messages = data.map((message, index) => {
        //filtering out owners cause only owners searching will get here
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
          <CardDeck >
            {thread} 
          </CardDeck>
          <ReplyForm
            userLogged={user_id}
            recipient={recipient_id}
            room={roomId}
            applicant={applicantId}
          >
          </ReplyForm>
        </Fragment>
      )
      }
    </div>
  )
  
};

export default Convo;
