import React, { PureComponent } from 'react';
import Person from './Person/Person';

// More tools / Rendering / Paint flashing
class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor');
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }

  // extends PureComponent: do the shallow state validations
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);

    return nextState.persons !== this.state.persons || nextState.changed !== this.state.changed || nextState.clicked !== this.state.clicked;
    // return true;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }

  render() {
    console.log('[Persons.js] Inside render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          position={index}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
