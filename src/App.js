import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Konami from './components/konami'

class App extends Component {
  constructor() {
    super();
    this.state = {
      activated: false,
      name: ""
    }

    this.toggleActivation = this.toggleActivation.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  toggleActivation() {
    if (this.state.activated === true) {
      this.setState({ activated: false });
    } else {
      this.setState({ activated: true });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.name}</h1>
        </header>

        <label>
          Name:
          <input type="text" name={this.state.name} onChange={this.handleChange} />
        </label>

        <div className="konami">
          <button onClick={this.toggleActivation}>Toggle Konami Code!</button>
          {this.state.activated ? <Konami name={this.state.name} /> : <div>Konami Code : Deactivated</div>}
        </div>

      </div>
    );
  }
}

export default App;
