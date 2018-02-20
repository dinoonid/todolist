import React from "react";
import TodoForm from "./TodoForm";
import TodoInfos from "./TodoInfos";

const TodoHeader = props => {
  const { changeInput, addTodo } = props;
  const { tasks, text } = props.state;

  return (
    <div className="todo-heaver">
      <TodoInfos infosCount={tasks.length} />
      <TodoForm
        tasks={tasks}
        changeInput={e => changeInput(e)}
        addTodo={e => addTodo(e)}
        theValue={text}
      />
    </div>
  );
};

export default TodoHeader;
