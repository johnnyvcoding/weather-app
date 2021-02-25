import React from 'react';

function displayError(props) {
	return (
		<div className='error-cont'>
			<div className='error'>{props.data}</div>
		</div>
	);
}

export default displayError;
