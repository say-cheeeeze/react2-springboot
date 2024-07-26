import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [ hello, setHello ] = useState( '' );
	
	useEffect( () => {
		axios.get( '/api/hello' )
			.then( response => {
				setHello( response.data );
			} )
			.catch( error => console.error( error ) )
	}, [] );
	
	
	return (
		<div>
			<h1>response.data => { hello }</h1>
		</div>
	);
}

export default App;
