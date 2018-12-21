import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Cristian",
        age: 28
      },
      {
        name: "Daniel",
        age: 29
      },
      {
        name: "Marquez",
        age: 30
      }
    ],
    otherState: "Some other vale"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        },
        {
          name: "Daniel",
          age: 29
        },
        {
          name: "Marquez",
          age: 30
        }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Cristian",
          age: 18
        },
        {
          name: event.target.value,
          age: 19
        },
        {
          name: "Marquez",
          age: 10
        }
      ]
    }); 
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is working!</p>
        {/** slow code */}
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Cris*')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Cris!!')}
          changed={this.nameChangedHandler}>
          My Hobbies: Racing
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
