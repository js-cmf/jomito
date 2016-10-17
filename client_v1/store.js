// store.js
import { createStore, compose } from 'redux';
import reducer from '.reducers/index';

const store = createStore(reducers);

export default store;