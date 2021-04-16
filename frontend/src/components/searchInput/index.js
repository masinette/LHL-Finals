import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Input, Ul, Li, SuggestContainer } from './style';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function SearchInput({
	options,
	placeholder,
	loggedUser
}) {
	const [inputValue, setInputValue] = useState('');
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const {user, setUser} = useContext(UserContext)


	// useEffect(() => {

  //   document.addEventListener('keydown', listener);
  //   return () => {
  //     document.removeEventListener('keydown', listener);
  //   };
  // }, [loggedUser]);

    const listener = event => {
			event.preventDefault();
      if ((event.code === "Enter" || event.code === "NumpadEnter") && event.target.value) {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
				console.log("state input", inputValue, "state result", result, "EVENT?",  event.target.value)
				console.log("on submit", user)
        onSubmit(event.target.value)
      }
    };
	
	const updateValue = (newValue) => {
		setInputValue(newValue);
		const cities = ['Montreal', 'Toronto', 'Calgary', 'Vancouver'];
		const response = cities.filter(city => city.toLowerCase().indexOf(newValue.toLowerCase()) > -1 ) ;
		setResult(response)
	};
	const onClick = (value) => {

		console.log("CLICK value", value)
		setInputValue(value)
		history.push(`/search/roommates?city=${value}`)
		setInputValue("")
		setResult("")
	}
	const onSubmit = (evt, city) => {
		evt.preventDefault();
		console.log("SUBMIT", city, user, loggedUser)
		if(loggedUser.is_owner === true || loggedUser[3] === true){
			history.push(`/search/roommates?city=${city}`)
			setInputValue("")
			setResult("")
		} else {
			history.push(`/search/rooms?city=${city}`)
			setInputValue("")
			setResult("")
		}
	}

	return (
		<form onSubmit={(evt)=>onSubmit(evt, inputValue)}>
			<Input
				value={inputValue}
				onChange={(input) => updateValue(input.target.value)}
				placeholder={placeholder}
			/>

{/*  			<SuggestContainer>
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
		</form>
	);
}
