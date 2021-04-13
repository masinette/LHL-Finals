import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
//import { Input, Ul, Li, SuggestContainer } from './style';
import { Input, Ul, Li, SuggestContainer } from './style';

export default function SearchInput({
	options,
	requests,
	placeholder,
}) {
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);

	const debouncedSave = useCallback(
		debounce((newValue) => requests(newValue), 1000),
		[]
	);

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
		console.log(response);
		setResult(response)
	};
	const onClick = (value) => {
		console.log(value)
	}
	//value.API pour l'api
	return (
		<div>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				placeholder={placeholder}
			/>
			<SuggestContainer>
				<ul>
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
				</ul>
			</SuggestContainer>
		</div>
	);
}
