'use strict';

angular.module('mahrio.consumer', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        template: require('./template.html'),
        controller: 'ConsumerCtrl',
        controllerAs: 'vm'
      })
      .when('/:route', {
        template: require('./template.html'),
        controller: 'ConsumerCtrl',
        controllerAs: 'vm'
      });
  }])

  .run( ['$rootScope', '$http', function( $rootScope, $http ) {
    $rootScope.getAuthorization = function( ) {
      var token = window.localStorage.Authorization
        , access = window.localStorage.Access;
      if( !token || access.indexOf('authorized') === -1  ) {
        return window.location.href = '/';
      } else {
        $http.defaults.headers.common.Authorization = token;

        // $http.get('/api/users/me')
        //   .then( function(res){
        //     console.log( res );
        //   })
        //   .catch( function(err){
        //     console.log(err);
        //   });
        if( access.indexOf('sudo') !== -1 ) {
          $rootScope.isPublisher = true;
        }
      }
    };
    $rootScope.getAuthorization();
  }])
  .controller('ConsumerCtrl', [ '$routeParams', function( $routeParams ) {
    this.view = $routeParams.route;
    if( typeof this.view === 'undefined'){
      return;
    }
    switch( this.view) {
      // LIST OF SUPPORTED PATHS
      case 'articles':
      case 'login':
      case 'register':
        break;
      default:
        if( typeof this.view !== 'undefined' ){
          this.view = '404';
        }
        break;
    }
  }])
  .directive('cNavigation', [ '$rootScope', function( $rootScope ){
    return {
      restrict: 'E',
      template: require('./components/consumer-navigation.html'),
      replace: true,
      controller: function( $scope ){
        $scope.isPublisher = $rootScope.isPublisher;
      }
    }
  }])
  .directive('cDash', [function(){
    return {
      restrict: 'E',
      template: require('./pages/dashboard.html')
    }
  }])
  .directive('cArticles', [ function(){
    return {
      restrict: 'E',
      template: require('./pages/articles.html')
    }
  }]);
module.exports = 'mahrio.consumer';