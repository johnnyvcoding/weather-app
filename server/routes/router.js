const axios = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

let apiKey = process.env.API_KEY || 'your api';

//call to OpenWeatherApi

router.get('/:cityName', async (req, res, next) => {
	let cityName = req.params.cityName;
	console.log('this is the city name', cityName);

	try {
		let { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
		);

		res.json(data);
	} catch (e) {
		console.log('Oops Something Wrong: ', e);
		let error = {
			data: 'The location you have provided is incorrect or it is not a city.',
			badData: true,
		};

		res.json(error);

		// next(e);
	}
});

// router.get('/days/:cityName', async (req, res, next) => {
// 	let cityName = req.params.cityName;
// 	console.log('this is the city name', cityName);

// 	try {
// 		let { data } = await axios.get(
// 			`http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${apiKey}`
// 		);

// 		res.json(data);
// 	} catch (e) {
// 		console.log('Oops Something Wrong: ', e);
// 		next(e);
// 	}
// });

module.exports = router;
