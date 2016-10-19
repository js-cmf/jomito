// componentsReducer.js

function dashboardComponents(state = [], action) {
	switch(action.type) {
		case 'ADD_COMPONENT' :
			let updatedState = state.slice();
			updatedState.push(action.component)
			return updatedState;
		default:
			return state;
	}	
}

export default dashboardComponents;