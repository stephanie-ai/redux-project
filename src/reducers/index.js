// combine all of the reducers and there is a function to do this

import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
})