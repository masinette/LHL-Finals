// import logo from './logo.svg';
import './Users.scss';
import UsersItem from './UsersItem';
import { CardDeck } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useApplicationData from "../../hooks/useApplicationData";

// import useApplicationData from "hooks/useApplicationData"

const UsersByCity = () => {
  //const cityName = cities.filter(city => city.id === user.city_id)
  let { cityId } = useParams();
  console.log("CLAVASSE", cityId)
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];

  
  //console.log('USERS SONT tu lacity', props.users, props.cities, typeof(props.cities));

  


  return (
   
    <div>Allo</div>

  )
};

export default UsersByCity;
