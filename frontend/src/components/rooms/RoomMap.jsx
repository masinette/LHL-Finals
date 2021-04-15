import React, {useState, useContext} from 'react'
import { useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, Marker } from "react-google-maps"
require('dotenv').config();

console.log("Open sesame",process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

// export function RoomMap(props) {
// // const MyMapComponent = withGoogleMap((props) =>
// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };
//   return (
//       <div className="map">
//         <h3>Google Maps</h3>
//                 {/* <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         /> */}

//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
//   <RoomMap isMarkerShown />// Map with a Marker
//   <RoomMap isMarkerShown={false} />// Just only Map

//       </div>
//   )
// };
// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(RoomMap);


