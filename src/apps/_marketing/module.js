'use strict';

angular.module('mahrio.marketing', [ 'ngRoute'  ])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/marketing.html',
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      })
      .when('/:route', {
        templateUrl: '/marketing.html',
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      });
  }])

  .run(['$rootScope', '$http', function($rootScope, $http){
    $rootScope.setAuthorization = function( token ) {
      window.localStorage.Authorization = token;
    };
  }])

  .controller('MarketingCtrl', [ '$routeParams', function( $routeParams ) {
    this.view = $routeParams.route;
    if( typeof this.view === 'undefined'){
      return;
    }
    switch( this.view) {
      // LIST OF SUPPORTED PATHS
      case 'articles':
      case 'login':
      case 'register':
      case 'reset-password':
        break;
      default:
        if( typeof this.view !== 'undefined' ){
          this.view = '404';
        }
        break;
    }
  }])
  .directive('home', [ '$rootScope', function( $rootScope ){
    return {
      restrict: 'E',
      scope: {},
      controller: function( $scope ){

      },
      template: require('./pages/home.html'),
      replace: true,
      transclude: true,
    }
  }])
  .directive('articles', [ '$rootScope', function( $rootScope ){
    return {
      restrict: 'E',
      scope: {},
      controller: function( $scope ){

      },
      template: require('./pages/articles.html'),
      replace: true
    }
  }])
  .directive('navigation', [ '$window', function($window){
    return {
      restrict: 'E',
      scope: {},
      controller: function( $scope ){
        if( $window.primaryMenu ) {
          $scope.header = $window.primaryMenu;
        }
      },
      template: require('./components/marketing-navigation.html'),
      replace: true
    }
  }]);;

module.exports = 'mahrio.marketing';