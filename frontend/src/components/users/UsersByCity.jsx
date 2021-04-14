// import logo from './logo.svg';
import './Users.scss';
import UsersItem from './UsersItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

// import useApplicationData from "hooks/useApplicationData"

const UsersByCity = () => {
  const [loading, setLoading] = useState(true);
  const [cityUsers, setCityUsers] = useState([]);
  
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  let { search } = useLocation();
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];
  const query = new URLSearchParams(search);
  const paramField = query.get('level');
  //const paramValue = query.get('value');
  
  //console.log("params", cityId, paramField)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/users?city=${cityId}`
    })
    .then(({
      data
    }) => {
      //console.log("USERS BY CITY DATA",data);
      const usersList = data.map((user, index) => {
        //const userCity = props.cities.filter(city => city.id === user.city_id);
        //console.log("Users city", userCity)
        return (
          <UsersItem
            key={index}
            id={user.id}
            name = {`${user.firstname} ${user.lastname}`}
            description = {user.description}
            city = {citiesArray[user.city_id - 1]}
          />
        )
      });
      //console.log("USERS LIST un moment donne?", usersList, loading)
      setLoading(false);
      setCityUsers(usersList)
      
    })
    .then(() => {
      //setLoading(false);

    })
    .catch((err) => console.log(err));
  }, []);

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

export default UsersByCity;
