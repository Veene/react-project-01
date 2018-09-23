import React from 'react';

const input = (props) => {
    return (
        <input onChange={props.userChanged} value={props.currentName}></input>
    )
}
export default input;