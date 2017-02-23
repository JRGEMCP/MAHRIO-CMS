'use strict';

angular.module('mahrio.shared')
  .factory('Session', [function(){

  }])
  .directive('login', [ '$rootScope', '$location', '$http', function( $rootScope, $location, $http ){
    return {
      restrict: 'E',
      controller: function( $scope, $rootScope ){
        $scope.session = {
          email: '',
          password: ''
        };

        $scope.login = function(){
          $http.post('/api/session/login', $scope.session)
            .then( function(res){
              $rootScope.login( res );
            })
            .catch(function(err){
              // SHOW ERROR MESSAGE
            });
        }
      },
      template: require('./login.html')
    }
  }])
  .directive('register', [ '$rootScope', '$location', '$http', function( $rootScope, $location, $http ){
    return {
      restrict: 'E',
      controller: function($scope){
        $scope.user = {
          fName: '',
          lName: '',
          email: '',
          password: ''
        };
        $scope.register = function(){
          $http.post('/api/session/register', {user: $scope.user})
            .then( function( res ){
              $rootScope.register( res );
            });
        }
      },
      template: require('./register.html')
    }
  }])
  .directive('recoverPassword', ['$http', function( $http ){
    return {
      restrict: 'E',
      template: require('./recover-password.html'),
      controller: function($scope){
        $scope.session = {
          email: ''
        };
        $scope.recoverPassword = function(){
          $http.post('/api/session/recover-password', $scope.session)
            .then(function(){
              // ALWAYS TELL USER TO CHECK EMAIL
            });
        }
      }
    }
  }]);