import React, { Component } from "react";

class TodoInfos extends Component {
  oneOrMore = nb => {
    return nb === 0 || nb === 1 ? "" : "s";
  };

  render() {
    const nbTasks = this.props.infosCount;
    return (
      <h2>
        Vous avez {nbTasks} tâche{this.oneOrMore(nbTasks)}
      </h2>
    );
  }
}

export default TodoInfos;
