import React, { Component } from "react";
import Char from "./Char/Char";

class Chars extends Component {
  render() {
    const message = this.props.chars.split("");
    const char = message.map((letter, index) => {
      return <Char char={letter} key={index} clicked={() => this.props.deleteLetter(index)} />;
    });

    return <ol className="Chars">{char}</ol>;
  }
}

export default Chars;
