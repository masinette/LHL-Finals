import { React, useEffect, useState, useContext }  from 'react';
import { Container} from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
require('dotenv').config();

const RoomMap = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 43.65364946930945, 
    lng: -79.38413301761516
    // lat: 41.3851, lng: 2.1734
  }
  

  let { cityId } = useParams();
  let { search } = useLocation();

  // console.log("USER",user)
  
  const citiesArray = ["Toronto", "Vancouver", "Calgary", "Montreal"];
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
      axios({
        method: 'GET',
        url: '/api/rooms'
      })
    .then(({
      data
    }) => {
        const locations2 = data.map((room) => {
          const container = {};
          container.name = room.title;
              container.location= { 
                "lat": Number(room.latitude),
                "lng": Number(room.longitude) 
              }
          return container
        })
      // console.log("LOCATIONS2 ",locations2[0])
      setLocations(locations2)
      });

      setLoading(false);
    })

  return (
<Container>

     <LoadScript
       googleMapsApiKey={API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.id} position={item.location}/>
              )
            })
         }
     </GoogleMap>

     </LoadScript>

</Container>

  )
}

export default RoomMap;