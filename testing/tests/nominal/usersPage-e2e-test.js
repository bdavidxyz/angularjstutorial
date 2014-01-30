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
	it('Should be able to add a new user', function() {
		//an input so that a new user can be entered
		expect(repeater('form#HB_new-user-form > input').count()).toEqual(1);
		//a button to submit the form
		expect(repeater('form#HB_new-user-form > button').count()).toEqual(1);
	});
	it('Should have disabled input by default', function() {
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
	});
	it('Should have disabled "add-user button" if not an email', function() {
		expect('not implemented');
	});
	it('Should have enabled  "add-user" email entered', function() {
		expect('not implemented');
	});
});