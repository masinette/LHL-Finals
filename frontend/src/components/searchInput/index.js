import React, { useState, useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
//import { Input, Ul, Li, SuggestContainer } from './style';
import { Input, Ul, Li, SuggestContainer } from './style';
import { useHistory } from 'react-router-dom';

export default function SearchInput({
	options,
	placeholder,
}) {
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();


	useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
				console.log("state input", inputValue, "state result", result, "EVENT?",  event.target.value)
        onSubmit(event.target.value)
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

	//With api requests
/* 	const updateValue = (newValue) => {
		setInputValue(newValue);
		//axios.get(`https://api.publicapis.org/entries?title=${newValue}`)
		axios.get(`https://api.publicapis.org/entries?title=${newValue}`)
			.then((response) => {
				console.log("RESPONSE", response)
				setResult(response.data.entries)
			});
	}; */

	
	const updateValue = (newValue) => {
		setInputValue(newValue);
		//axios.get(`https://api.publicapis.org/entries?title=${newValue}`)
		const cities = ['Montreal', 'Toronto', 'Calgary', 'Vancouver'];
		const response = cities.filter(city => city.toLowerCase().indexOf(newValue.toLowerCase()) > -1 ) ;
		//console.log(response);
		setResult(response)
	};
	const onClick = (e,value) => {
		//let value = inputValue;
		//e.preventDefault();
		console.log("CLICK value", value)
		setInputValue(value)
		//history.push(`/users/${value}`)
		setInputValue("")
		setResult("")
		//history.push(`/users/Montreal`)
		// e.preventDefault();
	 window.location.assign( `/users/${value}` )
	}
	const onSubmit = (city) => {
		console.log("SUBMIT", city)
		history.push(`/users/${city}`)
		setInputValue("")
		setResult("")
		window.location.assign( `/users/${city}` )
	}
	//value.API pour l'api
	return (
		<div>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				onSubmit={onSubmit}
				placeholder={placeholder}
			/>

			<SuggestContainer>
				<Ul>
					{loading && <Li>Loading...</Li>}
					{result && result.length > 0 &&
						!loading &&
						result.map((value, index) => (
							<Li
								key={`${value}-${index}`}
								onClick={(e) => onClick(e, value)}
								/* onClick={() => onClick} */
							>
								{value}
							</Li>
						))}
				</Ul>
			</SuggestContainer>

		</div>
	);
}
