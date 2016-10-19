// Dashboard.js
import React from 'react';
import md5 from 'md5';
import { Link } from 'react-router';

import * as Components from "../plugins"

export default class Dashboard extends React.Component {
  render() {
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