/*global hbApp*/
/* jslint node: true */
"use strict";

hbApp.service("UsersSrvc", function (HttpSrvc) {

    var URI_PREFIX = "/heinebier/user";

    return {
        fetchAll: function () {
            var url = URI_PREFIX;
            return HttpSrvc.hbGet(url);
        },
        saveUser: function (user) {
            var url = URI_PREFIX;
            return HttpSrvc.hbPost(url, user);
        }
    };
});