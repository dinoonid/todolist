import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.addTodo(e)}>
        <input
          placeholder="Saisissez une tâche"
          value={this.props.theValue}
          onChange={e => this.props.changeInput(e)}
        />
        <button>Valider</button>
      </form>
    );
  }
}
export default TodoForm;
