import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './posts/postList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to React Posts List</h1>
        </header>
        <div className={'app__body'}>
            <PostList />
        </div>
      </div>
    );
  }
}

export default App;
