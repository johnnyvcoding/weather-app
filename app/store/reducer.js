import axios from 'axios';

const initialState = {
	weather: {},
};

//action type
const GET_WEATHER = 'GET_WEATHER';
const RESET_WEATHER = 'RESET_WEATHER';

//action creator
function setWeather(weather) {
	return {
		type: GET_WEATHER,
		weather,
	};
}

function resetWeather() {
	return {
		type: RESET_WEATHER,
	};
}

export function clearState () {
	return (dispatch) => {
		dispatch(resetWeather())
	}
}

export function fetchWeather(formData) {
	console.log('we hit here');
	console.log('this is the form data: ', formData);
	return (dispatch) => {
		try {
			let cityName = formData.cityName;
			console.log('this is the call from store', cityName);
			let data = axios.get(`/api/${cityName}`);
			console.log('we passed data');
			data.then((response) => dispatch(setWeather(response.data)));
		} catch (e) {
			console.log('went wrong in reduc');
			console.log(e);
		}
	};
}

// this is the reducer
function singleDayReducer(state = initialState, action) {
	switch (action.type) {
		case GET_WEATHER:
			return { ...state, weather: action.weather };
		case RESET_WEATHER:
			return initialState;
		default:
			return state;
	}
}

export default singleDayReducer;
