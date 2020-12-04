// combine all of the reducers and there is a function to do this

import { combineReducers } from 'redux';
impore postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
})