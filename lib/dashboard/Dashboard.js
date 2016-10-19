// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js
import * as Components from "../plugins"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.addComponent = this.addComponent.bind(this);
  }

  componentDidMount() {
    console.log(this.props)     
  }

  addComponent(componentName) {
    this.props.addComponent(componentName);
  }

  render() {
    console.log(this.props.dashboardComponents)
    // map through dashboardComponent array from the redux store
    let injectedComponents = this.props.dashboardComponents.map((component, i) => {
      // lookup the component from plugin/index.js by referencing with 
      // the component title, that is stored in the dashboardComponent array
      let ComponentElem = Components[component];
      // create the element
      return <ComponentElem key={i} />
    })

    // render all of our injected components onto the dashboard
    return (
    	<div>
	    	<h1>synthesis dashboard</h1>
        <button onClick={() => {this.addComponent('Post')}}>add posts plugin</button>
        <button onClick={() => {this.addComponent('Collection')}}>add collection plugin</button> 
        {injectedComponents}
    	</div>
    )
  }
}