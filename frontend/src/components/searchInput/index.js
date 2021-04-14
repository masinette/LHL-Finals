import React, { useState, useCallback, useEffect } from 'react';
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


	
	const updateValue = (newValue) => {
		setInputValue(newValue);
		const cities = ['Montreal', 'Toronto', 'Calgary', 'Vancouver'];
		const response = cities.filter(city => city.toLowerCase().indexOf(newValue.toLowerCase()) > -1 ) ;
		setResult(response)
	};
	const onClick = (value) => {

		console.log("CLICK value", value)
		setInputValue(value)
	  window.location.assign( `/users/${value}` )
		setInputValue("")
		setResult("")
	}
	const onSubmit = (city) => {
		console.log("SUBMIT", city)
		history.push(`/users/${city}`)
		setInputValue("")
		setResult("")
		window.location.assign( `/users/${city}` )
	}

	return (
		<div>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				onSubmit={onSubmit}
				placeholder={placeholder}
			/>
{/* 
 			<SuggestContainer>
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
			</SuggestContainer>  */}
		</div>
	);
}
