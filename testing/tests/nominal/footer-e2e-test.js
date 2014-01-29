/* global browser */
/* global it */
/* global expect */
/* global repeater */
/* global describe */
/* jslint node: true */
"use strict";

describe('Footer', function() {
	it('Should always be displayed', function() {
		expect(repeater('#HB_footer').count()).toEqual(1);
	});
});