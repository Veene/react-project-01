import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'asdas', name: 'Max', age: 28 },
      {id: 'asdas1', name: "John", age: 29},
      {id: 'asdas2', name: "Monika", age: 29},
    ],
    username:'JohnnyBravo',
    showPersons: false,
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      
    };
    let buttonOption = "button"
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
      style.backgroundColor = 'red';
      buttonOption = "button2"
      
    }
    
    

    return (
      
          <div className="App">
            <Cockpit 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            toggle={this.togglePersonsHandler}
            showPersons={this.state.showPersons}/>
            
            {persons}
          </div>
      
      
      
    )
  }
}

export default App;
