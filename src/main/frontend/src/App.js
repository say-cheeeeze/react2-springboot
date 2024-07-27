import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Router from "./Router";

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
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/user">User</Link>
				</li>
				<li>
					<Link to="/admin">준비중인 페이지</Link>
				</li>
			</ul>
			<Router/>
		</div>
	);
}

export default App;
