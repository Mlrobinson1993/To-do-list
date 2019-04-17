import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Please enter a todo"
          className={
            this.props.isInputActive ? "textInput activeTextInput" : "textInput"
          }
        />
      </div>
    );
  }
}

export default Input;
