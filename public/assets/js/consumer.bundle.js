webpackJsonp([0,4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('mahrio', [
	  'ngRoute',
	  __webpack_require__(87),
	  __webpack_require__(94)
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
	  .directive('formInputTag', [ function( ){
	    return {
	      restrict: 'E',
	      replace: true,
	      template: __webpack_require__(88),
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
	      template: __webpack_require__(89)
	    }
	  }])
	  .directive('register', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(90)
	    }
	  }])
	  .directive('contact', [function(){
	    return {
	      restrict: 'E',
	      controller: function($scope){
	
	      },
	      template: __webpack_require__(91)
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
	  }]);
	
	__webpack_require__(93);
	
	module.exports = 'mahrio.shared';

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = "<ng-form name=\"form\">\n    <div class=\"form-group\">\n        <label for=\"{{id}}\">\n            {{label}}\n        </label>\n        <div class=\"input-group\">\n            <input id=\"{{id}}\" type=\"{{type}}\" ng-model=\"in\" placeholder=\"{{placeholder}}\"\n                autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"form-control\"/>\n        </div>\n    </div>\n</ng-form>";

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div class=\"container-body\">\n        <form novalidate ng-submit=\"login()\">\n            <h2 class=\"form-signin-heading\">Login</h2>\n\n            <form-input-tag in=\"session.email\" type=\"email\" label=\"Email\"></form-input-tag>\n\n            <form-input-tag in=\"session.password\" type=\"password\" label=\"Password\"></form-input-tag>\n\n            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n                Login\n            </button>\n            <br/>\n            <a href=\"/m/reset-password\">\n                Reset Password\n            </a>\n        </form>\n    </div>\n</div>";

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n    <div class=\"container-body\">\n        <form class=\"form-signin\">\n            <h2 class=\"form-signin-heading\">Register</h2>\n\n            <form-input-tag in=\"vm.user.fName\" label=\"First Name\"></form-input-tag>\n\n            <form-input-tag in=\"vm.user.lName\" label=\"Last Name\"></form-input-tag>\n\n            <form-input-tag in=\"vm.user.email\" type=\"email\" label=\"Email\"></form-input-tag>\n\n            <form-input-tag in=\"vm.user.password\" type=\"password\" label=\"Password\"></form-input-tag>\n\n            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">\n                register\n            </button>\n            <br/>\n            <a href=\"/m/login\">\n                Have an Account?\n            </a>\n        </form>\n    </div>\n</div>";

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = "<section id=\"contact\" style=\"background: #e3e3e3;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h1>  CONTACT US</h1>\n                <hr class=\"section-divider\">\n                <p>  Please tell us about your next career goals and we will let you know what we can do to help you.</p>\n            </div>\n        </div>\n        <div class=\"row content-row\">\n            <div class=\"col-md-6\">\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>First Name</label>\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Last Name</label>\n                                <input type=\"text\" class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <label>  Email Address</label>\n                        <input type=\"email\" class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"control-group\">\n                    <div class=\"form-group col-xs-12 floating-label-form-group controls\">\n                        <label>  Message</label>\n                        <textarea rows=\"5\" class=\"form-control\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center clearfix\">\n                <div class=\"row form-group col-xs-6 col-xs-offset-3\">\n                    <hr class=\"featurette-divider\">\n                    <button class=\"btn btn-primary btn-block btn-lg\">  Send</button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</section>";

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = "<h1>{{app}}: 404</h1>";

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
	            console.log('ininiii');
	            //change visible slide
	            sliderNav.on('click', 'li', function(event){
	              console.log('inin');
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
	
	angular.module('mahrio.consumer', ['ngRoute'])
	  .config(['$routeProvider', function($routeProvider) {
	
	    $routeProvider
	      .when('/', {
	        template: __webpack_require__(95),
	        controller: 'ConsumerCtrl',
	        controllerAs: 'vm'
	      })
	      .when('/:route', {
	        template: __webpack_require__(95),
	        controller: 'ConsumerCtrl',
	        controllerAs: 'vm'
	      });
	  }])
	
	  .run( ['$rootScope', '$http', function( $rootScope, $http ) {
	    $rootScope.getAuthorization = function( ) {
	      var token = window.localStorage.Authorization;
	      if( !token ) {
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
	  .controller('ConsumerCtrl', [ '$routeParams', function( $routeParams ) {
	    this.view = $routeParams.route;
	    if( typeof this.view === 'undefined'){
	      return;
	    }
	    switch( this.view) {
	      // LIST OF SUPPORTED PATHS
	      case 'logout':
	        delete window.localStorage.Authorization;
	        window.location.href = '/';
	        return;
	      case 'articles':
	      case 'login':
	      case 'register':
	        break;
	      default:
	        if( typeof this.view !== 'undefined' ){
	          this.view = '404';
	        }
	        break;
	    }
	  }])
	  .directive('cNavigation', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(96),
	      replace: true
	    }
	  }])
	  .directive('cDash', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(97)
	    }
	  }])
	  .directive('cArticles', [ function(){
	    return {
	      restrict: 'E',
	      template: __webpack_require__(98)
	    }
	  }]);
	module.exports = 'mahrio.consumer';

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = "<c-navigation></c-navigation>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <div ng-if=\"!vm.view\">\n                <c-dash></c-dash>\n            </div>\n\n            <ng-switch on=\"vm.view\">\n                <c-articles ng-switch-when=\"articles\"></c-articles>\n                <four-zero-four app=\"C\" ng-switch-when=\"404\"></four-zero-four>\n            </ng-switch>\n        </div>\n    </div>\n</div>\n";

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-light no-radius bg-white container\">\n    <a class=\"navbar-brand\" href=\"/user/\">\n        Consumer\n    </a>\n    <div class=\"bg-white navbar-toggleable-md\" id=\"navbar-header\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/user/articles\">\n                    Articles\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"/user/logout\">\n                    Logout\n                </a>\n            </li>\n        </ul>\n    </div>\n</nav>";

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = "<h1>C - Dashboard</h1>";

/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = "<h1>C - Articles</h1>";

/***/ }

});
//# sourceMappingURL=consumer.bundle.js.map