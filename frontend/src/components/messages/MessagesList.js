import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import MessagesListItem from './MessagesListItem';
import axios from 'axios';
import { CardDeck } from 'react-bootstrap';
// import MessagesListItem from "components/MessagesListItem";


// pass in props, assign value of map from messages
export default function MessagesList(props) {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messagesList, setMessagesList] = useState([]);
  console.log("J'ai tu un id??", user_id)

  const formatConvo = (messages, is_owner)  => {
    //console.log(" 1- KEYS", messages)
    const firstRecipientsArray = messages.reduce(function(firstRecipients, item) {
      firstRecipients.push(item.applicant_id);
      return firstRecipients;
    }, [])
    //console.log("2- firstRecipients", firstRecipientsArray)
    const firstRecipientsCleaned = [];
    for(var value of firstRecipientsArray){
      if(firstRecipientsCleaned.indexOf(value) === -1){
          firstRecipientsCleaned.push(value);
      }
    }
    //console.log("3- recipientClean", firstRecipientsCleaned)
    const splitByConvos = []
      for (let i = 0; i < firstRecipientsCleaned.length; i++){
        splitByConvos.push([])
        for (let j = 0; j < messages.length; j++){
          if(messages[j].applicant_id === firstRecipientsCleaned[i]){
            // console.log(messages[j].applicant_id, "equals", firstRecipientsCleaned[i])
            // console.log(messages[j])
            splitByConvos[i].push(messages[j])
          }
        }
      }
    return splitByConvos
  }


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
    const convos = formatConvo(data)
    console.log("CONVOS THEN", convos)
    const convoArray = [];
    let convo = [];
    convos.forEach((thread) => {
      convo = thread.map((message, index) => {
        //filtering out owners cause only owners searching will get here
        if (user_id){
          return (
              <MessagesListItem
                key={index}
                sender={message.sender_id}
                receiver = {message.receiver_id}
                message = {message.message}
                sentDate = {message.sentdate}
                applicant = {message.applicant_id}
                //onClick={() => redirect}
              />
          )
        }
      })
      console.log("CONVO TU SEUL?", convo[0], "mESSAGES LIST", messagesList)
      convoArray.push(<CardDeck>Your chat with {convo}</CardDeck>)
      
    })
    //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      setMessagesList(convoArray)
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
