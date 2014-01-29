var hbApp = angular.module('hbApp', ['ngRoute']);

hbApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'js/welcome/welcome.html'
        })
        .when('/tags', {
            templateUrl: 'js/tags/tags.html'
        })
        .otherwise({
            redirectTo: '/error'
        });
});