import React, {Component} from 'react';

class App extends Component {
afficheOk = () => {alert('ok');}

  render() {
    return (<div className="App">
      <form onSubmit={this.afficheOk}>
      <input placeholder='Saisissez une tâche'/>
      <button>Valider</button>
    </form>
    </div>);
  }
}

export default App;
