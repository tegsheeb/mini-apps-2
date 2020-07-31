import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventList from './EventList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
    // this.getData = this.getData.bind(this);
  }

  // getData() {
  //   fetch('/events')
  //   .then(response => response.json())
  //   .then( (data) => {
  //     this.setState({
  //       data
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('Error: ', err);
  //   })
  // }

  // componentDidMount() {
  //   this.getData();
  // }

  render () {
    return (
      <div>
      <SearchBar handleSearch={this.handleSearch}/>
      <EventList data={this.props.data} />
      {/* <ReactPaginate/> */}
      </div>
    )
  }
};

// App.propTypes = {
//   perPage: PropTypes.number.isRequired
// }

export default App;