import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: "Cristian",
        age: 28
      },
      {
        id: '2',
        name: "Daniel",
        age: 29
      },
      {
        id: '3',
        name: "Marquez",
        age: 30
      }
    ],
    otherState: "Some other vale",
    showPerson: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

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

  togglePersonsHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name} 
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is working!</p>
        {/** slow code */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
