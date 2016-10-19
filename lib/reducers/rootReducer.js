// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import dashboardComponents from './componentsReducer'

const rootReducer = combineReducers({user, dashboardComponents, routing: routerReducer});

export default rootReducer;

