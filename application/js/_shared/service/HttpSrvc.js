/*global hbApp*/
/* jslint node: true */
"use strict";

hbApp.service("HttpSrvc", function ($http, $q) {


    return {

        hbGet: function (url, config) {
            var deferred = $q.defer();
            $http.get(url, config).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        },
        hbPut: function (url, payload, config) {
            var deferred = $q.defer();
            $http.put(url, payload, config).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (bad) {
                    deferred.reject(bad);
                }
            );
            return deferred.promise;
        },
        hbDelete: function (url, config) {
            var deferred = $q.defer();
            $http.delete(url, config).then(
                function (result) {
                    deferred.resolve(result.data);
                },
                function (reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        },
        hbPost: function (url, payload, config) {
            var deferred = $q.defer();
            $http.post(url, payload, config).then(
                function (good) {
                    deferred.resolve(good.data);
                },
                function (bad) {
                    deferred.reject(bad);
                }
            );
            return deferred.promise;
        }
    };
});