import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const theLists = this.props.list.map(theList => {
      return (
        <div key={theList.key} data-key={this.props.list.indexOf(theList)}>
          <button className="bt-remove" onClick={e => this.props.removeTask(e)}>
            Supprimer
          </button>
          <li className="list">{" • " + theList.task}</li>
        </div>
      );
    });
    return <ul>{theLists}</ul>;
  }
}
export default TodoList;
