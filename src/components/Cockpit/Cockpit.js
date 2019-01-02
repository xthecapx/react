import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

function Cockpit(props) {
  // Dynamic classes
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPerson) {
    btnClass = [classes.Button, classes.red].join(' ');
    console.log('******' + btnClass, classes.red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}> This is working!</p>
      {/** slow code */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </Aux>
  );
}

export default Cockpit;
