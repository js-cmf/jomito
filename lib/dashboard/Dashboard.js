// Dashboard.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

// import DashboardPosts from './post/containers/Posts';
// const DashboardData = require('./collection/containers/Data');
import * as Components from "../plugins"

// const DashboardData = DashboardData;

export default class Dashboard extends React.Component {
  render() {
    console.log('dashboard', this.props.dashboardComponents)

    let injectedComponents = this.props.dashboardComponents.map(component => {
      let ComponentElem = Components[component];
      return <ComponentElem />
    })

    return (
    	<div>
	    	<h1>synthesis dashboard</h1>
        {injectedComponents}
    	</div>
    )
  }
}