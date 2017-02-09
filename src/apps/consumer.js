'use strict';

angular.module('mahrio', [
  'ngRoute',
  require('./shared/module'),
  require('./_consumer/module')
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]);
