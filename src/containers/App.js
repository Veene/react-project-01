import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('app.js - constructor()')

    this.state = {
      persons: [
        {id: 'asdas', name: 'Max', age: 28 },
        {id: 'asdas1', name: "John", age: 29},
        {id: 'asdas2', name: "Monika", age: 29},
      ],
      username:'JohnnyBravo',
      showPersons: false,
    };
  }
  
  componentWillMount() {
    console.log('[App.js] inside componentwillmount')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState)
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] componentDidUpdate()', nextProps, nextState)

  }

  usernameHandler = (newUsername) => {
    this.setState({
      username: newUsername.target.value
    })
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Maximilian' DO NOT DO THIS
    this.setState({
      persons: [
        {name: newName.target.value, age: 28 },
        {name: "John", age: 29},
        {name: "Monika", age: 26},
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    // if true, it gives you the index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // grab that specific person object from inside persons array in state
    const person = {
      ...this.state.persons[personIndex]
    } 
    //updating the person who the ID corresponded to, so state change everything event.target.value changes
    person.name = event.target.value;
    // create copy of persons array from state, so that we are not mutating
    const persons = [...this.state.persons]
    //updating inside this array, the person object (got with Index) and then changing it to the person being updated via typing in input field
    persons[personIndex] = person
    //update the state finally with the new array of objects, in which the specified index person is changed
    this.setState({
      persons:persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('app.js inside render()')

    let persons = null;

    if (this.state.showPersons) { //can set if's and shit because not in the return statement yet
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div> 
      )
    }
    
    return (
          <Auxiliary>
          <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
            <Cockpit 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            toggle={this.togglePersonsHandler}
            showPersons={this.state.showPersons}/>
            
            {persons}
        </Auxiliary>
    )
  }
}

export default App;
