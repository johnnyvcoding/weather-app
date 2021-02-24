
// takes the relevant data from the weather api and makes the names easier to work with
function simplifyData(dataObj) {
  return {
    cityName: dataObj.name,
    wind: dataObj.wind.speed,
    temp: dataObj.main.temp,
    feelsLike: dataObj.main.feels_like,
    mainDescription: dataObj.weather[0].main,
    description: dataObj.weather[0].description,
    minTemp: dataObj.main.temp_min,
    maxTemp: dataObj.main.temp_max,
    pressure: dataObj.main.pressure,
    humidity: dataObj.main.humidity
  }

}

export default simplifyData;
