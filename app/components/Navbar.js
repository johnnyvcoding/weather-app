import React from 'react';

function Navbar() {
	return (
		<div className='pos-f-t'>
			<div className='collapse' id='navbarToggleExternalContent'>
				<div className='bg-dark p-4'>
					<h4 className='text-white'>Te quiero mucho, darianita &#60;3</h4>
					<span className='text-muted'>Thank you for being such an amazing person</span>
				</div>
			</div>
			<nav className='navbar navbar-dark bg-dark'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarToggleExternalContent'
					aria-controls='navbarToggleExternalContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
			</nav>
		</div>
	);
}

export default Navbar;
