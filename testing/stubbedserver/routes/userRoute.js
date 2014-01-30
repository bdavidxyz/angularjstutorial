/*global exports*/
/*jslint node: true */
"use strict";

var users = [
    {
        "id": "1020",
        "email": "john.doe@heinebier.com"
    },
    {
        "id": "2056",
        "email": "super.admin@heinebier.com"
    },
    {
        "id": "3784",
        "email": "one.user@heinebier.com"
    },
    {
        "id": "4026",
        "email": "one.developer@heinebier.com"
    },
    {
        "id": "5656",
        "email": "romelu.xembourg@heinebier.com"
    }
];


exports.listUsers = function (req, res) {
    res.json(200, users);
};
exports.postUser = function (req, res) {
    var theNewUser = {
        "id": new Date().getTime()
    };
    theNewUser.email = req.body.email;
    res.json(200, theNewUser);
};
