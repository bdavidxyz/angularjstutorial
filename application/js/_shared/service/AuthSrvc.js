/*global hbApp*/
/* jslint node: true */
"use strict";

hbApp.service("AuthSrvc", function (HttpSrvc) {

    var URI_PREFIX = "/heinebier/auth";

    return {

        fetchCurrent: function () {
            var url = URI_PREFIX;
            return HttpSrvc.hbGet(url);
        }
    };
});