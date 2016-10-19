// App.js
import React from 'react';

// import components
import NavBar from './navbar/components/Navbar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getComponents = this.getComponents.bind(this);
  }

  componentDidMount() {
    console.log('mounting app')
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        this.getComponents(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/collections');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  }

  getComponents() {
    this.props.getComponents();
  }

  render() {
    return (
    	<div>
    		<NavBar hasToken={this.props.user} />
    		<div className="main-container">
					{React.cloneElement(this.props.children, this.props)}
				</div>
    	</div>
    )
  }
}
