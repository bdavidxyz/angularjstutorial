/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.controller("UsersCtrl", function ($scope, loadedUsers) {
    $scope.users = loadedUsers;
});
