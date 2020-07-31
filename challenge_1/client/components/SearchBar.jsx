import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handlecChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search
        <input type='text' value={this.state.searchTerm} onChange={this.handlecChange}/>
        </label>
        <input type='submit' value='Search'/>
      </form>
    );
  }
}

// SearchBar.propTypes = {
//   data: PropTypes.array,
//   handleSearch: PropTypes.func,
// }

export default SearchBar;