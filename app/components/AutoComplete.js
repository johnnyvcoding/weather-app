import React from 'react';
import PlacesAutoComplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';

function AutoComplete() {
	const [address, setAddress] = React.useState('');
	const handleSelect = (value) => {};

	return (
		<div>
			<PlacesAutoComplete
				value={address}
				onChange={setAddress}
				onSelect={handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input {...getInputProps({ placeholder: 'Type Address' })} />
						<div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) =>{
                const style = {
                  backgroundColor: suggestion.active ? "orange" : "fff"
                }
                console.log(style)

                return <div key={index} {...getSuggestionItemProps(suggestion, {style} )}>{suggestion.description}</div>
              })}
              </div>
					</div>
				)}
			</PlacesAutoComplete>
		</div>
	);
}

export default AutoComplete;
