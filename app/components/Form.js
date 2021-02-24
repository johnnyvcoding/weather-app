import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWeather } from '../store/reducer';
import DayWeather from './DayWeather';
import Auto from './AutoCompletePlace';
import imperial from '../conversions/imperial';
import metric from '../conversions/metric';

function mapState(state) {
	return {
		weather: state.weather,
	};
}

function mapDispatch(dispatch) {
	return {
		fetchWeather: (formData) => dispatch(fetchWeather(formData)),
	};
}

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: '',
			measurement: 'fahrenheit',
			data: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAuto = this.handleAuto.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state);
	}

	handleAuto(input) {
		this.setState({ cityName: input });
	}

	render() {
		if (Object.keys(this.props.weather).length === 0) {
			return (
				<div>
					<form
						className='input-form'
						onSubmit={this.handleSubmit}
						autoComplete='off'
					>
						<div className='btn-input'>
							<Auto selectFunc={this.handleAuto} />

							<div className='button-cont'>
								<button type='submit' onSubmit={this.handleSubmit}>
									Submit
								</button>
							</div>
						</div>

						<select
							name='measurement'
							className='form-select measurement'
							aria-label='Default select example'
							onChange={this.handleChange}
						>
							<option defaultValue value='fahrenheit'>
								Fahrenheit
							</option>
							<option value='celcius'>Celcius</option>
						</select>
					</form>
				</div>
			);
		} else {
			return (
				<div>
					<form
						className='input-form'
						onSubmit={this.handleSubmit}
						autoComplete='off'
					>
						<Auto selectFunc={this.handleAuto} />

						<div className='button-cont'>
							<button type='submit'>Submit</button>
						</div>
						<select
							name='measurement'
							className='form-select measurement'
							aria-label='Default select example'
							onChange={this.handleChange}
						>
							<option defaultValue value='fahrenheit'>
								Fahrenheit
							</option>
							<option value='celcius'>Celcius</option>
						</select>
					</form>
					<DayWeather
						weather={this.props.weather}
						measure={this.state.measurement}
					/>
				</div>
			);
		}
	}
}

export default connect(mapState, mapDispatch)(Form);
