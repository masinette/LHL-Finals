import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MessagesListItem from './MessagesListItem';
import axios from 'axios';
// import MessagesListItem from "components/MessagesListItem";


// pass in props, assign value of map from messages
export default function MessagesList(props) {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messagesList, setMessagesList] = useState([]);
  console.log("J'ai tu un id??", user_id)

  useEffect(() => {
/*     const query = new URLSearchParams(search);
    const paramField = query.get('city'); */
    const apiURL = user_id ? `/api/messages/${user_id}` : `/api/messages`;
    axios({
      method: 'GET',
      url: apiURL
      //url: `/api/users?city=${paramField}`
    })
  .then(({
    data
  }) => {
    //console.log("USERS BY CITY DATA",data);
    const messagesList = data.map((message, index) => {
      //filtering out owners cause only owners searching will get here
      if (user_id){
        return (
          <MessagesListItem
            key={index}
            sender={message.sender_id}
            receiver = {message.receiver_id}
            message = {message.message}
            sentDate = {message.room_id}
            applicant = {message.applicant_id}
            //onClick={() => redirect}
          />
        )
      }
    });
    //console.log("USERS LIST un moment donne?", usersList, loading)
    setLoading(false);
    setMessagesList(messagesList)
    })
    .catch((err) => console.log(err));
  }, []);

/* return (
  <div>
    {loading && <div>LOADING</div>}
    {!loading &&  (
      <CardDeck >
        {cityUsers} 
      </CardDeck>
    )
  }
  </div> */

  
  return (
    <section>
      <h4> Messages</h4>
      <ul>{ messagesList }</ul>
    </section>
  )
}
