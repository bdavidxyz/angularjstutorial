/* global browser */
/* global it */
/* global expect */
/* global repeater */
/* global element */
/* global describe */
/* global input */
/* global lastRequest */
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
	it('Should have disabled "add-user button" by default', function() {
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
	});
	it('Should have disabled "add-user button" if not an email', function() {
		input('newUser.email').enter("notAValidEmail");
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
	});
	it('Should have enabled  "add-user button" email entered', function() {
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
		input('newUser.email').enter("a.valid@email.com");
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(0);
	});
	it('Should POST a new user and append it to the list when request accepted', function() {
		element('form#HB_new-user-form > button').click();
		expect(lastRequest("POST").body()).toEqual({
            "email": "a.valid@email.com"
        });
	});

});