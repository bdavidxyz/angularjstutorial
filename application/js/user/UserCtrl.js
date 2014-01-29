/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.controller("UserCtrl", function ($scope, AuthSrvc) {
	$scope.blabla = "hello";
	$scope.loadCurrentUser = function() {
		AuthSrvc.fetchCurrent().then(function(answeredUser) {
			$scope.currentUser = answeredUser.name;
		});
	};
});
