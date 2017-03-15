angular.module('mahrio.marketing')
  .controller('ArticleCtrl',[ '$routeParams', '$http', function($routeParams, $http){
    var that = this;
    $http.get('/article/'+$routeParams.link + '?body=true')
      .then( function(res){
        that.article = res.data;
      })
  }]);