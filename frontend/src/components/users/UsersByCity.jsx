// import logo from './logo.svg';
import './Users.scss';
import UsersItem from './UsersItem';
import { CardDeck } from 'react-bootstrap';
import { React, useEffect, useState }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//import users from '../../../../backend/routes/users';


// import useApplicationData from "hooks/useApplicationData"

const UsersByCity = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cityUsers, setCityUsers] = useState([]);
  
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  let { search } = useLocation();
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];
  const query = new URLSearchParams(search);
  const paramField = query.get('city');
  //const paramValue = query.get('value');
  console.log("USE LOCATION", useLocation(), "Bonne ville?", paramField )
  console.log("USE Params", useParams())


  const apiURL = paramField ? `/api/users?city=${paramField}` : `/api/users`
  useEffect(() => {
      axios({
        method: 'GET',
        url: apiURL
        //url: `/api/users?city=${paramField}`
      })
    .then(({
      data
    }) => {
      //console.log("USERS BY CITY DATA",data);
      const usersList = data.map((user, index) => {
        //filtering out owners cause only owners searching will get here
        if (!user.is_owner){
          return (
            <UsersItem
              key={index}
              id={user.id}
              name = {`${user.firstname} ${user.lastname}`}
              description = {user.description}
              city = {citiesArray[user.city_id - 1]}
              //onClick={() => redirect}
            />
          )
        }
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
