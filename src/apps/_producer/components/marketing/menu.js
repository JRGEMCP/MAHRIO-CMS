angular.module('mahrio.producer')
  .directive('pMenu', [ function(){
    return {
      restrict: 'E',
      template: require('./menu-list.html'),
      controller: function($scope, $http){
        $scope.removeMenu = function( id, index ) {
          $http.delete('/api/pages/menu/'+id)
            .then( function(){
              $scope.menus.splice( index, 1);
            });
        };
        $scope.select = function(i){
          if( i >= 0 ) {
            $scope.selected = $scope.menus[i];
          } else {
            $scope.selected = 'new';
          }
        };
        $scope.$on('event:done', function(e, res){
          $scope.selected = null;
          console.log('done', e, res);
        });
        $http.get('/api/pages/menus')
          .then( function(res) {
            $scope.menus = res.data.menus;
          });
      }
    }
  }])
  .directive('editMenu',['$http', function($http){
    return {
      restrict: 'E',
      template: require('./menu-form.html'),
      scope: {
        menu: '='
      },
      link: function( scope ){
        scope.$watch( function(){ return scope.menu; }, function(nw, ol){
          if( nw ) {
            if( nw._id ) {
              scope.navigation = nw.content;
              scope.key = nw.key;
              scope.tempKey = nw.key;
              scope.id = nw._id;
              scope.fb = scope.navigation.social.fb ? true : false;
              scope.twtr = scope.navigation.social.twitter ? true : false;
              scope.git = scope.navigation.social.github ? true : false;
              scope.mail = scope.navigation.mail ? true : false;
            } else if( nw == 'new') {
              var currentIndex = null;
              scope.key = '';
              scope.tempKey = '';
              scope.navigation = {
                brand: '',
                links: [],
                topics: [],
                newsletter: false,
                search: false,
                phone: null,
                mail: null,
                address: null,
                accounts: false,
                social: {
                  fb: '',
                  linkedIn: '',
                  pinterest: '',
                  twitter: '',
                  github: ''
                }
              };
            }

          }
        });
        scope.addKey = function(){
          scope.key = scope.tempKey;
        };
        scope.addItem = function(){
          if( !scope.navigation.topics || !scope.navigation.topics.length ) {
            scope.navigation.topics = [{}];
          } else {
            scope.navigation.topics.push( {} );
          }
        };
        scope.removeItem = function( i ){
          scope.navigation.topics.splice( i, 1 );
        };
        scope.addLink = function(){
          if( !scope.navigation.links || !scope.navigation.links.length ) {
            scope.navigation.links = [ {} ];
          } else {
            scope.navigation.links.push( {} );

          }
        };
        scope.removeLink = function( i ){
          scope.navigation.links.splice( i, 1);
        };
        scope.isIndexOf = function( i ) {
          return i === currentIndex;
        };
        scope.cancel = function(){ scope.$emit('event:done'); };
        scope.save = function(){
          $http.post('/api/pages/menu', {menu: {content: scope.navigation, key: scope.key}})
            .then( function(res){
              scope.$emit('event:done', res);
            });
        };
        scope.update = function(){
          $http.put('/api/pages/menu/'+scope.id, {menu: {content: scope.navigation, key: scope.key}})
            .then( function(res){
              scope.$emit('event:done', res);
            });
        }
      }
    }
  }]);