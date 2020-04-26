import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';
import loger from 'redux-logger';

export default createStore(rootReducers, applyMiddleware(thunk, loger));
