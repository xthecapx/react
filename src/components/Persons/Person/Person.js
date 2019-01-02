import React from 'react';
import PropTypes from 'prop-types';
// Webpack handle this import
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor');
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <>
        <p>{this.props.authenticated ? 'authenticated' : ' not Authenticated'}</p>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input ref={this.inputElement} type='text' onChange={this.props.changed} value={this.props.name} />
      </>
    );

    // return [
    //   <p key='1' onClick={this.props.click}>
    //     I'm {this.props.name} and I am {this.props.age} years old!
    //   </p>,
    //   <p key='2'> {this.props.children}</p>,

    //   <input key='3' type='text' onChange={this.props.changed} value={this.props.name} />
    // ];
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
