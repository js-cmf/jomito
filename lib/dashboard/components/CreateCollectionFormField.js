// CreateCollectionFormField.js
import React from 'react';

export default class CreateCollectionFormField extends React.Component {	
	render() {
    return (
    	<fieldset onChange={(e) => this.props.updateProps(e, this.props.fieldIndex)}>
				<input type="text" name="collection-property" placeholder="Collection property" />
				<select id="collection-property-type">
				  <option value="string">text</option>
				  <option value="number">number</option>
				  <option value="boolean">boolean</option>
				</select>
			</fieldset>
    )
	}
}