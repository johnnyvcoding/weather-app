import React from 'react';
import Navbar from './Navbar'
import Form from './Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DayWeather from './DayWeather';
import AutoComplete from './AutoComplete';
import Auto from './AutoCompletePlace'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<h1 id='name-header'>Simple Weather</h1>
			<Route path='/' component={Form} />
			{/* <AutoComplete /> */}
			{/* hello */}
			{/* <Auto /> */}
			<Route path='/singleweather' component={DayWeather} />
		</div>
	);
}

export default App;
