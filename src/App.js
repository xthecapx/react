import React, { Component } from "react";
import "./App.css";
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    userName: 'thecap',
    pass: '123123'
  }

  inputHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    
    return (
      <div className="App">
        <UserInput user={this.state} change={this.inputHandler}/>
        <UserOutput user={this.state}/>
      </div>
    );
  }
}

export default App;
