// CollectionItem.js
import React from 'react';

export default class CollectionItem extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      // collection_items: this.props.collectionItems
    }
  }

  render() {
  	let itemValues = this.props.itemData;
  	let values = Object.keys(itemValues).map(value => {
  		return <td key={value}>{itemValues[value]}</td>;
  	})

    return (
    	<tr>
	    	{values}
    	</tr>
    )
  }
}