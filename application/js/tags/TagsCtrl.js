/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.controller("TagsCtrl", function ($scope, loadedTags) {

    $scope.tags = loadedTags;

});
