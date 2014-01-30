/* global browser */
/* global it */
/* global expect */
/* global repeater */
/* global element */
/* global describe */
/* jslint node: true */
"use strict";

describe('Tags page', function() {
	it('Should access to tags page and shadow menu item', function() {
		expect(repeater('#HB_tags-menu.active').count()).toEqual(0);
		element("#HB_tags-menu a").click();
		expect(repeater('#HB_tags-menu.active').count()).toEqual(1);
		expect(repeater('#HB_tags-page').count()).toEqual(1);
	});
	it('Should display all tags', function() {
		expect(repeater('.hb-tag').count()).toEqual(5);
	});
});