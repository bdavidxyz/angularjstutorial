/*global hbApp*/
/* jslint node: true */
'use strict';


hbApp.directive('datepicker', function () {

    return {

        // Enforce the angularJS default of restricting the directive to
        // attributes only
        restrict: 'A',

        // Always use along with an ng-model
        require: '?ngModel',

        scope: {

            // This method needs to be defined and
            // passed in to the directive from the view controller
            select: '&' // Bind the select function we refer to the right scope

        },

        link: function (scope, element, attrs, ngModel) {

            if (!ngModel) return;

            var optionsObj = {};
            optionsObj.dateFormat = 'dd M yy';
            var updateModel = function (timestamp) {
                scope.$apply(function () {

                    // Call the internal AngularJS helper to
                    // update the two-way binding
                    ngModel.$setViewValue(timestamp);

                });

            };

            optionsObj.defaultDate = new Date();
            optionsObj.onSelect = function (dateTxt, picker) {

                var year = parseInt(picker.currentYear ,10);
                var month = parseInt(picker.currentMonth ,10);
                var day = parseInt(picker.currentDay ,10);

                var strDate = (month+1) + "/" + day + "/" + year;

                // var currentTimestamp =
                //     moment(
                //         [parseInt(picker.currentYear ,10),
                //          parseInt(picker.currentMonth ,10),
                //          parseInt(picker.currentDay, 10) ]);
                // currentTimestamp = currentTimestamp.toDate().getTime();
                var currentTimestamp = new Date(strDate).getTime();
                updateModel(currentTimestamp);
                if (scope.select) {
                    scope.$apply(function () {
                        scope.select(
                            {
                                date: dateTxt,
                                timestamp: currentTimestamp
                            });
                    });
                }

            };

            ngModel.$render = function () {
                // Use the AngularJS internal 'binding-specific' variable
                if (ngModel.$viewValue) {
                    element.datepicker('setDate', new Date(parseInt(ngModel.$viewValue, 10)) || '');
                }
            };

            element.datepicker(optionsObj);

        }
    };

});