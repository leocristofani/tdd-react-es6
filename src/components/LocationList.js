import React from 'react';
import Location from './Location';

export default class LocationList extends React.Component {
	render() {
		return (
			<div>
				{this.props.locations.map((location, index) => <Location key={index} location={location}></Location>)}
			</div>
		);
	}
}

LocationList.displayName = 'LocationList';
LocationList.propTypes = {
	locations: React.PropTypes.object.isRequired
};