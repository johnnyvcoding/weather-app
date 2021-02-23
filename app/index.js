import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';


//this will provide the store to our app
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<Router >
		<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
