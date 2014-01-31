/*global hbApp*/
/* jslint node: true */
'use strict';

hbApp.directive('inputeditable', function () {

    return {
        restrict: 'E',
        replace: true,
        template:
			"<div>" +
				"<div ng-hide='editMode' ng-click='editMode = true'>{{text}}</div>" +
				"<input ng-show='editMode' type='text' ng-model='text'  />" +
			"</div>",
        scope: {
            text: '='
        },
        link: function (scope, element) {

            scope.editMode = (scope.text === "");

            // find the input elemnt of this directive ...
            var input = element.find('input');
            input.bind('click', function () {
                scope.$apply(function () {
                    input.focus();
                    input.select();
                });
            });
            input.bind('blur', function () {
                // since blur event occured ouside the angular execution context
                // we need to call scope.$apply to tell angularjs about the changes
                scope.$apply(function () {
                    // the change is to disable the editMode
                    scope.editMode = (scope.text === "");
                });

            });
        }
    };

});


