'use strict';

angular.module('mahrio.producer', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        template: require('./template.html'),
        controller: 'ProducerCtrl',
        controllerAs: 'vm'
      })
      .when('/:route', {
        template: require('./template.html'),
        controller: 'ProducerCtrl',
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
  .controller('ProducerCtrl', [ '$routeParams', function( $routeParams ) {
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
        break;
      default:
        if( typeof this.view !== 'undefined' ){
          this.view = '404';
        }
        break;
    }
  }])
  .directive('pNavigation', [ function(){
    return {
      restrict: 'E',
      template: require('./components/producer-navigation.html'),
      replace: true
    }
  }])
  .directive('pDash', [ function(){
    return {
      restrict: 'E',
      template: require('./pages/dashboard.html')
    }
  }])
  .directive('pArticles', [ function(){
    return {
      restrict: 'E',
      template: require('./pages/articles.html')
    }
  }]);
module.exports = 'mahrio.producer';