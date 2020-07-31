import React, { Component } from 'react';
import Pins from './Pins.jsx';
import ScoreBoard from './ScoreBoard.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rounds: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(number) {
    const { rounds } = this.state;
    rounds.push(number);
    this.setState({
      rounds,
    });
  }

  render() {
    const { rounds } = this.state;
    return (
      <div>
        <h3> Select number of pins to hit </h3>
        <Pins handleSelect={this.handleSelect} />
        <ScoreBoard rounds={rounds} />
      </div>
    );
  }
}

export default App;
