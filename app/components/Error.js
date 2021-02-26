import React from 'react';

function DisplayError(props) {
	return (
		<div className='error-cont'>
			<div className='divider'>
				<div onClick={props.handleError}>X</div>
			</div>
			<div className='error'>{props.data}</div>
		</div>
	);
}

export default DisplayError;
