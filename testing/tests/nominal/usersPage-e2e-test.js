/* global browser */
/* global it */
/* global expect */
/* global repeater */
/* global element */
/* global describe */
/* jslint node: true */
"use strict";

describe('Users page', function() {
	it('Should access to users page and shadow menu item', function() {
		expect(repeater('#HB_users-menu.active').count()).toEqual(0);
		element("#HB_users-menu a").click();
		expect(repeater('#HB_users-menu.active').count()).toEqual(1);
		expect(repeater('#HB_users-page').count()).toEqual(1);
	});
	it('Should display all users', function() {
		expect(repeater('.hb-user').count()).toEqual(5);
	});
	// it('Should be able to add a new user', function() {
	// 	expect(repeater('input').count()).toEqual(1);
	// });
});