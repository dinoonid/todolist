import React from "react";

const TodoForm = props => {
  const { addTodo, theValue, changeInput } = props;

  return (
    <div className="box-form">
      <form onSubmit={e => addTodo(e)}>
        <input
          className="input-task"
          placeholder="Saisissez une tâche"
          value={theValue}
          onChange={e => changeInput(e)}
        />
      </form>
      <div onClick={e => addTodo(e)} className="bt-valider" />
    </div>
  );
};
export default TodoForm;
