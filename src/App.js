import React, { Component } from 'react';
import './App.css';
import Person from './Person';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28 },
      {name: "John", age: 29},
      {name: "Monika", age: 29},
    ],
    username:'JohnnyBravo'
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
        {name: newName, age: 28 },
        {name: "John", age: 29},
        {name: "Monika", age: 26},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28 },
        {name: event.target.value, age: 29},
        {name: "Monika", age: 26},
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
    };
    return (
      <div className="App">
        <h1>Hi Im a React App!!</h1>
        <button style={style} onClick={() => this.switchNameHandler('MAXI!!')}>Switch Name</button>
        <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <UserInput userChanged={this.usernameHandler} currentName={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username='John'/>
        {/* <Person name="John" age="29">HOBBIES:HI IM JOHN</Person>
        <Person name="Ben" age="30"/> */}
      </div>
      
    )
  }
}

export default App;
