/*global hbApp*/
/*global _*/
/* jslint node: true */
'use strict';

hbApp.controller("UsersCtrl", function ($scope, $route, UsersSrvc, loadedUsers) {
   
    $scope.users = loadedUsers;

    $scope.addNewUser = function() {
		UsersSrvc.saveUser($scope.newUser).then(
				function(addedUser) {
					$scope.users.push(addedUser);
					$scope.newUser = null;
				}
			);
    };
    $scope.deleteUser = function(userId) {
		UsersSrvc.deleteUser(userId).then(
				function () {
					$scope.users = _.reject($scope.users, function(e){ return _.isEqual(e.id, userId); });
				}
			);
    };
    $scope.updateUser = function(user) {
		UsersSrvc.updateUser(user).then(
			function okFunction() {

			},
			function errorFunction() {
				$route.reload();
			}

		);
    };
});
