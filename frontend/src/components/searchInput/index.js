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
				console.log("state input", inputValue, "state result", result)
        onSubmit("Montreal")
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
	const onClick = (value) => {
		console.log(value)
		setInputValue(value)
		// e.preventDefault();
		// window.location.assign( '/about' )
	}
	const onSubmit = (city) => {
		console.log("SUBMIT", city)
		console.log("state input", inputValue, "state result", result)
		let patate = "Toronto";
		//e.preventDefault();
		history.push(`/users/${city}`)
		//window.location.assign( '/about/${inputValue}' )
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

{/* 			<SuggestContainer>
				<Ul>
					{loading && <Li>Loading...</Li>}
					{result && result.length > 0 &&
						!loading &&
						result.map((value, index) => (
							<Li
								key={`${value}-${index}`}
								onClick={() => onClick(value)}
							>
								{value}
							</Li>
						))}
				</Ul>
			</SuggestContainer> */}

		</div>
	);
}
