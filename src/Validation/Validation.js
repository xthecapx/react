import React from "react";

function InputValidation(props) {
  return <p>{props.textLength < 5 ? "Text too short" : "Text long enough"}</p>;
}

export default InputValidation;
