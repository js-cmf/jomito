import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// containers and components
import Main from './Main';
import ContentPage from './content-page/Content';
import Dashboard from './dashboard/Dashboard';
import DashboardPosts from './dashboard/post/containers/Posts';
import DashboardData from './dashboard/collection/containers/Data';
import Login from './content-page/login/Login';

// attach point
const appRoot = document.getElementById('root');

// let dashboardComponents = [
// 	<Route path="/dashboard/data" component={DashboardData} />,
// 	<Route path="/dashboard/posts" component={DashboardPosts} />
// ]

// let renderedDashboard = dashboardComponents.map(component => {
// 	return component;
// })


render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard}>
					
				</Route>
			</Route>
		</Router>
	</Provider>
), appRoot);
