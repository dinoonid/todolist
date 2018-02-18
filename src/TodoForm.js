import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.text !== "") {
      const newTodo =
        this.state.text[0].toUpperCase() + this.state.text.slice(1);
      this.setState({ text: "" });
      this.props.changeTasks(newTodo);
    }
  };

  changeInput = event => {
    const reg = /^ /;
    if (reg.test(event.target.value)) {
      event.target.value = "";
    }
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          placeholder="Saisissez une tâche"
          value={this.state.text}
          onChange={this.changeInput}
        />
        <button>Valider</button>
      </form>
    );
  }
}

export default TodoForm;
