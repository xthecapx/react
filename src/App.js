import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Cristian', age: 28
      },
      {
        name: 'Daniel', age: 29
      },
      {
        name: 'Marquez', age: 30
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is working!</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
