import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

// https://github.com/css-modules/css-modules
// https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Cristian',
        age: 28
      },
      {
        id: '2',
        name: 'Daniel',
        age: 29
      },
      {
        id: '3',
        name: 'Marquez',
        age: 30
      }
    ],
    otherState: 'Some other vale',
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
        // acc.push({ ...person, name: event.input.value });
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
    let persons = null;
    let btnClass = '';

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

      btnClass = classes.red;
    }

    // Dynamic classes
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}> This is working!</p>
        {/** slow code */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default App;
