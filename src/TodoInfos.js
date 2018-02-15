import React, {Component} from 'react';

class TodoInfos extends Component {
  render() {
    return (
      <h2>Vous avez {this.props.infosCount} tâches</h2>);
  }
}

export default TodoInfos;
