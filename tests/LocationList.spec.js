import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Immutable from 'immutable';
import Location from '../src/components/Location';
import LocationList from '../src/components/LocationList';

describe('LocationList Component', () => {

	const mock = Immutable.Set.of('Loc 1', 'Loc 2'),
	      subject = TestUtils.renderIntoDocument(<LocationList locations={mock}/>);

	it('should display a list of locations', () => {
		expect(TestUtils.scryRenderedComponentsWithType(subject, Location).length).toEqual(mock.size);
	});

});