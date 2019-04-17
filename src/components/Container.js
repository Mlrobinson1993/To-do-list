import React, { Component } from "react";
import List from "./List";
import Heading from "./Heading";
import Form from "./Form";

export class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
      value: ""
    };
  }

  addListItem = val => {
    this.setState({
      listItem: this.state.listItem.concat(val)
    });
  };

  removeListItem = name => {
    this.setState({
      listItem: this.state.listItem.filter(todo => name !== todo)
    });
  };

  render() {
    return (
      <div className="container">
        <Heading />
        <List
          listItems={this.state.listItem}
          removeTodo={this.removeListItem}
        />
        <Form addListItem={this.addListItem} />
      </div>
    );
  }
}

export default Container;
