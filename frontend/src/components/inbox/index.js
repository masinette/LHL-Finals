import { React, useEffect, useState, useContext, Fragment } from "react";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Thread from './Thread';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import './inbox.scss'

export default function Inbox(props) {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [messagesList, setMessagesList] = useState([]);
  const [threads, setThreads] = useState([]);
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()
  let writeTo = null
  //console.log("J'ai tu un id??", user_id, "Pis des PROPS?", props, "THREAD LISt")
  //console.log("LOCATION", useLocation())

  //redirect to login if not logged
  if (!user.id) {
    history.push("/login");
  }

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
    const apiURL = user.id ? `/api/messages/${user.id}` : `/api/messages`;
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
      setThreads(convos)
//       const convoArray = [];
//       let convo = [];
//       const sortByMostRecent = convos.reverse()
//       //convos.forEach((thread, index) => {
//       sortByMostRecent.forEach((thread, index) => {
//         //let writeTo = null
//         console.log("WRITE to", user_id, thread[0].applicant_id)
//         if (parseInt(user.id) === thread[0].applicant_id){
//           console.log("Terend-tu?", thread[0].sender_id)
//           writeTo = thread[0].sender_id
//         } else {
//           writeTo = thread[0].receiver_id
//           //writeTo = thread[0].sender_id
//         }
//         console.log("WRITETO", writeTo)
//         convo = thread.map((message, index) => {
//           //filtering out owners cause only owners searching will get here
//           if (user.id){
//             return (
//               <ThreadMessages
//               key={index}
//               sender={message.sender_id}
//               receiver = {message.receiver_id}
//               message = {message.message}
//               sentDate = {message.sentdate}
//               applicant = {message.applicant_id}
//               room = {message.room_id}
//               inboxUser = {user.id}
//               recipient = {writeTo}
//               //onClick={() => redirect}
//               />
//               )
//             }
//           })
//           //console.log("CONVO TU SEUL?", convo[0], "mESSAGES LIST", messagesList)
//           console.log("PRORRORRPRORPRKIPWOIRPOWI", props.users)
// /*           if you want to click on all threads, you need to remove te css, comment out convoArray.push below and put this one instead
//             convoArray.push(
//             <div>
//               <div className="messages" key={index} >{convo}
//               </div>
//             </div>
    
//           ) */
//           convoArray.push(
//             <div className="thread" key={index}  >
//               <div className="threadInfo">
//                 <ThreadInfo
//                   recipientUser = {writeTo ? props.users[writeTo-1] : props.users[2]}
//                 />
//               </div> 
//               <div className="messages" key={index} >{convo}
//               </div>
      
//             </div>
//           )
//         })
    //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      //setMessagesList(convoArray)
    })
    .catch((err) => console.log(err));
  }, [user.id]);


  
  return (
    <section>
      {user === "empty" && history.push("/login")}
      {user !== "empty" && 
        <div className="allThreads">allo
          {threads.map((thread, index) => {
            return (
              <Thread
                key={index}
                thread={thread}
              />
            )
          })}
        </div>    
      }
    </section>
  )
}