import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWeather } from '../store/reducer';

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
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	render() {
		console.log('data from form: ', this.props)
		return (
			<form className='input-form' onSubmit={this.handleSubmit}>
				<input
					id='input'
					type='text'
					name='cityName'
					placeholder="Enter Your City's Name"
					onChange={this.handleChange}
				/>

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
		);
	}
}

export default connect(mapState, mapDispatch)(Form);
