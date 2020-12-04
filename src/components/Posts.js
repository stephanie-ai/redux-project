import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions;

// connect will connect the components to the redux store that is provided by the provider component

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    // fetchposts function is a property
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

// we have to get the new items from the state using mSTP and then map the properties to the component and use that inside

const mSTP = state => ({
    posts: state.posts.items
});

export default connect(mSTP, { fetchPosts })(Posts);

// this is where we want to map our state to our properties and we are not doing that yet so put null
// second parameter is the fetchPosts function which just calls the fetch API request