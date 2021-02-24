import React from 'react';
import PlacesAutoComplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';

class Auto extends React.Component {
	constructor() {
		super();

		this.state = {
			address: '',
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleChange(value) {
		// console.log('this is the event', value);
		this.setState({ address: this.state.value + value });
		// console.log(this.state);
	}

	handleSelect(event) {
		console.log(event);
    this.setState({address: event})
	}


	render() {
		return (
			<div>
				<PlacesAutoComplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				>
					{({
						getInputProps,
						suggestions,
						getSuggestionItemProps,
						loading,
					}) => (
						<div>
							<input {...getInputProps({ placeholder: 'Type Address' })} />
							<div>
								{loading && <div>Loading...</div>}
								{suggestions.map((suggestion, index) => {
									const style = {
										backgroundColor: suggestion.active ? 'orange' : 'fff',
									};

									return (
										<div
											key={index}
											{...getSuggestionItemProps(suggestion, { style })}
										>
											{suggestion.description}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutoComplete>
			</div>
		);
	}
}

export default Auto;
