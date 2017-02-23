'use strict';

angular.module('mahrio', [
  'ngRoute',
  'ui.bootstrap',
  require('./shared/module'),
  require('./_marketing/module')
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/'});
}]).run(['$rootScope', '$location', function($rootScope, $location){
  if( window.localStorage.Authorization ) {
    $rootScope.isLoggedIn = true;
    var access = window.localStorage.Access;
    if( access.indexOf('sudo') !== -1 ) {
      $rootScope.role = 'sudo';
    } else if( access.indexOf('authorized') !== -1 ) {
      $rootScope.role = 'authorized';
    }
  }
  $rootScope.logout = function(){
    delete window.localStorage.Authorization;
    delete window.localStorage.Access;
    $rootScope.isLoggedIn = false;
    $rootScope.role = null;
    $location.path('/');
  }
}]);
