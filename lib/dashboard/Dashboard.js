// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js
import * as Components from "../plugins"

export default class Dashboard extends React.Component {
  render() {
    // map through dashboardComponent array from the redux store
    let injectedComponents = this.props.dashboardComponents.map(component => {
      // lookup the component from plugin/index.js by referencing with 
      // the component title, that is stored in the dashboardComponent array
      let ComponentElem = Components[component];
      // create the element
      return <ComponentElem />
    })

    // render all of our injected components onto the dashboard
    return (
    	<div>
	    	<h1>synthesis dashboard</h1>
        {injectedComponents}
    	</div>
    )
  }
}