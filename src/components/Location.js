import React from 'react';

export default class Location extends React.Component {
	render() {
		return <div>{this.props.location}</div>
	}
}

Location.displayName = 'Location';
Location.propTypes = {
	React.PropTypes.object.isRequired
};
