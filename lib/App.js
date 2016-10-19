// App.js
import React from 'react';

// import components
import NavBar from './navbar/components/Navbar'

export default class App extends React.Component {
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
