import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const theLists = this.props.list.map((theList, index) => {
      return (
        <li className="list" key={theList.toString() + index}>
          {index + 1 + " • " + theList[0].toUpperCase() + theList.slice(1)}
        </li>
      );
    });
    return <ul>{theLists}</ul>;
  }
}

export default TodoList;
