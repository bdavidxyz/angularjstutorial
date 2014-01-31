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
        },
        deleteUser: function (userId) {
            var url = URI_PREFIX + "/" + userId;
            return HttpSrvc.hbDelete(url);
        },
        updateUser: function (user) {
            var url = URI_PREFIX + "/" + user.id;
            return HttpSrvc.hbPut(url, user);
        },
    };
});