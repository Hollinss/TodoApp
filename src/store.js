import { createStore, combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { todos } from './todos/reducers.js';

const reducers = { todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);