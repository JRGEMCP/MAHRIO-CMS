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
      var token = window.localStorage.Authorization;
      if( !token ) {
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
      case 'logout':
        delete window.localStorage.Authorization;
        window.location.href = '/';
        return;
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
  .directive('cNavigation', [ function(){
    return {
      restrict: 'E',
      template: require('./components/consumer-navigation.html'),
      replace: true
    }
  }])
  .directive('cDash', [ function(){
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