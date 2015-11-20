import React from 'react';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import LocationList from './components/LocationList';

const locations = Immutable.Set.of('Location 1', 'Location 2');

ReactDom.render(<LocationList locations={locations} />, document.getElementById('app'));