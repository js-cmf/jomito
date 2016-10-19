import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// containers and components
import Main from './Main';
import ContentPage from './content-page/Content';
import Dashboard from './dashboard/Dashboard';
import Login from './content-page/login/Login';

// attach point
const appRoot = document.getElementById('root');

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Route>
		</Router>
	</Provider>
), appRoot);
