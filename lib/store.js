// store.js
import React from 'react';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import DashboardPosts from './dashboard/post/containers/Posts';
// import DashboardData from './dashboard/collection/containers/Data';

// import root reducer
import rootReducer from './rootReducer';

let userData = localStorage.getItem('token');

let dashboardComponents = [
	'Collection'
]

const defaultState = {
	user: userData,
	dashboardComponents: dashboardComponents
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;