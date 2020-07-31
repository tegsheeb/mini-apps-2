import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const data = {"events": [
  {"date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year"}]};

ReactDOM.render( <App perPage={10} data={data.events}/>, document.getElementById('app'));
