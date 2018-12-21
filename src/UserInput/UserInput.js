import React from 'react';

function UserInput(props) {
    const styles = {
        border: '1px solid red'
    }
    return (
        <input 
            style={styles}
            onChange={props.change} 
            value={props.user.userName}/>
    )
}

export default UserInput;