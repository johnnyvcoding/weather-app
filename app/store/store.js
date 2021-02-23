import {createStore ,applyMiddleware} from 'redux';
import dummyReducer from './reducer';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'


// this is the store

const store = createStore(dummyReducer, applyMiddleware(thunkMiddleware, createLogger()))

export default store;
