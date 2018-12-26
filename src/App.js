import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Cristian",
        age: 28
      },
      {
        id: "2",
        name: "Daniel",
        age: 29
      },
      {
        id: "3",
        name: "Marquez",
        age: 30
      }
    ],
    otherState: "Some other vale",
    showPerson: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const persons = this.state.persons.reduce((acc, person) => {
      if (person.id === id) {
        acc.push({ ...person, name: event.target.value });
      } else {
        acc.push({ ...person });
      }

      return acc;
    }, []);

    debugger;

    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // Dynamic classes
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p className={classes.join(" ")}> This is working!</p>
        {/** slow code */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
