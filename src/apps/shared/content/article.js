angular.module('mahrio.shared')
  .directive('articleShow',[ '$routeParams', '$http', function($routeParams, $http){
    return {
      restrict: 'E',
      template: require('./article-show.html'),
      controller: function($scope){
        $http.get('/article/'+$routeParams.link + '?body=true')
          .then( function(res){
            $scope.article = res.data;
          })
      }
    };
  }])
  .directive('articleList',[ '$routeParams', '$http', function($routeParams, $http){
    return {
      restrict: 'E',
      template: require('./article-list.html'),
      controller: function($scope){
        $http.get('/api/articles')
          .then( function(res){
            $scope.articles = res.data.articles;
          })

      }
    };
  }]);