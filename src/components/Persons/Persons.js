import React from 'react';
import Person from '../Person/Person'; 

const persons = (props) => {
    return(
        props.persons.map( ( person, index ) => {
        return <Person  //outer function requires the ID when you map in React
        // to give index to the function need to use arrow function or else requires BIND
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name} 
        age={person.age}
        // once again, to pass it values (event, person.id) requires the arrow function
        changed={(event) => props.changed(event, person.id)} />
    })) 
      };

      export default persons;