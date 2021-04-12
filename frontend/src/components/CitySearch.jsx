import React from "react";
import { useState } from "react";
//import './CitySearch.scss'

export default function CitySearch(props) {
  //const [cityId, setCityId] = useState(null)
  const [cityId, setCityId] = useState({
    activeSuggestion: 0,
    suggestions: [],
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: ''
  })
  
/*   function onChange(event) {
    setCityId = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.value
    }
  } */

  const onChange = (e) => {
    const suggestions  = props.suggestions;
    console.log("OBJECTION!", suggestions)
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setCityId({...cityId,
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    })
/*     this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    }); */
  };

  function onKeyDown(e) {
    const { activeSuggestion, filteredSuggestions } = cityId;

    if (e.keyCode === 13) {
      setCityId({...cityId,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      })
    }
    else if (e.keyCode === 38) {
      if (cityId.activeSuggestion === 0) {
        return;
      }

      setCityId({ ...cityId, activeSuggestion: activeSuggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (cityId.activeSuggestion - 1 === cityId.filteredSuggestions.length) {
        return;
      }

      setCityId({ ...cityId, activeSuggestion: activeSuggestion + 1 });
    }

    
/*     setCityId = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.target.value
    } */
  }
  function onClick(e) {
    setCityId({...cityId,
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.value
    })
  }

  let suggestionsListComponent;
    if (cityId.showSuggestions && cityId.userInput) {
      if (cityId.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {cityId.filteredSuggestions.map((suggestion, index) => {
              
              return (
                <li  key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions!</em>
          </div>
        );
      }
    }

  return (
    <div>
      <React.Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={cityId.userInput}
        />
        {suggestionsListComponent}
      </React.Fragment>
    </div>
  );
}
