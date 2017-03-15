'use strict';

angular.module('mahrio.shared', [])
  .run(['$rootScope', '$location', '$http', function($rootScope, $location, $http){
    $rootScope.login = function( res ) {
      window.localStorage.Authorization = res.headers('Authorization');
      $http.defaults.headers.common.Authorization = res.headers('Authorization');

      window.localStorage.Access = res.data.access;

      if( res.data.access.indexOf('sudo') !== -1 ) {
        window.location.href = '/publisher/';
      } else {
        window.location.href = '/user/';
      }
    };
  }])
  .directive('modal', [function(){
    return {
      restrict: 'E',
      scope: {
        uibmodal: '=',
        modal: '=',
        title: '@'
      },
      template: require('./modal/modal.html'),
      transclude: true,
      link: function(scope){
        scope.ok = function(){
          scope.$emit('modal:ok', scope.modal, scope.uibmodal.close);
        }
      },
      replace: true
    };
  }])
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
  .directive('contact', [function(){
    return {
      restrict: 'E',
      controller: function($scope){

      },
      template: require('./contact/contact.html')
    }
  }])
  .directive('viewMiddleCentered',[function(){
    return {
      restrict: 'E',
      template: require('./layouts/view-middle-centered.html'),
      transclude: true,
      replace: true
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
  }])
  .directive('bindHtmlCompile', ['$compile', function ($compile) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(function () {
          return scope.$eval(attrs.bindHtmlCompile);
        }, function (value) {
          // In case value is a TrustedValueHolderType, sometimes it
          // needs to be explicitly called into a string in order to
          // get the HTML string.
          element.html(value && value.toString());
          // If scope is provided use it, otherwise use parent scope
          var compileScope = scope;
          if (attrs.bindHtmlScope) {
            compileScope = scope.$eval(attrs.bindHtmlScope);
          }
          $compile(element.contents())(compileScope);
        });
      }
    };
  }]);

require('./hero-slider/directive');
require('./session/directives');
require('./content/article');
module.exports = 'mahrio.shared';