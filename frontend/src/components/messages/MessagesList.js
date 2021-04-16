import { React, useEffect, useState, useContext } from "react";
import { useParams, useHistory } from 'react-router-dom';
import MessagesListItem from './MessagesListItem';
import axios from 'axios';
import { CardDeck } from 'react-bootstrap';
import { UserContext } from '../../UserContext';
// import MessagesListItem from "components/MessagesListItem";


// pass in props, assign value of map from messages
export default function MessagesList(props) {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messagesList, setMessagesList] = useState([]);
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()
  //console.log("J'ai tu un id??", user_id)

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
    //console.log("CONVOS THEN", convos)
    const convoArray = [];
    let convo = [];
    convos.forEach((thread, index) => {
      console.log("THRE", thread, index)
      let writeTo = null
      console.log("shoulb pas allan pis allan", thread[0].sender_id, typeof(user_id), typeof(thread[0].applicant_id))
      if (parseInt(user_id) === thread[0].applicant_id){
        writeTo = thread[0].sender_id
      } else {
        writeTo = thread[0].receiver_id
      }
      console.log("WRITE TO", writeTo)
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
                room = {message.room_id}
                inboxUser = {user_id}
                recipient = {writeTo}
                //onClick={() => redirect}
              />
          )
        }
      })
      //console.log("CONVO TU SEUL?", convo[0], "mESSAGES LIST", messagesList)
      convoArray.push(<CardDeck key={index} >Your chat with {convo}</CardDeck>)
      
    })
    //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      setMessagesList(convoArray)
    })
    .catch((err) => console.log(err));
  }, []);


  
  return (
    <section>
      {user === "empty" && history.push("/login")}
      {user !== "empty" && <span>      
        <h4> Messages</h4>
        <ul>{ messagesList }</ul>
        </span>}
    </section>
  )
}
