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
      var token = window.localStorage.Authorization
        , access = window.localStorage.Access;
      if( !token || access.indexOf('sudo') === -1  ) {
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
      case 'article-new':
      case 'articles':
      case 'menu':
      case 'pages':
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
  .directive('pAsideMenu', [function(){
    return {
      restrict: 'E',
      template: require('./components/producer-aside-menu.html')
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
  }])
  .directive('pArticleNew', [ function(){
    return {
      restrict: 'E',
      template: require('./pages/article-new.html')
    }
  }])
  .directive('pPages', [ function(){
    return {
      restrict: 'E',
      template: require('./pages/pages.html')
    }
  }]);

require('./components/marketing/menu');

module.exports = 'mahrio.producer';