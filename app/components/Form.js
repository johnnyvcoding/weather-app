import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, clearState } from '../store/reducer';
import DayWeather from './DayWeather';
import Auto from './AutoCompletePlace';
import DisplayError from './Error';

function mapState(state) {
	return {
		weather: state.weather,
	};
}

function mapDispatch(dispatch) {
	return {
		fetchWeather: (formData) => dispatch(fetchWeather(formData)),
		clearState: () => dispatch(clearState()),
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
		this.handleInput = this.handleInput.bind(this);
		this.handleError = this.handleError.bind(this);

		this.refresh = false;
	}

	handleInput(input) {
		this.setState({ cityName: input });
	}
	handleError(event) {
		this.props.clearState();
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
							<Auto
								selectFunc={this.handleAuto}
								handleInput={this.handleInput}
							/>

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
			//checking if the data we get back form the server is reliable
		} else if (Object.keys(this.props.weather).length > 3) {
			return (
				<div>
					<form
						className='input-form'
						onSubmit={this.handleSubmit}
						autoComplete='off'
					>
						<div className='btn-input'>
							<Auto
								selectFunc={this.handleAuto}
								handleInput={this.handleInput}
							/>

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
					<DayWeather
						weather={this.props.weather}
						measure={this.state.measurement}
					/>
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
						<div className='btn-input'>
							<Auto
								selectFunc={this.handleAuto}
								handleInput={this.handleInput}
							/>

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
					<DisplayError
						data={this.props.weather.data}
						handleError={this.handleError}
					/>
				</div>
			);
		}
	}
}

export default connect(mapState, mapDispatch)(Form);
