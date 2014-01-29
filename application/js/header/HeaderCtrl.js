/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.controller("HeaderCtrl", function($scope, $location) {

	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active";
		} else {
			return "";
		}
	};

});