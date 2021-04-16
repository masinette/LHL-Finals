// import logo from './logo.svg';
import RoomsItem from './RoomsItem';
import { CardDeck, Container} from 'react-bootstrap';
import SearchInput from "../searchInput";
import { React, useEffect, useState, useContext }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './RoomsByCity.scss';
import RoomMap from './RoomMap';

//import users from '../../../../backend/routes/users';


// import useApplicationData from "hooks/useApplicationData"

const RoomsByCity = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cityRooms, setCityRooms] = useState([]);
  const {user, setUser} = useContext(UserContext)
  const [cityName, setCityName] = useState("");
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  let { search } = useLocation();

  // console.log("USER",user)
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];


  useEffect(() => {
      const query = new URLSearchParams(search);
      //const paramField = query.get('city');
      const cityNameX = query.get('city');
      setCityName(cityNameX);
      console.log("citynameX", cityNameX)
      const paramField = cityNameX ? (citiesArray.indexOf(cityNameX) + 1) : null
      const apiURL = paramField ? `/api/rooms?city_id=${paramField}` : `/api/rooms`;
      console.log("SEARCH is changing!!", search, paramField, cityName)
      axios({
        method: 'GET',
        url: apiURL
        //url: `/api/rooms?city=${paramField}`
      })
    .then(({
      data
    }) => {
      // console.log("DATA",data)
      
      setLoading(false);
      setCityRooms(data)
      
    })
    .catch((err) => console.log(err));
  }, [search]);

  return (
    <Container>
    <div className="flexMe">
      <div>
        {loading && <div>LOADING</div>}
        {!loading &&  (
          <CardDeck >
            {cityRooms.map((room, index) => {
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
      })} 
          </CardDeck>
        )}
      </div>
      <div className="map">
        <RoomMap city={cityName} cityRooms={cityRooms}/>
      </div>
    </div>
    </Container>
  )
  
};

export default RoomsByCity;
