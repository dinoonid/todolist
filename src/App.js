import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: ""
    };
  }

  componentDidMount = () => {
    this.initiliseStorage();
  };

  initiliseStorage = () => {
    let Storage = window.localStorage;
    if (!Storage.getItem("tasks")) {
      this.getStorageFromState();
    } else {
      this.getStateFromStorage();
    }
  };

  getStateFromStorage = () => {
    let Storage = window.localStorage;
    this.setState({
      tasks: JSON.parse(Storage.getItem("tasks"))
    });
  };

  getStorageFromState = () => {
    let Storage = window.localStorage;
    Storage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.text !== "") {
      const newTodo = {
        task: this.state.text[0].toUpperCase() + this.state.text.slice(1)
      };
      this.setState(
        {
          tasks: [...this.state.tasks, newTodo],
          text: ""
        },
        () => {
          this.getStorageFromState();
        }
      );
    }
  };

  changeInput = e => {
    const reg = /^ /;
    if (reg.test(e.target.value)) {
      e.target.value = "";
    }
    this.setState({ text: e.target.value });
  };

  removeTask = e => {
    this.setState(
      {
        tasks: this.state.tasks.filter(v => {
          return (
            this.state.tasks.indexOf(v) !==
            Number(e.target.parentNode.dataset.key)
          );
        })
      },
      () => {
        this.getStorageFromState();
      }
    );
  };

  editTask = e => {
    alert(e.target.parentNode.dataset.key);
  };

  render() {
    return (
      <div className="App">
        <TodoHeader
          state={this.state}
          changeInput={e => this.changeInput(e)}
          addTodo={e => this.addTodo(e)}
        />
        <TodoList
          list={this.state.tasks}
          removeTask={e => this.removeTask(e)}
          editTask={e => this.editTask(e)}
        />
      </div>
    );
  }
}

export default App;
