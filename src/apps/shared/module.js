'use strict';

angular.module('mahrio.shared', ['ui.bootstrap'])
  .component('modal', {
    template: require('./modal/modal.html'),
    controller: function(){
      console.log('inside modal');
    }
  })
  .directive('formInputTag', [ function( ){
    return {
      restrict: 'E',
      replace: true,
      template: require('./form-input-tag/form-input-tag.html'),
      scope: {
        in: '='
      },
      link: function( scope, elem, attr ) {
        scope.label = attr.label || '';
        scope.placeholder = attr.placeholder || '';
        scope.id = attr.id || new Date().getTime();
        scope.type = attr.type || 'text';
      }
    };
  }])
  .directive('login', [ '$rootScope', '$location', function( $rootScope, $location ){
    return {
      restrict: 'E',
      controller: function( $scope ){
        $scope.session = {
          email: '',
          password: ''
        };

        $scope.login = function(){
          $rootScope.setAuthorization( true );
          window.location.href = '/user/';
        }
      },
      template: require('./session/login.html')
    }
  }])
  .directive('register', [ function(){
    return {
      restrict: 'E',
      template: require('./session/register.html')
    }
  }])
  .directive('resetPassword', [function(){
    return {
      restrict: 'E',
      template: require('./session/reset-password.html')
    }
  }])
  .directive('contact', [function(){
    return {
      restrict: 'E',
      controller: function($scope){

      },
      template: require('./contact/contact.html')
    }
  }])
  .directive('fourZeroFour', [ function(){
    return {
      restrict: 'E',
      link: function (scope, element, attrs){
        scope.app = attrs['app'];
      },
      template: require('./404/404.html')
    }
  }]);

require('./hero-slider/directive');

module.exports = 'mahrio.shared';