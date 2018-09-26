import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import Radium, { StyleRoot } from 'radium';

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
          {/* if we need an array, always use map, to work through the array and return what you need */}
          {this.state.persons.map((person, index) => {
            return <Person 
            // to give index to the function need to use arrow function or else requires BIND
            click={() => this.deletePersonHandler(index)}
            key={person.id} 
            name={person.name} 
            age={person.age}
            // once again, to pass it values (event, person.id) requires the arrow function
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      )
      style.backgroundColor = 'red';
      buttonOption = "button2"
      
    }
    
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes will be red ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
          <div className="App">
            <h1>Hi Im a React App!!</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button className={buttonOption} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            
            {persons}
          </div>
      
      
      
    )
  }
}

export default App;
