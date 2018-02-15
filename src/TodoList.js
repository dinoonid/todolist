import React, {Component} from 'react';

class TodoList extends Component {
  render() {
    const theLists = this.props.list.map((theList, index) => {
      return (
        <li className="list" key={theList.toString() + index}>{theList}</li>
      )
    })
    return (
      <ul>{theLists}</ul>);
  }
}

export default TodoList;
