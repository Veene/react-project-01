import React from 'react';

const output = (props) => {
    const style = {
        backgroundColor: 'aqua',
        border: '2px solid black',
        width: '250px',
        margin: '20px auto',
        padding: '10px'
    }
    return (
        <div style={style}>
            <p>RANDOM TEXT</p>
            <p>RANDOM TEXT. HERE COMES {props.username}</p>
        </div>
    )
}
export default output;