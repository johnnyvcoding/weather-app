import React from 'react';
import { connect } from 'react-redux';
import {showWeather} from '../store/reducer';



function mapState(state) {
	console.log('state from: ', state);
	return {
		data: state.weather,
	};
}

// function mapDispatch(dispatch) {
//   return {
//     showWeather: () => dispatch(showWeather())
//   }
// }

class DayWeather extends React.Component {
  componentDidMount() {
  console.log('these are the props, ', this.props)
  }
  render() {
    console.log('call from day: ', this.props)
    return (
			<div className='single-day-cont'>
				<div className='day-cont'>
					<div className='city-name'>
						<h1>City Name</h1>
					</div>
					<div className='weather-desc'>
						<h2>Sunny</h2>
					</div>
					<div className='temp'>
						<h1>81</h1>
					</div>
				</div>
			</div>
		);
  }
}
export default connect(mapState, null)(DayWeather);
