/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.controller("UsersCtrl", function ($scope, UsersSrvc, loadedUsers) {
    $scope.users = loadedUsers;

    $scope.addNewUser = function() {
		UsersSrvc.saveUser($scope.newUser);
    };
});
