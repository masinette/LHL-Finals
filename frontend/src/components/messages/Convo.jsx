// import logo from './logo.svg';
import RoommatesItem from './RoommatesItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//import users from '../../../../backend/routes/users';


// import useApplicationData from "hooks/useApplicationData"

const ConvoItem = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cityUsers, setCityUsers] = useState([]);
  
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  let { search } = useLocation();

  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];

  //const paramValue = query.get('value');
  // console.log("USE LOCATION", useLocation(), "Bonne ville?", paramField )
  // console.log("USE Params", useParams())



      const messagesList = props.messages.map((message, index) => {
        //filtering out owners cause only owners searching will get here
        if (true){
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
      })

  return (
    <div>
      {loading && <div>LOADING</div>}
      {!loading &&  (
        <CardDeck >
          {cityUsers} 
        </CardDeck>
      )
    }
    </div>
  )
  
};

export default ConvoItem;
