// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js
import * as Components from "../plugins"

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.addComponent = this.addComponent.bind(this);
    this.saveComponentsToDB = this.saveComponentsToDB.bind(this);
  }

  componentDidMount() {
    
  }

  addComponent(e) {
    let pluginName = e.target.previousSibling.value;
    this.props.addComponent(pluginName);
    this.saveComponentsToDB(pluginName);
  }

  saveComponentsToDB(pluginName) {
    let componentObj = {
      name: pluginName,
      // spoofed
      // get data from plugin component
      mount_point: 'dashboard'
      // plugin_properties: []
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        console.log('saved component', xhr.responseText)
      }     
    }
    xhr.open('POST', '/api/plugin');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(componentObj));
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
        <select>
          <option value="Post">posts</option>
          <option value="Collection">collections</option> 
        </select>
        <button onClick={(e) => {this.addComponent(e)}}>Add Plugin</button>
        {injectedComponents}
    	</div>
    )
  }
}