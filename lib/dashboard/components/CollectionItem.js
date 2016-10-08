// CollectionItem.js
import React from 'react';

export default class CollectionItem extends React.Component {
  render() {
  	let itemValues = this.props.itemData;
  	let values = Object.keys(itemValues).map(value => {
  		return <td key={value}>{itemValues[value]}</td>;
  	})

    return (
    	<tr>
	    	{values}
	    	<td><button onClick={() => this.props.deleteItem(this.props.itemId)}>Delete</button></td>
    	</tr>
    )
  }
}