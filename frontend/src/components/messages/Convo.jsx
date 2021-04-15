// import logo from './logo.svg';
import ConvoItem from './ConvoItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




const Convo = () => {

  const [loading, setLoading] = useState(true);
  const [thread, setThread] = useState([]);
  
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { user_id, interl_id } = useParams();

  console.log("ALLO CONVO", user_id, interl_id)
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];


  useEffect(() => {

    const apiURL = user_id ? `/api/messages/${user_id}/${interl_id}` : `/api/messages`;
    axios({
      method: 'GET',
      url: apiURL

    })
    .then(({
      data
    }) => {
      //console.log("USERS BY CITY DATA",data);
      const messages = data.map((message, index) => {
        //filtering out owners cause only owners searching will get here
        if (true){
          return (
            <ConvoItem
              key={index}
              sender={message.sender_id}
              receiver = {message.receiver_id}
              message = {message.message}
              sentDate = {message.sentdate}
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
        <CardDeck >
          {thread} 
        </CardDeck>
      )
    }
    </div>
  )
  
};

export default Convo;
