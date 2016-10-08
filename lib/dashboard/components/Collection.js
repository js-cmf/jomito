// Collection.js
import React from 'react';
import CollectionItem from '../components/CollectionItem';

export default class Collection extends React.Component {
  render() {
  	let items = this.props.collectionItems.map(item => {
  		return <CollectionItem key={item._id} itemId={item._id} itemData={item.item_properties} deleteItem={this.props.deleteItem} />
  	});

  	let propFields = this.props.collection.collection_properties;
  	
  	let fields = propFields.map(field => {
      let fieldName = Object.keys(field);
  		return <th key={fieldName}>{fieldName}</th>;
  	});

  	let addItemInputs = propFields.map(field => {
      let fieldName = Object.keys(field);
  		return <input key={fieldName} name={fieldName} placeholder={fieldName} />;
  	});

    return (
    	<div>
	    	<h4>{this.props.collection.title}</h4>
        <button onClick={(e) => this.props.deleteCollection(e, this.props.collection._id)}>delete collection</button>
	    	<table className="table">
		    	<thead>
		    		<tr className="collection-header">{ fields }</tr>
		    	</thead>
		    	<tbody>
		    		{ items }
		    	</tbody>
	    	</table>
	    	<form onSubmit={(e) => this.props.addItem(e, this.props.collection._id)}>
	    		New item {addItemInputs}
	    		<button type="submit">Add item</button>
	    	</form>
        <br />
    	</div>
    )
  }
}