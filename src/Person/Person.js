import React from 'react';
// Webpack handle this import
import './Person.css';

function Person(props) {
    return (
        <div className="Person">
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;