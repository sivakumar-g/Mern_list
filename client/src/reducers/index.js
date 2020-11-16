import itemReducer from './itemReducer';

const { combineReducers } = require("redux");


export default combineReducers({
    item : itemReducer
})