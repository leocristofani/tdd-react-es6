import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Location from '../src/components/Location';

describe('Location Component', () => {

	const mock  = 'Loc 1',
	      subject = TestUtils.renderIntoDocument(<Location location={mock} />);

	it('should display a location', () => {
		expect(ReactDom.findDOMNode(subject).textContent).toEqual(mock);
	});

});