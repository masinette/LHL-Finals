import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { LoadScript, StandaloneSearchBox  } from "@react-google-maps/api";

export default function AddressField(props) {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // value of the address input
  // const [search, setSearch] = useState("");
  // const [coordinates, setCoordinates] = useState({lat: null, lng: null});

  // async/await
  const handleSelect = async e => {
    const value = e.target.value;
    console.log(value);
    // const results = await geocodeByAddress(value);
    // const latLng = await getLatLng(results[0]);
    props.setFormData({ ...props.formData,
      // latitude: latLng.lat,
      // longitude: latLng.lng,
      address: value
    });
  }

  // // handle change funct
  // const handleChange = value => {
  //   props.setFormData({ ...props.formData,
  //     address: value
  //   });
    
  // }


  const searchOptions = {
    types: ["address"],
    componentRestrictions: { country: "ca" }
  }

  return (
    <>
      <LoadScript
        googleMapsApiKey={API_KEY}
        libraries={["places"]}
      >
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <StandaloneSearchBox>
            <Form.Control
              type="text"
              placeholder="Please enter an address"
              onChange={props.handleInput}
              onSelect={handleSelect}
              name="address"
              value={props.formData.address}
              autoComplete="off"
            />
          </StandaloneSearchBox>
          </Form.Group>
      
      {/* <PlacesAutocomplete
        value={props.formData.address}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={1000}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" onChange={props.handleInput} {...getInputProps({ placeholder: "Please enter an address", name: "address", autoComplete: "off" })} />
            </Form.Group>
            <div>
              {loading ? <div>Loading.. </div> : null}
              { suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#F1f1f1" : "#fff"
                }
                return <div {...getSuggestionItemProps(suggestion, { style })} key={suggestion.placeId} >
                  {suggestion.description}
                </div>
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete> */}
      </LoadScript>
    </>
  )
}