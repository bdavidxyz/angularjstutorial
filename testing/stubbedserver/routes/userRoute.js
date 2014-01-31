/*global exports*/
/*jslint node: true */
"use strict";

var users = [{
    "id": "1020",
    "email": "john.doe@heinebier.com",
    "hireDate": "1328245200000"
}, {
    "id": "2056",
    "email": "super.admin@heinebier.com",
    "hireDate": "1278043200000"
}, {
    "id": "3784",
    "email": "one.user@heinebier.com",
    "hireDate": "1212724800000"
}, {
    "id": "4026",
    "email": "one.developer@heinebier.com",
    "hireDate": "1313380800000"
}, {
    "id": "5656",
    "email": "romelu.xembourg@heinebier.com",
    "hireDate": "1132722000000"
}];


exports.listUsers = function(req, res) {
    res.json(200, users);
};

exports.postUser = function(req, res) {
    var theNewUser = {
        "id": new Date().getTime()
    };
    theNewUser.email = req.body.email;
    res.json(200, theNewUser);
};

exports.deleteUser = function(req, res) {
    setTimeout(function() {
        res.json(200);
    }, 100);
};

exports.updateUser = function(req, res) {
    console.log(req.params.id);
    if (req.params.id === "3784") {
        res.json(408, "error");
    } else {
        res.json(200);
    }
};