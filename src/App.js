import React, { Component } from 'react';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <>
        <h1>Welcome</h1>
        <PostForm />
        <Posts />
      </>
    )
  }
}


export default App;
