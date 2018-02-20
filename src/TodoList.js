import React from "react";
import { getKeyDate } from "./MyFunction";

const TodoList = props => {
  const { list, removeTask, editTask } = props;
  const theLists = list.map((theList, index) => {
    return (
      <div className="one-list" key={getKeyDate(index)} data-key={index}>
        <div className="edit-state" />
        <div className="bt-remove" onClick={e => removeTask(e)} />
        <div className="bt-edit" onClick={e => editTask(e)} />
        <li className="one-task">{theList.task}</li>
        <input className="input-edit" value={theList.task} />
        <div className="bt-valid-edit" onClick={e => editTask(e)} />
      </div>
    );
  });
  return <ul>{theLists}</ul>;
};
export default TodoList;
