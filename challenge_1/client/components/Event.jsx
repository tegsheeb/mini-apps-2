import React from 'react';

const Event = ( {event} ) {
  return (
    <div>
      <div> {event.date}</div>
      <div> {event.description}</div>
      <div> {event.category2}</div>
    </div>
  )
}

// Event.propTypes = {
//   event: Proptypes.object
// }

export default Event;