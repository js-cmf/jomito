// Collection.js
import React from 'react';
import CollectionItem from '../components/CollectionItem';

export default class Collection extends React.Component {
  render() {
  	let items = this.props.collectionItems.map(item => {
  		return <CollectionItem key={item._id} itemId={item._id} itemData={item.item_properties[0]} deleteItem={this.props.deleteItem} />
  	});

  	let propFields = this.props.collection.collection_properties;
  	
  	let fields = Object.keys(propFields[0]).map(field => {
  		return <th key={field}>{field}</th>;
  	});

  	let addItemInputs = Object.keys(propFields[0]).map(field => {
  		return <input key={field} name={field} placeholder={field} />;
  	});

    return (
    	<div>
	    	<h4>{this.props.collection.title}</h4>
	    	<table className="table">
		    	<thead>
		    		<tr className="collection-header">{ fields }</tr>
		    	</thead>
		    	<tbody>
		    		{ items }
		    	</tbody>
	    	</table>
	    	<form onSubmit={(e) => this.props.addItem(e, this.props.collection._id)}>
	    		{addItemInputs}
	    		<button type="submit">Add item</button>
	    	</form>
    	</div>
    )
  }
}