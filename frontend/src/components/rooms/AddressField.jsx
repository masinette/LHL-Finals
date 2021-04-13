import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";


export default function AddressField(props) {
  // value of the address input
  const [search, setSearch] = useState("");
  const [coordinates, setCoordinates] = useState({lat: null, lng: null});

  // returns array of predictions
  // const predictions = useAddressPrediction(search);

  // // Promises
  // const handleSelect = value => {
  //   return new Promise((res, rej) => {
  //     res(() => {
  //       const results = geocodeByAddress(value);
  //       return results;
  //     })
  //   })
  // }
  

  // handleSelect
  //   .then((results, value) => {
  //     console.log(results)
  //     const latLng = getLatLng(results[0])
  //     setSearch(value);
  //     setCoordinates(latLng);
  //   })


  // async/await
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    console.log(results);
    const latLng = await getLatLng(results[0]);
    setSearch(value);
    setCoordinates(latLng);
  }


  return (
    <>
      <PlacesAutocomplete value={search} onChange={setSearch} onSelect={handleSelect} >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Lat, Lng: {coordinates.lat}, {coordinates.lng}</p>

            {/* <input {...getInputProps({ placeholder: "Please enter an address" })} type="text"/> */}
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" {...getInputProps({ placeholder: "Please enter an address", name: "room_address" })} />
            </Form.Group>
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