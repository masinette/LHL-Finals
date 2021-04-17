import { React, useEffect, useState, useContext, Fragment } from "react";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import ThreadMessages from './ThreadMessages';
import axios from 'axios';
import { UserContext } from '../../UserContext';

import "./ThreadList.scss";
import ThreadInfo from "./ThreadInfo";
// import MessagesListItem from "components/MessagesListItem";


// pass in props, assign value of map from messages
export default function ThreadList(props) {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messagesList, setMessagesList] = useState([]);
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()
  let writeTo = null
  console.log("J'ai tu un id??", user_id, "Pis des PROPS?", props, "THREAD LISt")
  //console.log("LOCATION", useLocation())

  const formatConvo = (messages, is_owner)  => {
    //console.log(" 1- KEYS", messages)
    const firstRecipientsArray = messages.reduce(function(firstRecipients, item) {
      firstRecipients.push(item.applicant_id);
      return firstRecipients;
    }, [])
/*     const firstRecipientsArray = messages.reduce(function(firstRecipients, item) {
      firstRecipients.push(item.applicant_id);
      return firstRecipients;
    }, []) */
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

  //if I have time someday api fix 3/20
/*   const handleOnClick = (event, recipient) => {
      event.preventDefault();
      console.log( "in thread list", user_id, recipient.id)
      if(parseInt(user_id) === recipient.id){
        history.push(`/messages/${user_id}/${recipient.id}`)
      }else {
        history.push(`/messages/${user_id}/${user_id}`)
      }

  } */

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
      console.table(props.users)
      console.table(convos)
      const convoArray = [];
      let convo = [];
      convos.forEach((thread, index) => {
        //let writeTo = null
        console.log("WRITE to", user_id, thread[0].applicant_id)
        if (parseInt(user_id) === thread[0].applicant_id){
          console.log("Terend-tu?", thread[0].sender_id)
          writeTo = thread[0].sender_id
        } else {
          writeTo = thread[0].receiver_id
          //writeTo = thread[0].sender_id
        }
        console.log("WRITETO", writeTo)
        convo = thread.map((message, index) => {
          //filtering out owners cause only owners searching will get here
          if (user_id){
            return (
              <ThreadMessages
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
          console.log("PRORRORRPRORPRKIPWOIRPOWI", props.users)
/*           convoArray.push(
            <div>
              <div className="messages" key={index} >{convo}
              </div>
            </div>
    
          ) */
          convoArray.push(
            <div className="thread" key={index}  >
              <div className="threadInfo">
                <ThreadInfo
                  recipientUser = {props.users[writeTo-1]}
                />
              </div> 
              <div className="messages" key={index} >{convo}
              </div>
      
            </div>
          )
      
    })
    //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      setMessagesList(convoArray)
    })
    .catch((err) => console.log(err));
  }, [user_id]);


  
  return (
    <section>
      {user === "empty" && history.push("/login")}
      {user !== "empty" && <span>   
        <div className="allThreads">{ messagesList }</div>
        </span>}
    </section>
  )
}
