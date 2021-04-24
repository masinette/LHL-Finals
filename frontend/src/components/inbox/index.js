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
 

  //redirect to login if not logged
  if (!user.id) {
    history.push("/login");
  }

  const formatConvo = (messages, is_owner)  => {
    console.log(" 1- KEYS", messages)
    //const otherPersons = []
    const firstRecipientsArray = []
    messages.map(function(m, item) {
      if(m.sender_id !== user.id) {
        firstRecipientsArray.push(m.sender_id)
      }
      if(m.receiver_id !== user.id) {
        firstRecipientsArray.push(m.receiver_id)
      }
    }, [])
    // const firstRecipientsArray = messages.reduce(function(firstRecipients, item) {
    //   firstRecipients.push(item.applicant_id);
    //   return firstRecipients;
    // }, [])

    console.log("2- firstRecipients", firstRecipientsArray)
    const firstRecipientsCleaned = [];
    for(var value of firstRecipientsArray){
      if(firstRecipientsCleaned.indexOf(value) === -1){
          firstRecipientsCleaned.push(value);
      }
    }
    console.log("3- recipientClean", firstRecipientsCleaned)
    const splitByConvos = []
      for (let i = 0; i < firstRecipientsCleaned.length; i++){
        splitByConvos.push([])
        for (let j = 0; j < messages.length; j++){
          if(messages[j].sender_id === firstRecipientsCleaned[i] || messages[j].receiver_id === firstRecipientsCleaned[i]){
            splitByConvos[i].push(messages[j])
          }
        }
      }
    // const splitByConvos = []
    //   for (let i = 0; i < firstRecipientsCleaned.length; i++){
    //     splitByConvos.push([])
    //     for (let j = 0; j < messages.length; j++){
    //       if(messages[j].applicant_id === firstRecipientsCleaned[i]){
    //         splitByConvos[i].push(messages[j])
    //       }
    //     }
    //   }
    console.log("4- splitByConvos", splitByConvos)
    return splitByConvos
  }


  useEffect(() => {
    const apiURL = user.id ? `/api/messages/${user.id}` : `/api/messages`;
    axios({
      method: 'GET',
      url: apiURL
    })
    .then(({
      data
    }) => {
      const convos = formatConvo(data)
      console.log("CONVOS", convos)
      setThreads(convos)
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }, [user.id]);


  
  return (
    <section>
      {user === "empty" && history.push("/login")}
      {user !== "empty" && 
        <div>
          {threads.map((thread, index) => {
            return (
              <Thread
                key={index}
                thread={thread}
                userLogged={user.id}
                users={props.users}
              />
            )
          })}
        </div>    
      }
    </section>
  )
}