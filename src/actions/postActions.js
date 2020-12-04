import { FETCH_POSTS, NEW_POST } from './types';

// thunk middleware allows us to call the dispatch function directly so that we can make asynchronous requests
// return another function and pass in dispatch
// dispatch is kind of like a resolver in a promise, whenever we want to send data we call dispatch
// no longer use this.setState, now we want to dispatch the data to the reducer
// payload is whatever data is coming in with the type to the reducer

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}