/*global exports*/
/*jslint node: true */
"use strict";

var projects = [
    {
        "id": "1",
        "name": "AH4",
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
        "mainIndicator" : "87"
    },
    {
        "id": "2",
        "name": "VB6",
        "description" : "a very short description",
        "mainIndicator" : "55"
    },
    {
        "id": "3",
        "name": "FG9",
        "description" : " veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rat",
        "mainIndicator" : "55"
    },
    {
        "id": "4",
        "name": "FG9",
        "description" : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        "mainIndicator" : "99"
    },
    {
        "id": "5",
        "name": "FG9",
        "description" : " so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking",
        "mainIndicator" : "32"
    },
    {
        "id": "6",
        "name": "KK4",
        "description" : "a very short description, but not too small",
        "mainIndicator" : "95"
    },
    {
        "id": "7",
        "name": "WX3",
        "description" : "hum nope",
        "mainIndicator" : "12"
    },
    {
        "id": "8",
        "name": "AZ2",
        "description" : "bla bla bla bla bla bla bla bla bla bla bla bla bla",
        "mainIndicator" : "43"
    },
    {
        "id": "9",
        "name": "AZ2",
        "description" : "sires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some g",
        "mainIndicator" : "43"
    }

];


exports.listProjects = function (req, res) {
    res.json(200, projects);
};
