import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";


export default function AddressField(props) {
  // value of the address input
  // const [search, setSearch] = useState("");
  // const [coordinates, setCoordinates] = useState({lat: null, lng: null});

  // async/await
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    props.setSearch(value);
    props.setFormData({ ...props.formData,
      latitude: latLng.lat,
      longitude: latLng.lng,
      address: value
    });
  }

  const searchOptions = {
    types: ["address"],
    componentRestrictions: { country: "ca" }
  }

  return (
    <>
      <PlacesAutocomplete
        value={props.search}
        onChange={props.setSearch}
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
              {loading ? <div>Loading... </div> : null}
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
      </PlacesAutocomplete>
    </>
  )
}