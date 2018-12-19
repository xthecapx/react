import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is working!</p>
        <Person name="Cristian" age="28" />
        <Person name="Daniel" age="29">My Hobbies: Racing</Person>
        <Person name="Marquez" age="30" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
