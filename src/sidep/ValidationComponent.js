import React from 'react';

const ValidationComponent = (props) => {
        return (
            <div>
                {props.textNums < 4 ?
                <h1>Text too short</h1>
                : <h1>Text long enough</h1>} 
            </div>
        )
    }
    
export default ValidationComponent;

