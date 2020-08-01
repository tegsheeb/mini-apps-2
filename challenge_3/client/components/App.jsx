import React, { Component } from 'react';
import Pins from './Pins.jsx';
import ScoreBoard from './ScoreBoard.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rolls: [],
      frames: [],
      cumulativeScores: [],
      totalScore: null,
    };
    this.handleBowl = this.handleBowl.bind(this);
    this.calculateCumulative = this.calculateCumulative.bind(this);
  }

  handleBowl(number) {
    const { rolls, frames } = this.state;

    if (rolls.length % 2 === 0) {
      const newFrame = [number];
      frames.push(newFrame);
    } else {
      console.log(frames);
      frames[frames.length - 1][1] = number;
    }
    rolls.push(number);
    this.setState({
      frames,
      rolls,
    });
    this.calculateCumulative(frames);
  }

  calculateCumulative() {
    const { frames, cumulativeScores } = this.state;
    const lastFrame = frames.length - 1;
    if (frames[lastFrame][0] !== 10 && (frames[lastFrame][0] + frames[lastFrame][1] !== 10)) {
      const cumulative = frames[lastFrame][0] + frames[lastFrame][1];
      cumulativeScores.push(cumulative);
      this.setState({
        cumulativeScores,
      });
    }
  }

  render() {
    const { frames, cumulativeScores, totalScore } = this.state;
    return (
      <div>
        <ScoreBoard frames={frames} cumulativeScores={cumulativeScores} totalScore={totalScore}/>
        <h3> Select number of pins to hit </h3>
        <Pins handleBowl={this.handleBowl} />
      </div>
    );
  }
}

export default App;
