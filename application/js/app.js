var hbApp = angular.module('hbApp', ['ngRoute']);

hbApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'js/welcome/welcome.html'
        })
        .otherwise({
            redirectTo: '/error'
        });
});