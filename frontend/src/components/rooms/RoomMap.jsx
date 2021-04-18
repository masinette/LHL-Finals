import { React, useEffect, useState, useContext }  from 'react';
import { Container} from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
require('dotenv').config();

  const citiesCoords = {
    "Toronto":{
      lat: 43.65364946930945, 
      lng: -79.38413301761516
    }, 
    "Vancouver":{
        lat: 49.263785381404, 
        lng: -123.11428939457144
    }, 
    "Calgary":{
        lat: 51.04621314399029, 
        lng: -114.05741551737405,
    }, 
    "Montreal":{
      lat: 45.509114666140036, 
      lng: -73.5544183328989,
    },
};


const RoomMap = (props) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  
  const mapStyles = {        
    height: "80vh",
    width: "100%"
  };
  
  const [defaultCenter, setDefaultCenter] = useState( citiesCoords['Toronto']) 

console.log("PROPS ROOMMAP", props.city)
console.log("CITYCOORDS", citiesCoords[props.city])

  let { cityId } = useParams();
  let { search } = useLocation();

  // console.log("USER",user)
 
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);

//  -----------------------------CENTER MAP ON CITY IN USER INPUT-----------------------
  useEffect(() => {
    if(props.city){
      setDefaultCenter(prev=>({
        ...citiesCoords[props.city]
      }))
    }

    setLoading(false);
    }, [props.city])
//  -----------------------------------------------------
  console.log("DEFAULTCENTER",defaultCenter)

// -----------------------------------------STYLING------------------------------------------//
  // const MapDiv = styled.div`
  //   // width: 100%;
  // `





// -----------------------------------------STYLING------------------------------------------//


  return (
<Container>
  {/* <MapDiv> */}
    {/* <div className="map-div"> */}
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}>
            {
              props.cityRooms.map(item => {

                return (
                <Marker key={item.id} position={{
                  lat: Number(item.latitude),
                  lng: Number(item.longitude)
                }}
                // onClick={() => onSelect(item)}
                />
                )
              })
            }
                    {/* {
              selected.location && 
              (
                <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <p>{selected.name}</p>
              </InfoWindow>
              )
            } */}
        </GoogleMap>
      </LoadScript>
    {/* </div> */}
  {/* </MapDiv> */}
</Container>

  )
}

export default RoomMap;