import {roomList} from '../../App'
import React, {useState, useContext, Component} from 'react'
import { useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import {GoogleApiWrapper, Map , Marker, InfoWindow} from 'google-maps-react';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// const roomList = state.rooms.map((room) => (<li key={room.id}> {room.title} {room.description} {room.price}</li>));

// console.log("Open sesame",API_KEY)
  // console.log("ROOMLIST", roomList)

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />



        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}
 
export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)