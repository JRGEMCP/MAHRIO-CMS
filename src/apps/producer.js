'use strict';

angular.module('mahrio', [
  'ngRoute',
  'ui.bootstrap',
  require('./shared/module'),
  require('./_producer/module')
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]);
