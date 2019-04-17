import React, { Component } from "react";
import IosAddCircleOutline from "react-ionicons/lib/IosAddCircleOutline";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      value: ""
    };
  }

  handleChange = event => {
    if(this.state.value.length < 30) {
      this.setState({
        value: event.target.value
      });
    } else {
      return
    }
    console.log(this.state.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addListItem(this.state.value);

    this.setState({
      value: "",
      toggle: !this.state.toggle
    });
  };

  handleEmptyInput = e => {
    e.preventDefault();
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="todoList__form"
          onSubmit={
            this.state.value.length > 0
              ? this.handleSubmit
              : this.handleEmptyInput
          }
        >
          <input
            type="text"
            placeholder="Please enter a todo"
            className={
              this.state.toggle ? "textInput activeTextInput" : "textInput"
            }
            value={this.state.value}
            onChange={this.handleChange}
          />
          <IosAddCircleOutline
            fontSize="50px"
            color="#FFFFFF"
            className={this.state.toggle ? "activeSVG addSVG" : "addSVG"}
            onClick={() => this.setState({ toggle: !this.state.toggle })}
          />
          <button className="todoList__button--add" type="button" />
          <button
            className={
              this.state.toggle
                ? "activeSubmitButton todoList__button--submit"
                : "todoList__button--submit"
            }
            type="submit"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
