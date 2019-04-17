import React, { Component } from "react";
import IosCloseCircleOutline from "react-ionicons/lib/IosCloseCircleOutline";

class List extends Component {
  markAsDone(e) {
    console.log(e.target);
    e.target.classList.toggle("read");
  }

  render() {
    return (
      <div className="container__todo">
        <ul className="todoList">
          {this.props.listItems.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  className="todoList__items"
                  key={item}
                  onClick={this.markAsDone}
                  style={{ gridRow: index + 1 }}
                >
                  {item}
                </li>

                <button
                  className="todoList__button--delete"
                  key={index}
                  onClick={this.props.removeTodo.bind(this, item)}
                >
                  <IosCloseCircleOutline className="deleteSVG" />
                </button>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
