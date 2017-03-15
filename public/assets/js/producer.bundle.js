webpackJsonp([2,5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('mahrio', [
	  'ngRoute',
	  'ui.bootstrap',
	  __webpack_require__(87),
	  __webpack_require__(109)
	]).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	  $locationProvider.html5Mode(true);
	
	  $routeProvider.otherwise({redirectTo: '/'});
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

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('mahrio.producer', ['ngRoute'])
	  .config(['$routeProvider', function($routeProvider) {
	
	    $routeProvider
	      .when('/', {
	        template: __webpack_require__(110),
	        controller: 'ProducerCtrl',
	        controllerAs: 'vm'
	      })
	      .when('/:route', {
	        template: __webpack_require__(110),
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
	      template: __webpack_require__(111),
	      replace: true
	    }
	  }])
	  .directive('pAsideMenu', [function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(112)
	    }
	  }])
	  .directive('pDash', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(113)
	    }
	  }])
	  .directive('pArticles', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(114)
	    }
	  }])
	  .directive('pArticleNew', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(115)
	    }
	  }])
	  .directive('pPages', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(117)
	    }
	  }]);
	
	__webpack_require__(144);
	
	module.exports = 'mahrio.producer';

/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "<p-navigation></p-navigation>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <p-aside-menu>\n        </p-aside-menu>\n\n        <div class=\"main padding-top-57\">\n            <div class=\"container-fluid\">\n                <div ng-if=\"!vm.view\">\n                    <p-dash></p-dash>\n                </div>\n\n                <ng-switch on=\"vm.view\">\n                    <p-article-new ng-switch-when=\"article-new\"></p-article-new>\n                    <p-articles ng-switch-when=\"articles\"></p-articles>\n                    <p-menu ng-switch-when=\"menu\"></p-menu>\n                    <p-pages ng-switch-when=\"pages\"></p-pages>\n                    <four-zero-four app=\"P\" ng-switch-when=\"404\"></four-zero-four>\n                </ng-switch>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 111:
/***/ function(module, exports) {

	module.exports = "<nav class=\" bg-whitesmoke navbar navbar-light navbar-fixed-top no-radius\">\n    <a class=\"navbar-brand\" href=\"/publisher/\">\n        Publisher\n    </a>\n    <div class=\"main\">\n        <form class=\"navbar-form navbar-left\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n\n        <div class=\"navbar-toggleable-md pull-right\" id=\"navbar-header\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/\">\n                        Marketing\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/user/\">\n                        Consumer\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/logout\">\n                        Logout\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n</nav>";

/***/ },

/***/ 112:
/***/ function(module, exports) {

	module.exports = "<div class=\"aside-menu\">\n    <uib-accordion close-others=\"true\">\n        <div class=\"panel-default panel\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                    <a href=\"/publisher/\">DASHBOARD</a>\n                </h4>\n            </div>\n        </div>\n        <div uib-accordion-group class=\"panel-default\">\n            <div uib-accordion-heading>\n                ARTICLES\n            </div>\n            <ul>\n                <li>\n                    <a href=\"/publisher/article-new\">Create Article</a>\n                </li>\n                <li>\n                    <a href=\"/publisher/articles\">List Articles</a>\n                </li>\n            </ul>\n        </div>\n        <div uib-accordion-group class=\"panel-default\">\n            <div uib-accordion-heading>\n                MARKETING\n            </div>\n            <ul>\n                <li>\n                    <a href=\"/publisher/menu\">Menus</a>\n                </li>\n                <li>\n                    <a href=\"/publisher/pages\">Pages</a>\n                </li>\n            </ul>\n        </div>\n    </uib-accordion>\n</div>";

/***/ },

/***/ 113:
/***/ function(module, exports) {

	module.exports = "Dashboard";

/***/ },

/***/ 114:
/***/ function(module, exports) {

	module.exports = "<h1>Articles</h1>";

/***/ },

