import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoInfos from "./TodoInfos";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  initiliseStorage = () => {
    let Storage = window.localStorage;
    if (!Storage.getItem("tasks")) {
      Storage.setItem("tasks", JSON.stringify([]));
    } else {
      this.getStateFromStorage();
    }
  };

  getStateFromStorage = () => {
    let Storage = window.localStorage;
    this.setState({ tasks: JSON.parse(Storage.getItem("tasks")) });
  };

  saveData = () => {
    let Storage = window.localStorage;
    Storage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  componentDidMount() {
    this.initiliseStorage();
  }

  changeTasks = newTasks => {
    this.setState(
      prevState => ({
        tasks: [...prevState.tasks, newTasks]
      }),
      () => {
        this.saveData();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <TodoInfos infosCount={this.state.tasks.length} />
        <TodoForm tasks={this.state.tasks} changeTasks={this.changeTasks} />
        <TodoList list={this.state.tasks} />
      </div>
    );
  }
}

export default App;
