/*global exports*/
/*jslint node: true */
"use strict";


exports.getAuth = function (req, res) {
    res.json(200, {
		name: "stubbed@user.com",
		projects:[1, 2, 3, 4, 5, 6, 7]
    });
};
