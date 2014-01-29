/* global browser */
/* global it */
/* global expect */
/* global repeater */
/* global element */
/* global describe */
/* jslint node: true */
"use strict";

describe('Default page', function() {
	it('Should display welcome page ', function() {
		expect(repeater('#HB_welcome-page').count()).toEqual(1);
	});
	it('Should display navigation bar', function() {
		expect(repeater('#HB_navigation-bar').count()).toEqual(1);
	});
	it('Should display footer', function() {
		expect(repeater('#HB_footer').count()).toEqual(1);
	});
	it('Should display user name', function() {
		expect(element('#HB_user-name').text()).toEqual("stubbed@user.com");
	});
});