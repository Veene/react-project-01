import React from 'react';
import './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {
    let buttonOption = "button"
    let classes = [];
    if(props.persons.length <= 2){
      classes.push('red'); //classes will be red ['red']
    }
    if(props.persons.length <= 1) {
      classes.push('bold');
    }
    if(props.showPersons){
        buttonOption = "button2"
    }
    
    return(
        <Auxiliary>
            <h1>Hi Im a React App!!</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={buttonOption} 
            onClick={props.toggle}>Toggle Persons</button>
        </Auxiliary>
    );
}
export default cockpit;