// evaluate any actions that are committed e.g. fetching a post or creating a new post

// for actions, we create types which are basically just constants

import { FETCH_POSTS, NEW_POST } from '../actions/types';

// create initial state here
const initialState = {
    items: [],  // all the posts we get
    item: {}    // single post that we add
}

// create function 
export default function(state = initialState, action) {
    // evaluates what type we are dealing with
    // action will be an object
    // return the current state with the spread operator
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            // return a new item and push it onto the post property inside of the post component
            // the payload is the single post
            return  {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}