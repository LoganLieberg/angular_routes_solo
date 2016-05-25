var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/jake', {
      templateUrl: '/views/jake.html',
      controller: "JakeController"
    })
    .when('/pluto', {
      templateUrl: '/views/pluto.html',
      controller: "PlutoController"
    })
    .when('/gromit', {
      templateUrl: '/views/gromit.html',
      controller: "GromitController"
    })
    .otherwise({
      redirectTo: 'jake'
    })
}]);
