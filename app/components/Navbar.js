import React from 'react';

function Navbar() {
	return (
		<div className='pos-f-t'>
			<div className='collapse' id='navbarToggleExternalContent'>
				<div className='bg-dark p-4'>
					<h4 className='text-white'>Hello World</h4>
					<span className='text-muted'>Created By Johnny Vazquez</span>
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
