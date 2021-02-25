import axios from 'axios';

const initialState = {
	weather: {},
};

//action type
const GET_WEATHER = 'GET_WEATHER';
const DISPLAY_WEATHER = 'DISPLAY_WEATHER';

//action creator
function setWeather(weather) {
	return {
		type: GET_WEATHER,
		weather,
	};
}

function displayWeather(data) {
	return {
		type: DISPLAY_WEATHER,
		data,
	};
}

// export function showWeather() {
// 	return (dispatch) => {
// 		dispatch(displayWeather());
// 	};
// }

export function fetchWeather(formData) {
	console.log('we hit here');
	console.log('this is the form data: ', formData)
	return (dispatch) => {
		try {
			let cityName = formData.cityName;
			console.log('this is the call from store', cityName)
			let data = axios.get(`/api/${cityName}`);
			data.then((response) => dispatch(setWeather(response.data)));
			// data.then((response) => dispatch(displayWeather(response.data)))
		} catch (e) {
			console.log(e);
		}
	};
}

// this is the reducer
function singleDayReducer(state = initialState, action) {
	switch (action.type) {
		case GET_WEATHER:
			return { ...state, weather: action.weather };
		case DISPLAY_WEATHER:
			console.log('this ccall from red, ', state);
			return state;
		default:
			return state;
	}
}

export default singleDayReducer;
