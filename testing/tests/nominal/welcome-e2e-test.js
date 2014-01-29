/* global browser */
/* global it */
/* global expect */
/* global describe */
/* jslint node: true */
"use strict";

describe('Welcome page', function() {
	it('Should be accessible by default', function() {
		pause();
		expect(repeater('#HB_welcome-page').count()).toEqual(1);
	});
});