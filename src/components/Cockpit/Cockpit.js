import React from 'react';
import classes from './Cockpit.css';

function Cockpit(props) {
  // Dynamic classes
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}> This is working!</p>
      {/** slow code */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
}

export default Cockpit;
