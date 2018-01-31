import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React TODO List</h1>
        </header>
        <div className={'body'}>
            <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
