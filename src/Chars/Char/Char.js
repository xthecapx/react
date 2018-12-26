import React from "react";

function Char(props) {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    cursor: "pointer"
  };

  return (
    <li style={style} onClick={props.clicked}>
      {props.char}
    </li>
  );
}

export default Char;
