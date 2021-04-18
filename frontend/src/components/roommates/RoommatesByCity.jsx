// import logo from './logo.svg';
import RoommatesItem from './RoommatesItem';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { React, useEffect, useState, useContext }  from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './RoommatesByCity.scss';

//import users from '../../../../backend/routes/users';


// import useApplicationData from "hooks/useApplicationData"

const RoommatesByCity = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [cityUsers, setCityUsers] = useState([]);
 
  const {user, setUser} = useContext(UserContext)
  // const [user1Interests, setUser1Interests] = useState([]);
  // const [user2Interests, setUser2Interests] = useState([]);
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { user_id } = useParams();
  let { search } = useLocation();

  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];

  //const paramValue = query.get('value');
  // console.log("USE LOCATION", useLocation(), "Bonne ville?", paramField )
  console.log("USER LOGGED", user)




  useEffect(() => {
    const query = new URLSearchParams(search);
    const paramField = query.get('city');
    const apiURL = paramField ? `/api/users?city=${paramField}` : `/api/users`;
    const urlInterestsUserLogged = `/api/user_interests/${user.id}`
    const urlInterestsSearchedUser = `/api/user_interests/${user_id}`
    Promise.all([
      axios({
        method: 'GET',
        url: apiURL
        //url: `/api/users?city=${paramField}`
      }),
      axios({
        method: 'GET',
        url: urlInterestsUserLogged
      }),
      axios({
        method: 'GET',
        url: urlInterestsSearchedUser
      })
    ])
      .then((
        data
        ) => {
        console.log("USERS BY CITY DATA",data);

        //console.log("USERS LIST un moment donne?", usersList, loading)
        setLoading(false);
        setCityUsers(data[0].data)
        // setUser1Interests(data[1].data)
        // setUser2Interests(data[2].data)
        
        })
        .then(() => {
          //setLoading(false);

        })
        .catch((err) => console.log(err));
  }, [search]);

  return (
    <Container className="center">
     {/*   <div className="center"> */}
      <Row >
        <div className="allCards">
          {loading && <div>LOADING</div>}
          {!loading &&  (
            <CardDeck >
              {cityUsers.map((user, index) => {
              //filtering out owners cause only owners searching will get here
                if(!user.is_owner){
                  return (
                    <RoommatesItem
                      key={index}
                      id={user.id}
                      name = {`${user.firstname} ${user.lastname}`}
                      firstName={user.firstname}
                      description = {user.description}
                      city = {citiesArray[user.city_id - 1]}
                      // user1Interests = {user1Interests}
                      // user1Interests = {user2Interests}
                      //onClick={() => redirect}
                    />
                  )
                }

              })}
            </CardDeck>
          )
        }
        </div>
        </Row>
   {/*    </div> */}
    </Container>
  )
  
};

export default RoommatesByCity;
