'use strict';

angular.module('mahrio.marketing', [ 'ngRoute','ngSanitize'])
  .config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        template: require('./template.html'),
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      })
      .when('/article/:link', {
        template: '<article-show></article-show>'
      })
      .when('/:route', {
        template: require('./template.html'),
        controller: 'MarketingCtrl',
        controllerAs: 'vm'
      });
  }])
  .controller('MarketingCtrl', [ '$routeParams', '$rootScope', function( $routeParams, $rootScope ) {
    this.view = $routeParams.route;
    if( typeof this.view === 'undefined'){
      return;
    }
    console.log( this.view);
    switch( this.view) {
      // LIST OF SUPPORTED PATHS
      case 'logout':
        $rootScope.logout();
        $rootScope.$broadcast('event:logout');
        return;
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
  .directive('home', [ '$http', function( $http ){
    return {
      restrict: 'E',
      scope: {},
      controller: function( $scope ){
        $http.get('/api/pages/home')
          .then(function(res){
            $scope.page = res.data;
          })
          .catch(function(){
            $scope.page = "<four-zero-four></four-zero-four>";
          })
      },
      template: require('./pages/home.html'),
      replace: true
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
  .controller('NewsletterCtrl', [function(){
    this.test = 1;
  }])
  .directive('navigation', [ '$window', '$uibModal', '$rootScope', function($window, $uibModal, $rootScope){
    return {
      restrict: 'E',
      scope: {},
      controller: function( $scope ){
        if( $window.primaryMenu ) {
          $scope.header = $window.primaryMenu;
        }
        $scope.newsletter = function(){
          var modalInstance = $uibModal.open({
            template: require('./components/newsletter.html'),
            controller: 'NewsletterCtrl',
            controllerAs: 'vm',
            backdrop: 'static',
            keyboard: false,
            bindToController: true
          });
        };
        $scope.account = function(){
          window.location.href = $rootScope.role == 'sudo' ? '/publisher/' : '/user/';
        };
        $scope.isLoggedIn = $rootScope.isLoggedIn;
        $scope.$on('event:logout', function(){
          $scope.isLoggedIn = false;
        })
      },
      template: require('./components/marketing-navigation.html'),
      replace: true
    }
  }])
  .controller('NewsletterCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance){
    this.uibmodalinstance = $uibModalInstance;
    $scope.modal = {};
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    $scope.$on('modal:ok', function($event, obj, close){
      if( obj.email ) {
        console.log( 'Newsletter Email: ', obj.email);
        close();
      } else {
        $scope.alerts = [{type: 'danger', msg: 'Email cannot be empty'}];
      }
    });
  }]);

module.exports = 'mahrio.marketing';