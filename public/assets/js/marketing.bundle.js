webpackJsonp([1,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('mahrio', [
	  'ngRoute',
	  'ui.bootstrap',
	  __webpack_require__(87),
	  __webpack_require__(105)
	]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	  $locationProvider.html5Mode(true);
	
	  $routeProvider.otherwise({redirectTo: '/'});
	}]).run(['$rootScope', '$location', function($rootScope, $location){
	  if( window.localStorage.Authorization ) {
	    $rootScope.isLoggedIn = true;
	    var access = window.localStorage.Access;
	    if( access.indexOf('sudo') !== -1 ) {
	      $rootScope.role = 'sudo';
	    } else if( access.indexOf('authorized') !== -1 ) {
	      $rootScope.role = 'authorized';
	    }
	  }
	  $rootScope.logout = function(){
	    delete window.localStorage.Authorization;
	    delete window.localStorage.Access;
	    $rootScope.isLoggedIn = false;
	    $rootScope.role = null;
	    $location.path('/');
	  }
	}]);


/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

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
	      template: __webpack_require__(88),
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
	      template: __webpack_require__(89),
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
	      template: __webpack_require__(90)
	    }
	  }])
	  .directive('viewMiddleCentered',[function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(91),
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
	      template: __webpack_require__(92)
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
	
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(98);
	module.exports = 'mahrio.shared';

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = "<div>\n    <div class=\"modal-header\">\n        <h3 class=\"modal-title\" id=\"modal-title\">{{title}}</h3>\n    </div>\n    <div class=\"modal-body\" id=\"modal-body\">\n        <ng-transclude></ng-transclude>\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-md-offset-6\">\n                <button class=\"btn btn-default btn-block\" type=\"button\" ng-click=\"uibmodal.close()\">Cancel</button>\n            </div>\n            <div class=\"col-md-3\">\n                <button class=\"btn btn-primary btn-block\" type=\"button\" ng-click=\"ok()\">OK</button>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = "<ng-form name=\"form\">\n    <div class=\"form-group\">\n        <label for=\"{{id}}\">\n            {{label}}\n        </label>\n        <input id=\"{{id}}\" type=\"{{type}}\" ng-model=\"in\" placeholder=\"{{placeholder}}\"\n               autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"form-control\"/>\n    </div>\n</ng-form>";

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = "<section id=\"contact\" style=\"background: #e3e3e3;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h1>  CONTACT US</h1>\n                <hr class=\"section-divider\">\n                <h4>  Please tell us about your next career goals and we will let you know what we can do to help you.</h4>\n            </div>\n        </div>\n        <div class=\"row content-row\">\n            <div class=\"col-md-6\">\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>First Name</label>\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Last Name</label>\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <label>  Email Address</label>\n                        <input type=\"email\" class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <label>  Message</label>\n                        <textarea rows=\"5\" class=\"form-control\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center clearfix\">\n                <div class=\"row form-group col-xs-6 col-xs-offset-3\">\n                    <hr class=\"featurette-divider\">\n                    <button class=\"btn btn-primary btn-block btn-lg\">  Send</button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</section>";

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = "<div class=\"container content-table\">\n    <div class=\"container-body content-table-cell\">\n        <div class=\"row\">\n            <div class=\"col-md-4 col-md-offset-4\">\n                <ng-transclude></ng-transclude>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = "<view-middle-centered>\n    <h1>{{app}}: 404</h1>\n</view-middle-centered>\n";

/***/ },

/***/ 93:
/***/ function(module, exports) {

	angular.module('mahrio.shared')
	  .directive('heroSlider',[function(){
	    return {
	      restrict: 'E',
	      controller: function(){
	        var autoPlayId, visibleSlidePosition = 0;
	        function nextSlide(visibleSlide, container, pagination, n){
	          visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	            visibleSlide.removeClass('is-moving');
	          });
	
	          container.children('li').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
	          checkVideo(visibleSlide, container, n);
	        }
	
	        function prevSlide(visibleSlide, container, pagination, n){
	          visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
	            visibleSlide.removeClass('is-moving');
	          });
	
	          container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
	          checkVideo(visibleSlide, container, n);
	        }
	
	        function updateSliderNavigation(pagination, n) {
	          var navigationDot = pagination.find('.selected');
	          navigationDot.removeClass('selected');
	          pagination.find('li').eq(n).addClass('selected');
	        }
	
	        function setAutoplay(wrapper, length, delay) {
	          if(wrapper.hasClass('autoplay')) {
	            clearInterval(autoPlayId);
	            autoPlayId = window.setInterval(function(){autoplaySlider(length);}, delay);
	          }
	        }
	
	        function autoplaySlider(length) {
	          if( visibleSlidePosition < length - 1) {
	            nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
	            visibleSlidePosition +=1;
	          } else {
	            prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
	            visibleSlidePosition = 0;
	          }
	          updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
	          updateSliderNavigation(sliderNav, visibleSlidePosition);
	        }
	
	        function uploadVideo(container) {
	          container.find('.cd-bg-video-wrapper').each(function(){
	            var videoWrapper = $(this);
	            if( videoWrapper.is(':visible') ) {
	              // if visible - we are not on a mobile device
	              var	videoUrl = videoWrapper.data('video'),
	                video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
	              video.appendTo(videoWrapper);
	              // play video if first slide
	              if(videoWrapper.parent('.cd-bg-video.selected').length > 0) {video.get(0).play(); }
	            }
	          });
	        }
	
	        function checkVideo(hiddenSlide, container, n) {
	          //check if a video outside the viewport is playing - if yes, pause it
	          var hiddenVideo = hiddenSlide.find('video');
	          if( hiddenVideo.length > 0 ) { hiddenVideo.get(0).pause(); }
	
	          //check if the select slide contains a video element - if yes, play the video
	          var visibleVideo = container.children('li').eq(n).find('video');
	          if( visibleVideo.length > 0 ) { visibleVideo.get(0).play(); }
	        }
	
	        function updateNavigationMarker(marker, n) {
	          marker.removeClassPrefix('item').addClass('item-'+n);
	        }
	        $(document).ready(function($){
	
	          var slidesWrapper = $('.cd-hero-slider');
	
	
	          //check if a .cd-hero-slider exists in the DOM
	          if ( slidesWrapper.length > 0 ) {
	            var primaryNav = $('.cd-primary-nav'),
	              sliderNav = $('.cd-slider-nav'),
	              navigationMarker = $('.cd-marker'),
	              slidesNumber = slidesWrapper.children('li').length,
	              autoPlayDelay = 5000;
	
	            //upload videos (if not on mobile devices)
	            uploadVideo(slidesWrapper);
	
	            //autoplay slider
	            setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
	
	            //on mobile - open/close primary navigation clicking/tapping the menu icon
	            primaryNav.on('click', function(event){
	              if($(event.target).is('.cd-primary-nav')) { $(this).children('ul').toggleClass('is-visible'); }
	            });
	
	            //change visible slide
	            sliderNav.on('click', 'li', function(event){
	              event.preventDefault();
	              var selectedItem = $(this);
	              if(!selectedItem.hasClass('selected')) {
	                // if it's not already selected
	                var selectedPosition = selectedItem.index(),
	                  activePosition = slidesWrapper.find('li.selected').index();
	
	                if( activePosition < selectedPosition) { console.log('next');
	                  nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
	                } else { console.log('prev');
	                  prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
	                }
	
	                //this is used for the autoplay
	                visibleSlidePosition = selectedPosition;
	
	                updateSliderNavigation(sliderNav, selectedPosition);
	                updateNavigationMarker(navigationMarker, selectedPosition+1);
	                //reset autoplay
	                setAutoplay(slidesWrapper, slidesNumber, autoPlayDelay);
	              }
	            });
	          }
	
	          $.fn.removeClassPrefix = function(prefix) {
	            //remove all classes starting with 'prefix'
	            this.each(function(i, el) {
	              var classes = el.className.split(' ').filter(function(c) {
	                return c.lastIndexOf(prefix, 0) !== 0;
	              });
	              el.className = $.trim(classes.join(' '));
	            });
	            return this;
	          };
	        });
	      },
	      template: '<ng-transclude></ng-transclude>',
	      transclude: true,
	      replace: true
	    };
	  }]);

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

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
	      template: __webpack_require__(95)
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
	      template: __webpack_require__(96)
	    }
	  }])
	  .directive('recoverPassword', ['$http', function( $http ){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(97),
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

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = "<view-middle-centered>\n    <form novalidate ng-submit=\"login()\">\n        <h2>Login</h2>\n\n        <form-input-tag in=\"session.email\" type=\"email\" label=\"Email\"></form-input-tag>\n\n        <form-input-tag in=\"session.password\" type=\"password\" label=\"Password\"></form-input-tag>\n\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n            Login\n        </button>\n        <br/>\n        <div class=\"text-center\">\n            <a href=\"/reset-password\">\n                Reset Password\n            </a>\n        </div>\n    </form>\n</view-middle-centered>";

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = "<view-middle-centered>\n    <form novalidate ng-submit=\"register()\">\n        <h2>Registers</h2>\n\n        <form-input-tag in=\"user.fName\" label=\"First Name\"></form-input-tag>\n\n        <form-input-tag in=\"user.lName\" label=\"Last Name\"></form-input-tag>\n\n        <form-input-tag in=\"user.email\" type=\"email\" label=\"Email\"></form-input-tag>\n\n        <form-input-tag in=\"user.password\" type=\"password\" label=\"Password\"></form-input-tag>\n\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n            Register\n        </button>\n        <br/>\n        <div class=\"text-center\">\n            <a href=\"/login\">\n                Have an Account?\n            </a>\n        </div>\n    </form>\n</view-middle-centered>";

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = "<view-middle-centered>\n    <form novalidate ng-submit=\"recoverPassword()\">\n        <h2>Reset Password</h2>\n\n        <form-input-tag in=\"session.email\" type=\"email\" label=\"Email\"></form-input-tag>\n\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n            Recover Password\n        </button>\n    </form>\n</view-middle-centered>";

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	angular.module('mahrio.shared')
	  .directive('articleShow',[ '$routeParams', '$http', function($routeParams, $http){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(99),
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
	      template: __webpack_require__(100),
	      controller: function($scope){
	        $http.get('/api/articles')
	          .then( function(res){
	            $scope.articles = res.data.articles;
	          })
	
	      }
	    };
	  }]);

/***/ },

/***/ 99:
/***/ function(module, exports) {

	module.exports = "<div style=\"padding-top: 60px\">\n    <div bind-html-compile=\"article\">\n\n    </div>\n</div>\n";

/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div class=\"row\" ng-repeat=\"article in articles\">\n        <div class=\"col-md-12\">\n            <a href=\"/user/article/{{article.link}}\">\n                {{article.title}}\n            </a>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('mahrio.marketing', [ 'ngRoute','ngSanitize'])
	  .config(['$routeProvider', function($routeProvider) {
	
	    $routeProvider
	      .when('/', {
	        template: __webpack_require__(106),
	        controller: 'MarketingCtrl',
	        controllerAs: 'vm'
	      })
	      .when('/article/:link', {
	        template: '<article-show></article-show>'
	      })
	      .when('/:route', {
	        template: __webpack_require__(106),
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
	      template: __webpack_require__(107),
	      replace: true
	    }
	  }])
	  .directive('articles', [ '$rootScope', function( $rootScope ){
	    return {
	      restrict: 'E',
	      scope: {},
	      controller: function( $scope ){
	
	      },
	      template: __webpack_require__(108),
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
	            template: __webpack_require__(109),
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
	      template: __webpack_require__(110),
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

/***/ },

/***/ 106:
/***/ function(module, exports) {

	module.exports = "<div class=\"container-fluid\" id=\"marketing\">\n    <div class=\"row\">\n        <div ng-if=\"!vm.view\">\n            <home></home>\n        </div>\n\n        <ng-switch on=\"vm.view\">\n            <articles ng-switch-when=\"articles\"></articles>\n            <four-zero-four app=\"M\" ng-switch-when=\"404\"></four-zero-four>\n\n            <login ng-switch-when=\"login\"></login>\n            <register ng-switch-when=\"register\"></register>\n            <recover-password ng-switch-when=\"reset-password\"></recover-password>\n        </ng-switch>\n    </div>\n</div>";

/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = "<div bind-html-compile=\"page\">\n\n</div>\n\n";

/***/ },

/***/ 108:
/***/ function(module, exports) {

	module.exports = "<h1>M: Articles</h1>";

/***/ },

/***/ 109:
/***/ function(module, exports) {

	module.exports = "<div style=\"padding:15px;\" ng-if=\"alerts.length\">\n    <div uib-alert ng-repeat=\"alert in alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\"\n         close=\"closeAlert($index)\">{{alert.msg}}\n    </div>\n</div>\n\n<modal uibmodal=\"vm.uibmodalinstance\" modal=\"modal\" title=\"Newsletter\">\n    <form-input-tag in=\"modal.email\" type=\"email\" label=\"Email\"></form-input-tag>\n</modal>\n";

/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "<header class=\"navbar navbar-default navbar-fixed-top\" ng-class=\"header.class\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"/\">\n                {{header.brand}}\n            </a>\n        </div>\n        <nav>\n\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\" ng-class=\"{true: 'collapse'}[!collapseTopics]\" ng-if=\"header.topics && header.topics.length\"\n                    ng-click=\"collapseTopics = !collapseTopics\">\n                    <a class=\"nav-link\" href=\"#\">\n                        Topics\n                    </a>\n                    <div class=\"dropdown\">\n                        <div class=\"container-fluid\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3\" ng-repeat=\"topic in header.topics\">\n                                    <a ng-href=\"{{topic.href}}\">\n                                        {{topic.text}}\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"nav-item\" ng-repeat=\"link in header.links\">\n                    <a class=\"nav-link\" href=\"{{link.href}}\">\n                        {{link.text}}\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.newsletter\">\n                    <a ng-click=\"newsletter()\" href=\"javascript:void(0)\">\n                        Newsletter\n                    </a>\n                </li>\n\n                <li class=\"nav-item\" ng-if=\"header.social && header.social.fb\">\n                    <a ng-href=\"{{header.social.fb}}\" target=\"_blank\">\n                       <i class=\"fa fa-facebook-f\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.social && header.social.twitter\">\n                    <a ng-href=\"{{header.social.twitter}}\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.social && header.social.github\">\n                    <a ng-href=\"{{header.social.github}}\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.social && header.social.pinterest\">\n                    <a ng-href=\"{{header.social.pinterest}}\" target=\"_blank\">\n                        <i class=\"fa fa-pinterest\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.social && header.social.linkedIn\">\n                    <a ng-href=\"{{header.social.linkedIn}}\" target=\"_blank\">\n                        <i class=\"fa fa-linkedin\"></i>\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.accounts && !isLoggedIn\">\n                    <a href=\"/login\">\n                        Login\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.accounts && !isLoggedIn\">\n                    <a href=\"/register\">\n                        Register\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.accounts && isLoggedIn\">\n                    <a href=\"javascript:void(0)\" ng-click=\"account()\">\n                        Account\n                    </a>\n                </li>\n                <li class=\"nav-item\" ng-if=\"header.accounts && isLoggedIn\">\n                    <a href=\"/logout\">\n                        Logout\n                    </a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav pull-right\">\n                <form class=\"navbar-form navbar-left\" ng-if=\"header.search\" style=\"line-height: 50px\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\n                </form>\n            </ul>\n        </nav>\n    </div>\n</header>\n";

/***/ }

});
//# sourceMappingURL=marketing.bundle.js.map