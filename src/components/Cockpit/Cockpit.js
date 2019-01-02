import React from 'react';
import classes from './Cockpit.css';

function Cockpit(props) {
  // Dynamic classes
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPerson) {
    btnClass = [classes.Button, classes.red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  // React 16.2 you can use fragments so you can re
  return (
    <>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}> This is working!</p>
      {/** slow code */}
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      <button onClick={props.login}>Log in</button>
    </>
  );
}

// Add the behavior of PureComponent to Functional components
export default React.memo(Cockpit);
