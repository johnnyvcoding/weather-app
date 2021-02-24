import simplifyData from './simplify';

function kelvinToFah(value) {
	return Math.floor(value * (9 / 5) - 459.67);
}

function meterSecondsToHour(value) {
	return Math.floor(value * 2.237);
}

function imperialConverter(dataObj) {
	dataObj = simplifyData(dataObj);
	dataObj.wind = meterSecondsToHour(dataObj.wind);
	dataObj.temp = kelvinToFah(dataObj.temp);
	dataObj.feelsLike = kelvinToFah(dataObj.feelsLike);
	dataObj.minTemp = kelvinToFah(dataObj.minTemp);
	dataObj.maxTemp = kelvinToFah(dataObj.maxTemp);

	return dataObj;
}

export default imperialConverter;
