import simplify from './simplify';

function kelvinToCelcius(value) {
	return Math.floor(value - 273.15);
}


function metricConverter(dataObj) {
	dataObj = simplify(dataObj);
	dataObj.temp = kelvinToCelcius(dataObj.temp);
	dataObj.feelsLike = kelvinToCelcius(dataObj.feelsLike);
  dataObj.minTemp = kelvinToCelcius(dataObj.minTemp);
  dataObj.maxTemp = kelvinToCelcius(dataObj.maxTemp);

  return dataObj


}

export default metricConverter;
