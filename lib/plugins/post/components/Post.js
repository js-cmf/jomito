// Post.js
import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
  		<div key={this.props.postData._id}>
  			<h4>{ this.props.postData.title }</h4>
  			<p>{ this.props.postData.body }</p>
  			<br />
  		</div>
    )
  }
}
