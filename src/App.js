import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <>
        <h1>Welcome</h1>
        <PostForm />
        <Posts />
      </>
      </Provider>
    )
  }
}


export default App;