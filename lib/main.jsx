import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ContentPage from './content-page/containers/Content';
import Dashboard from './dashboard/Dashboard';
import DashboardPosts from './dashboard/containers/Posts';
import DashboardData from './dashboard/containers/Data';

const appRoot = document.getElementById('root');

render((
	<Router history={hashHistory}>
		<Route path="/" component={ContentPage} />
		<Route path="/dashboard" component={Dashboard}>
			<Route path="/dashboard/data" component={DashboardData} />
			<Route path="/dashboard/posts" component={DashboardPosts} />
		</Route>
	</Router>
), appRoot);
