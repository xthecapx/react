import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import User from '../components/User/User';
import withClass from '../hoc/withClass';

// https://github.com/css-modules/css-modules
// https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
// More tools / Rendering / Paint flashing
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor');
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // Same as extend PureComponent
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);

    return nextState.persons !== this.state.persons || nextState.showPerson !== this.state.showPerson;
    // return true;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

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
    showPerson: false,
    showUserComponent: true,
    toggleClicked: 0
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

    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  removeUserHandler = () => {
    this.setState((prevState, props) => {
      return {
        showUserComponent: false,
        toggleClicked: prevState + 1
      };
    });
  };

  render() {
    console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <>
        <button
          onClick={() => {
            this.setState({ showPerson: true });
          }}>
          Show person (true)
        </button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonsHandler}
        />
        {persons}
        {this.state.showUserComponent ? <User /> : null}
        <button onClick={this.removeUserHandler}>Remove User Component</button>
      </>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
  }
}

export default withClass(App, classes.App);
