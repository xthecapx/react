import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    return (
        <div className="UserOutput">
            <p>{props.user.userName}</p>
            <p>{props.user.pass}</p>
        </div>
    )
}

export default UserOutput;