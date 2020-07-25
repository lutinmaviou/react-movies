import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

const appReducer = combineReducers(reducers);

const allMiddleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    allMiddleware.push(logger);
}

export const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(...allMiddleware))
);