import React, {Component} from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    const newTodo = this.state.text;
    this.setState({text: ''});
    this.props.changeTasks(newTodo);
  }

changeInput(e) {
  this.setState({text: e.target.value});
}

render() {
  return (<form onSubmit={this.addTodo}>
    <input placeholder='Saisissez une tâche' value={this.state.text} onChange={this.changeInput}/>
    <button>Valider</button>
  </form>);
}
}

export default TodoForm;
