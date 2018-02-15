import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoInfos from './TodoInfos';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.changeTasks = this.changeTasks.bind(this);
  }

  changeTasks(newTasks) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        newTasks
      ]
    });
    console.log(this.state.tasks);
  }

  render() {
    return (<div className="App">
      <TodoInfos infosCount={this.state.tasks.length}/>
      <TodoForm tasks={this.state.tasks} changeTasks={this.changeTasks}/>
      <TodoList list={this.state.tasks}/>
    </div>);
  }
}

export default App;
