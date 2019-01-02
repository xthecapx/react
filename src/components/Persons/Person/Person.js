import React from 'react';
// Webpack handle this import
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor');
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
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

export default withClass(Person, classes.Person);
