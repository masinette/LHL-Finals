import React, { useState } from "react";
import useAddressPrediction from "../../hooks/useAddressPrediction";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import axios from "axios";


export default function AddressSearch(props) {
  // value of the address input
  const [search, setSearch] = useState("");
  const [coordinates, setCoordinates] = useState({lat: null, lng: null});

  // returns array of predictions
  // const predictions = useAddressPrediction(search);

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setSearch(value);
    setCoordinates(latLng);
  }


  return (
    <>
      <PlacesAutocomplete value={search} onChange={setSearch} onSelect={handleSelect} >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>{coordinates.lat}</p>
            <p>{coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Please enter an address" })} type="text"/>
          
            <div>
              {loading ? <div>Loading... </div> : null}
              { suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#F1f1f1" : "#fff"
                }
                return <div {...getSuggestionItemProps(suggestion, {style})} >
                  {suggestion.description}
                </div>
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {/* <input 
        id="address-autocomplete"
        type="text" placeholder="Enter Address"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      /> */}
    </>
  )
}