import React, { Component } from "react";
import "./App.css";
import InputValidation from "./Validation/Validation";
import Chars from "./Chars/Chars";

class App extends Component {
  state = {
    textLength: 0,
    text: ""
  };

  handleTextChange = event => {
    this.setState({ textLength: String(event.target.value).length, text: event.target.value });
  };

  deleteLetter = index => {
    const newValue = this.state.text.split("");
    newValue.splice(index, 1);
    const join = newValue.join("");
    this.setState({ text: join, textLength: join.length });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <input onChange={this.handleTextChange} value={this.state.text} />
        <InputValidation textLength={this.state.textLength} />
        <Chars chars={this.state.text} deleteLetter={this.deleteLetter} />
      </div>
    );
  }
}

export default App;
