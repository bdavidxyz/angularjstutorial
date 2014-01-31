/* global browser */
/* global it */
/* global iit */
/* global expect */
/* global using */
/* global repeater */
/* global element */
/* global pause */
/* global binding */
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
	it('Should LIST all users', function() {
		expect(repeater('.hb-user-email').count()).toEqual(5);
	});
	it('Should display email and hireDate with format day[2 digit] month[3 char] year[4 digit]', function() {
		expect(element('.hb-user-email:eq(0)').text()).toContain("john.doe@heinebier.com");
		expect(element('.hb-user-date:eq(0)').text()).toContain("03 Feb 2012");
	});
	it('Should be able to filter', function() {
		input("searchText").enter("one");
		expect(repeater('.hb-user-email').count()).toEqual(2);
		input("searchText").enter("");
		expect(repeater('.hb-user-email').count()).toEqual(5);
	});
	it('Should be able to UPDATE an user', function() {
		element('#HB_user-email-inputeditable-1 div').click();
		using('#HB_user-email-inputeditable-1').input("text").enter("modified.user@heinebier.com");
		element('#HB_update-button-1').click();
		expect(lastRequest("PUT").url()).toEqual("/heinebier/user/1020");
		expect(lastRequest("PUT").body()).toEqual({"id":"1020","email":"modified.user@heinebier.com","hireDate":"1328245200000"});
	});
	it('Should be able to DELETE a user', function() {
		element('.hb-delete-button:eq(0)').click();
		expect(lastRequest("DELETE").url()).toEqual("/heinebier/user/1020");
		expect(repeater('.hb-user-email').count()).toEqual(4);
	});
	it('Should be able to add a new user', function() {
		//an input so that a new user can be entered
		expect(repeater('form#HB_new-user-form > input#HB_new-user-form-input').count()).toEqual(1);
		//a button to submit the form
		expect(repeater('form#HB_new-user-form > button#HB_new-user-form-button').count()).toEqual(1);
	});
	it('Should have disabled "add-user button" by default', function() {
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
	});
	it('Should have disabled "add-user button" if not an email', function() {
		input('newUser.email').enter("notAValidEmail");
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
	});
	it('Should have enabled  "add-user button" email entered if a correct email is entered', function() {
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(1);
		input('newUser.email').enter("a.valid@email.com");
		expect(element('#HB_new-user-form-button[disabled]').count()).toBe(0);
	});
	it('Should POST a new user and append it to the list when request accepted', function() {
		expect(input('newUser.email').val()).toEqual("a.valid@email.com");
		element('form#HB_new-user-form > button').click();
		expect(lastRequest("POST").url()).toEqual("/heinebier/user");
		expect(lastRequest("POST").body()).toEqual({"email": "a.valid@email.com"});
		expect(input('newUser.email').val()).toEqual("");
	});

});