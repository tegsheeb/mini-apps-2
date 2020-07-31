import React , { Component }from 'react';
import PropTypes from 'prop-types';

class EventList extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      this.props.data.map( point => (
        <Event event={point}/> ))
    )
  }
};

// Eventlist.propTypes = {
//   data: PropTypes.array,
// };

export default EventList;