import React, {Component} from 'react';
import './Person.css';


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor')
    }
    componentWillMount() {
        console.log('[Person.js] inside componentwillmount')
      }
    
    componentDidMount() {
        console.log('[Person.js] inside componentDidMount')
      }

    componentWillReceiveProps() {
        console.log('[UPDATE Person.js] componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.log('[UPDATE Person.js] shouldComponentUpdate')
        return false;
    }
    
    render () {
        console.log('[Person.js] inside render()')
        return(
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        ) 
    }
} 
 

export default Person;