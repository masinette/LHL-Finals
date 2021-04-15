// import logo from './logo.svg';
import RoomsItem from './RoomsItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState, useContext }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext'
//import users from '../../../../backend/routes/users';


// import useApplicationData from "hooks/useApplicationData"

const RoomsByCity = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cityRooms, setCityRooms] = useState([]);
  const {user, setUser} = useContext(UserContext)
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  let { search } = useLocation();

  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];

  useEffect(() => {
      const query = new URLSearchParams(search);
      const paramField = query.get('city');
      const apiURL = paramField ? `/api/rooms?city=${paramField}` : `/api/rooms`;
      axios({
        method: 'GET',
        url: apiURL
        //url: `/api/rooms?city=${paramField}`
      })
    .then(({
      data
    }) => {
      const roomsList = data.map((room, index) => {
        //filtering out owners cause only owners searching will get here
        // if (!user.is_owner){
          return (
            <RoomsItem
              key={index}
              id={room.id}
              name = {`${room.title}`}
              description = {room.description}
              city = {citiesArray[room.city_id - 1]}
            />
          )
        // }
      });
      setLoading(false);
      setCityRooms(roomsList)
      
    })
    .catch((err) => console.log(err));
  }, [search]);

  return (
    <div>
      {loading && <div>LOADING</div>}
      {!loading &&  (
        <CardDeck >
          {cityRooms} 
        </CardDeck>
      )
    }
    </div>
  )
  
};

export default RoomsByCity;
