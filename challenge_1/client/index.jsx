import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <App url={'http://localhost:3000/events'} category2={'China'} perPage={10} />,
  document.getElementById('app')
);