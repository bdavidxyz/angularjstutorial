/*global exports*/
/*jslint node: true */
"use strict";

var tags = [
    {
        "id": "1",
        "value": "factory"
    },
    {
        "id": "2",
        "value": "administration"
    },
    {
        "id": "3",
        "value": "human resources"
    },
    {
        "id": "4",
        "value": "information technology"
    },
    {
        "id": "5",
        "value": "emergency"
    }
];


exports.listTags = function (req, res) {
    res.json(200, tags);
};
exports.postTag = function (req, res) {
    var theNewTag = {
        "id": new Date().getTime()
    };
    theNewTag.value = req.body.value;
    res.json(200, theNewTag);
};