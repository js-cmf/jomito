// CollectionItem.js
import React from 'react';

export default class CollectionItem extends React.Component {
  render() {
  	let itemValues = this.props.itemData;
  	let properties = itemValues.map((property, index) => {
      let key = Object.keys(property);
  		return <td key={index}>{property[key]}</td>;
  	})

    return (
    	<tr>
	    	{properties}
	    	<td><button onClick={() => this.props.deleteItem(this.props.itemId)}>Delete</button></td>
    	</tr>
    )
  }
}