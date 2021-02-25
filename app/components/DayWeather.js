import React from 'react';
import imperial from '../conversions/imperial';
import metric from '../conversions/metric';

class DayWeather extends React.Component {
	constructor() {
		super();
		this.state = {
			measurement: '',
			imperialData: {},
			metricData: {},
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.measure !== prevProps.measure) {
			if (
				this.props.measure === 'celcius' &&
				Object.keys(this.props.weather).length !== 0
			) {
				let dataReturned = metric(this.props.weather);
				this.setState({ metricData: dataReturned });
			} else if (Object.keys(this.props.weather).length !== 0) {
				let dataReturned = imperial(this.props.weather);
				this.setState({ imperialData: dataReturned });
			}
		}

		if (this.props.weather.name !== prevProps.weather.name) {
			let metricData = metric(this.props.weather);
			this.setState({ metricData: metricData });

			let imperialData = imperial(this.props.weather);
			this.setState({ imperialData: imperialData });
		}


	}

	componentDidMount() {
		if (
			this.props.measure === 'celcius' &&
			Object.keys(this.props.weather).length !== 0
		) {
			let dataReturned = metric(this.props.weather);
			this.setState({ metricData: dataReturned });
		} else if (Object.keys(this.props.weather).length !== 0) {
			let dataReturned = imperial(this.props.weather);
			this.setState({ imperialData: dataReturned });
		}
	}

	render() {
		if (this.props.measure === 'fahrenheit') {
			const data = this.state.imperialData;
			return (
				<div className='single-day-cont'>
					<div className='day-cont'>
						<div className='city-name'>
							<h1>{data.cityName}</h1>
						</div>
						<div className='weather-desc'>
							<h2>{data.mainDescription}</h2>
						</div>
						<div className='temp'>
							<span>{data.temp}&#176;</span>
						</div>
						<div className='absolute-temps'>
							<span>High: {data.maxTemp}&#176; </span>
							<span> Low: {data.minTemp}&#176;</span>
						</div>
						<div className='feels-like'>
							<span>Feels Like: {data.maxTemp}&#176;</span>
						</div>
						<div className='wind-speed'>
							<span>Wind Speed: {data.wind} mph</span>
						</div>
					</div>
				</div>
			);
		} else {
			const data = this.state.metricData;
			return (
				<div className='single-day-cont'>
					<div className='day-cont'>
						<div className='city-name'>
							<h1>{data.cityName}</h1>
						</div>
						<div className='weather-desc'>
							<h2>{data.mainDescription}</h2>
						</div>
						<div className='temp'>
							<span>{data.temp}&#176;</span>
						</div>
						<div className='absolute-temps'>
							<span>High: {data.maxTemp}&#176; </span>
							<span> Low: {data.minTemp}&#176;</span>
						</div>
						<div className='feels-like'>
							<span>Feels Like: {data.maxTemp}&#176;</span>
						</div>
						<div className='wind-speed'>
							<span>Wind Speed: {data.wind} meters/sec</span>
						</div>
					</div>
				</div>
			);
		}
	}
}
export default DayWeather;
