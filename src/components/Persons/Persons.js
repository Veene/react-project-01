import React, {PureComponent} from 'react';
import Person from './Person/Person'; 

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] inside constructor')
    }
    componentWillMount() {
        console.log('[Persons.js] inside componentwillmount')
      }
    
    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount')
      }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE PersonSS.js] shouldComponentUpdate', nextProps, nextState)
    //     return nextProps.persons !== this.props.persons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonSS.js] componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonSS.js] componentDidUpdate()', nextProps, nextState)

    }

    render()  {
        console.log('[Persons.js] inside render()')
        return(
            this.props.persons.map( ( person, index ) => {
            return <Person  //outer function requires the ID when you map in React
            // to give index to the function need to use arrow function or else requires BIND
            click={() => this.props.clicked(index)}
            key={person.id}
            name={person.name} 
            age={person.age}
            // once again, to pass it values (event, person.id) requires the arrow function
            changed={(event) => this.props.changed(event, person.id)} />
            }))
        }
        }

export default Persons;

      /* if we need an array, always use map, to work through the array and return what you need
          {this.state.persons.map((person, index) => {
            return <Person  //outer function requires the ID when you map in React
            // to give index to the function need to use arrow function or else requires BIND
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            name={person.name} 
            age={person.age}
            // once again, to pass it values (event, person.id) requires the arrow function
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })} */