import React, { Component } from 'react';

class Pins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPins: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    event.preventDefault();
    this.setState({
      numberOfPins: event.target.value,
    });
    this.props.handleSelect(event.target.value);
  }

  render() {
    return (
      <div>
        <button type="button" value="1" onClick={this.handleSelect}> 1 </button>
        <button type="button" value="2" onClick={this.handleSelect}> 2 </button>
        <button type="button" value="3" onClick={this.handleSelect}> 3 </button>
        <button type="button" value="4" onClick={this.handleSelect}> 4 </button>
        <button type="button" value="5" onClick={this.handleSelect}> 5 </button>
        <button type="button" value="6" onClick={this.handleSelect}> 6 </button>
        <button type="button" value="7" onClick={this.handleSelect}> 7 </button>
        <button type="button" value="8" onClick={this.handleSelect}> 8 </button>
        <button type="button" value="9" onClick={this.handleSelect}> 9 </button>
        <button type="button" value="10" onClick={this.handleSelect}> 10 </button>
      </div>
    );
  }
}

export default Pins;
