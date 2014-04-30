var landingPageApp = angular.module('landingPageApp', ['ngRoute']);
 
landingPageApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignUpController'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankYouController'
      })
      .otherwise({
        redirectTo: '/signup'
      });
}]);
 
 
landingPageApp.controller('SignUpController', [ '$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.submit = function() {
    var data = {
      "entry.2004207529": $scope.firstName,
      "entry.1724989784": $scope.lastName,
      "entry.575036860": $scope.email,
    }
    $http({
      method  : 'POST',
      url     : 'https://docs.google.com/forms/d/1YIR735YkXc_Feq30uiD_sgr6ub50x2svatbA3k5ttpw/formResponse',
      data    : $.param(data),
      dataType: 'xml',
      headers : { 
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .success(function(data) {
        $location.path('/thankyou')
      })
      .error(function(data) {
        $location.path('/thankyou')
      });
  };
}]);
 
landingPageApp.controller('ThankYouController');