/***/ 115:
/***/ function(module, exports) {

	module.exports = "<h1>Create Article</h1>";

/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = "<h1>Pages</h1>";

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	angular.module('mahrio.producer')
	  .directive('pMenu', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(147),
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
	      template: __webpack_require__(148),
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

/***/ },

/***/ 147:
/***/ function(module, exports) {

	module.exports = "<h1>\n    <button class=\"pull-right btn btn-primary\" ng-show=\"!selected\" ng-click=\"select(-1);\">New Menu</button>\n    Menus\n</h1>\n<edit-menu menu=\"selected\" ng-show=\"selected\"></edit-menu>\n<div class=\"row\" ng-repeat=\"menu in menus\" ng-show=\"!selected\">\n    <div class=\"col-md-3\">\n        {{::menu.key}}\n    </div>\n    <div class=\"col-md-3\">\n        {{::menu.created | date : 'medium'}}\n    </div>\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-default btn-block\" ng-click=\"select($index)\">\n            Edit\n        </button>\n    </div>\n    <div class=\"col-md-3\">\n        <button class=\"btn btn-danger btn-block\" ng-click=\"removeMenu(menu._id, $index);\">\n            Remove\n        </button>\n    </div>\n</div>";

/***/ },

/***/ 148:
/***/ function(module, exports) {

	module.exports = "<div>\n    <div class=\"row form-group\">\n        <div class=\"col-md-6\">\n            <label>Menu Key</label>\n            <input class=\"form-control\" placeholder=\"main, primary, secondary\" ng-model=\"tempKey\" ng-disabled=\"key\"/>\n        </div>\n        <div class=\"col-md-6\" ng-show=\"!id &amp;&amp; !key\">\n            <label>&nbsp;</label>\n            <btn class=\"btn btn-primary btn-block\" ng-click=\"addKey()\">Create Menu</btn>\n        </div>\n        <div class=\"col-md-6\" ng-show=\"key\">\n            <label>Brand</label>\n            <input class=\"form-control\" placeholder=\"Company Name\" ng-model=\"navigation.brand\"/>\n        </div>\n        <div class=\"col-md-12\" ng-show=\"key\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Logo</label>\n                    <input class=\"form-control\" placeholder=\"Logo Url (shown on home page only)\" ng-model=\"navigation.logo\"/>\n                </div>\n                <div class=\"col-md-6\">\n                    <label>Logo Style</label>\n                    <input class=\"form-control\" placeholder=\"width: ?px; margin-top: ?px\" ng-model=\"navigation.logoStyle\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr ng-show=\"key\"/>\n    <div class=\"row\" ng-show=\"key\">\n        <div class=\"col-md-12\">\n            <label>Links</label>\n            <button class=\"btn btn-primary btn-xs\" ng-click=\"addLink()\"><i class=\"fa fa-plus\"></i></button>\n            <ul class=\"list-group\" style=\"margin: 0;\">\n                <li class=\"list-group-item\" ng-repeat=\"item in navigation.links track by $index\" style=\"padding-left: 50px;\"><i class=\"fa fa-close\" style=\"position:absolute; right: 5px;top:2px; color:#000;z-index:999;font-size:37pt;\" ng-click=\"removeLink( $index ); $event.stopPropagation();\"></i><span style=\"position:absolute; left: 10px; line-height: 34px; font-size: 30px;\">{{$index+1}}</span>\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-md-offset-4\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Text\" ng-model=\"item.text\"/>\n                        </div>\n                        <div class=\"col-md-2 col-md-offset-1\" style=\"padding-right:0;\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"href/mailto\" ng-model=\"item.href\"/>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-6\">\n            <label>Links Style</label>\n            <input class=\"form-control\" placeholder=\"width: ?px; margin-top: ?px\" ng-model=\"navigation.linksStyle\"/>\n        </div>\n    </div>\n    <hr ng-show=\"key\"/>\n    <div class=\"row\" ng-show=\"key\">\n        <div class=\"col-md-12\">\n            <label>Topics&nbsp;</label>\n            <button class=\"btn btn-primary btn-xs\" ng-click=\"addItem()\"><i class=\"fa fa-plus\"></i></button>\n            <ul class=\"list-group\" style=\"margin: 0;\">\n                <li class=\"list-group-item\" ng-repeat=\"item in navigation.topics track by $index\" style=\"padding-left: 50px;\"><i class=\"fa fa-close\" style=\"position:absolute; right: 5px;top:2px; color:#000;z-index:999;font-size:37pt;\" ng-click=\"removeItem( $index ); $event.stopPropagation();\"></i><span style=\"position:absolute; left: 10px; line-height: 34px; font-size: 30px;\">{{$index+1}}</span>\n                    <div class=\"row\">\n                        <div class=\"col-md-2\" style=\"padding-right:0;\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"fa-* (icon)\" ng-model=\"item.icon\"/>\n                        </div>\n                        <div class=\"col-md-2\" style=\"padding-right:0;\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"img_url\" ng-model=\"item.img\"/>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Text\" ng-model=\"item.text\"/>\n                        </div>\n                        <div class=\"col-md-1\" style=\"padding:0;\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"id\" ng-model=\"item.id\"/>\n                        </div>\n                        <div class=\"col-md-2\" style=\"padding-right:0;\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"href/mailto\" ng-model=\"item.href\"/>\n                        </div>\n                        <div class=\"col-md-2\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"_blank\" ng-model=\"item.target\"/>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <hr ng-show=\"key\"/>\n    <div class=\"row\" ng-show=\"key\">\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Newsletter</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"navigation.newsletter\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Search</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"navigation.search\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Accounts</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"navigation.accounts\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Phone</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input class=\"form-control\" type=\"checkbox\" i-check=\"i-check\" ng-model=\"phone\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" placeholder=\"tel:+15307177110\" ng-show=\"phone\" ng-model=\"navigation.phone\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Address</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"address\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"google.com/maps/place\" ng-show=\"address\" ng-model=\"navigation.address\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Mail</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"mail\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" ng-show=\"mail\" placeholder=\"mailto:xxx@xx.xx\" ng-model=\"navigation.mail\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" ng-show=\"key\">\n        <div class=\"col-md-3 col-md-offset-\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Facebook</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"fb\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" ng-show=\"fb\" placeholder=\"facebook url\" ng-model=\"navigation.social.fb\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Twitter</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"twtr\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" ng-show=\"twtr\" placeholder=\"twitter url\" ng-model=\"navigation.social.twitter\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Github</label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"checkbox\" i-check=\"i-check\" ng-model=\"git\"/>\n                </div>\n                <div class=\"col-md-12\">\n                    <input class=\"form-control\" type=\"text\" ng-show=\"git\" placeholder=\"github url\" ng-model=\"navigation.social.github\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr ng-show=\"!directive && key\"/>\n    <div class=\"row\" ng-show=\"!directive && key \">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n            <button class=\"btn btn-primary\" ng-click=\"save()\" ng-show=\"!id\">Save</button>\n            <button class=\"btn btn-primary\" ng-click=\"update()\" ng-show=\"id\">Update</button>\n        </div>\n    </div>\n</div>";

/***/ }

});
//# sourceMappingURL=producer.bundle.js.map