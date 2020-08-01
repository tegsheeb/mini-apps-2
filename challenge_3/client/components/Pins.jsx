import React, { Component } from 'react';

class Pins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPins: null,
    };
    this.handleBowl = this.handleBowl.bind(this);
  }

  handleBowl(event) {
    event.preventDefault();
    this.setState({
      numberOfPins: event.target.value,
    });
    this.props.handleBowl(Number(event.target.value));
  }

  render() {
    return (
      <div>
        <button type="button" value="0" onClick={this.handleBowl}> 0 </button>
        <button type="button" value="1" onClick={this.handleBowl}> 1 </button>
        <button type="button" value="2" onClick={this.handleBowl}> 2 </button>
        <button type="button" value="3" onClick={this.handleBowl}> 3 </button>
        <button type="button" value="4" onClick={this.handleBowl}> 4 </button>
        <button type="button" value="5" onClick={this.handleBowl}> 5 </button>
        <button type="button" value="6" onClick={this.handleBowl}> 6 </button>
        <button type="button" value="7" onClick={this.handleBowl}> 7 </button>
        <button type="button" value="8" onClick={this.handleBowl}> 8 </button>
        <button type="button" value="9" onClick={this.handleBowl}> 9 </button>
        <button type="button" value="10" onClick={this.handleBowl}> 10 </button>
      </div>
    );
  }
}

export default Pins;
