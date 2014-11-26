angular.module('myApp', ['ngRoute','myApp.filters','myApp.services','myApp.directives','myApp.controllers'])
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  var routeDefaults = {
    docs : {
      name : 'doc',
      defaultPath : 'docs/app/app-mixins'
    },
    demos : {
      name : 'demos',
      defaultPath : 'buttons'
    }
  };

  $routeProvider.when('/docs', {redirectTo: routeDefaults.docs.defaultPath});
  $routeProvider.when('/docs/:docPath*', { templateUrl: function(params) { return 'routes/docs.htm'} });
  $routeProvider.when('/home', {templateUrl: 'toc.htm', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
  // Turn on for production.
  // Then need to change the
  // $locationProvider.html5Mode(true);
}])


.controller("MainCtrl", ['$scope','$routeParams', '$location', '$exceptionHandler', function($scope,$routeParams,$location, $exceptionHandler) {
  
  var location = $location;
  $scope.location = $location;
  $scope.isMainPageActive = function (urlKey) { return $location.url().doesContain(urlKey)? 'active' : ''; }
  //TODO: need to make it more general here for matching the active page.
  $scope.isActive = function(page){return  $routeParams.docPath === page || $routeParams.demoName === page ? 'active' : '';}
  $scope.includeDoc = function () {
    return '../docs/documentations/'+$routeParams.docPath+'.htm';
  }
}])