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
 
 
landingPageApp.controller('SignUpController', function($scope, $location) {
  $scope.submit = function() {
    // TODO submit form
    $location.path('/thankyou')
  };
});
 
landingPageApp.controller('ThankYouController');
