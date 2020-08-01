import React from "react";
import './Scoreboard.css';

const ScoreBoard = (props) => (
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
          <td id="r1"> 1</td>
          <td id="r2"> 2</td>
          <td id="r3"> 3</td>
          <td id="r4"> 4</td>
          <td id="r5"> 5</td>
          <td id="r6"> 6</td>
          <td id="r7"> 7</td>
          <td id="r8"> 8</td>
          <td id="r9"> 9</td>
          <td id="r10"> 10</td>
          <td id="r11"> 11</td>
          <td id="r12"> 12</td>
          <td id="r13"> 13</td>
          <td id="r14"> 14</td>
          <td id="r15"> 15</td>
          <td id="r16"> 16</td>
          <td id="r17"> 17</td>
          <td id="r18"> 18</td>
          <td id="r19"> 19</td>
          <td id="r20"> 20</td>
          <td id="r21"> 21</td>
          <td id="total-score" colSpan="2">Total Score</td>
        </tr>
        <tr>
          <td id="cumulative-1" colSpan="2">Frame 1</td>
          <td id="cumulative-2" colSpan="2">Frame 2</td>
          <td id="cumulative-3" colSpan="2">Frame 3</td>
          <td id="cumulative-4" colSpan="2">Frame 4</td>
          <td id="cumulative-5" colSpan="2">Frame 5</td>
          <td id="cumulative-2" colSpan="2">Frame 2</td>
          <td id="cumulative-7" colSpan="2">Frame 7</td>
          <td id="cumulative-8" colSpan="2">Frame 8</td>
          <td id="cumulative-9" colSpan="2">Frame 9</td>
          <td id="cumulative-10" colSpan="3">Frame 10</td>
          <td id="cumulative-total-score" colSpan="2">Total Score</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ScoreBoard;
