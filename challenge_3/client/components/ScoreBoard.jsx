import React, { Component } from 'react';
import { DomElement } from 'htmlparser2';

import './Scoreboard.css';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.renderScore = this.renderScore.bind(this);
    this.renderCumulative = this.renderCumulative.bind(this);
  }

  renderScore(frame, roll) {
    const { frames } = this.props;
    return frames[frame] ? frames[frame][roll] : '';
  }

  renderCumulative(frame) {
    const { cumulativeScores } = this.props;
    return cumulativeScores[frame] ? cumulativeScores[frame] : '';
  }

  render() {
    return (
      <div className="Container">
        <table id="table" className="Scoreboard" cellPadding="1" cellSpacing="0">
          <tbody>
            <tr>
              <th id="c1" colSpan="2">Frame 1</th>
              <th id="c2" colSpan="2">Frame 2</th>
              <th id="c3" colSpan="2">Frame 3</th>
              <th id="c4" colSpan="2">Frame 4</th>
              <th id="c5" colSpan="2">Frame 5</th>
              <th id="c2" colSpan="2">Frame 2</th>
              <th id="c7" colSpan="2">Frame 7</th>
              <th id="c8" colSpan="2">Frame 8</th>
              <th id="c9" colSpan="2">Frame 9</th>
              <th id="c10" colSpan="3">Frame 10</th>
              <th id="c11" colSpan="2">Total Score</th>
            </tr>
            <tr>
              <td id="r1"> {this.renderScore(0, 0)}</td> <td id="r2"> {this.renderScore(0, 1)}</td>
              <td id="r3"> {this.renderScore(1, 0)}</td> <td id="r4"> {this.renderScore(1, 1)}</td>
              <td id="r5"> {this.renderScore(2, 0)}</td> <td id="r6"> {this.renderScore(2, 1)}</td>
              <td id="r7"> {this.renderScore(3, 0)}</td> <td id="r8"> {this.renderScore(3, 1)}</td>
              <td id="r9"> {this.renderScore(4, 0)}</td> <td id="r10">{this.renderScore(4, 1)}</td>
              <td id="r11">{this.renderScore(5, 0)}</td> <td id="r12">{this.renderScore(5, 1)}</td>
              <td id="r13">{this.renderScore(6, 0)}</td> <td id="r14">{this.renderScore(6, 1)}</td>
              <td id="r15">{this.renderScore(7, 0)}</td> <td id="r16">{this.renderScore(7, 1)}</td>
              <td id="r17">{this.renderScore(8, 0)}</td> <td id="r18">{this.renderScore(8, 1)}</td>
              <td id="r19">{this.renderScore(9, 0)}</td> <td id="r20">{this.renderScore(9, 1)}</td>
              <td id="r21"> </td>
              <td id="total{this.renderScore(0, 0)}score" colSpan="2">Total Score</td>
            </tr>
            <tr>
              <td id="cumulative-1" colSpan="2"> {this.renderCumulative(0)}</td>
              <td id="cumulative-2" colSpan="2"> {this.renderCumulative(1)}</td>
              <td id="cumulative-3" colSpan="2"> {this.renderCumulative(2)}</td>
              <td id="cumulative-4" colSpan="2"> {this.renderCumulative(3)}</td>
              <td id="cumulative-5" colSpan="2"> {this.renderCumulative(4)}</td>
              <td id="cumulative-2" colSpan="2"> {this.renderCumulative(5)}</td>
              <td id="cumulative-7" colSpan="2"> {this.renderCumulative(6)}</td>
              <td id="cumulative-8" colSpan="2"> {this.renderCumulative(7)}</td>
              <td id="cumulative-9" colSpan="2"> {this.renderCumulative(8)}</td>
              <td id="cumulative-10" colSpan="3"> {this.renderCumulative(9)}</td>
              <td id="cumulative-total-score" colSpan="2">Total Score</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScoreBoard;
