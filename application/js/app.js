var hbApp = angular.module('hbApp', ['ngRoute']);

hbApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'js/welcome/welcome.html'
        })
        .when('/tags', {
            templateUrl: 'js/tags/tags.html',
            controller:'TagsCtrl',
            resolve: {
                loadedTags: function (TagsSrvc) {
                    return TagsSrvc.fetchAll();
                }
            }
        })
        .when('/users', {
            templateUrl: 'js/users/users.html',
            controller:'UsersCtrl',
            resolve: {
                loadedUsers: function (UsersSrvc) {
                    return UsersSrvc.fetchAll();
                }
            }
        })
        .otherwise({
            redirectTo: '/error'
        });
});