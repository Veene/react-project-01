import React from 'react';
import ReactDOM from 'react-dom';
import ValidationComponent from './ValidationComponent';

class App extends React.Component {
  state = {
    text: "",
    textLength: 0,
  }
  
  handleChange = (e) => {
    let input = e.target.value;
    let inputLength = input.length
    this.setState({
      textLength: inputLength
    })
    
  }

  render(){
    return(
      <div style={{textAlign: 'center', padding: '30px'}}>
        <ValidationComponent textNums={this.state.textLength}/>
        <input type="text" onChange={this.handleChange} />
        <p>Length: {this.state.textLength}</p>
      </div>
      
    )
  }
}
// ReactDOM.render(<App/>, document.getElementById('app'));

export default App;