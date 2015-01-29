'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
 
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
        when('/pagetwo', {
        templateUrl: 'partials/pagetwo.html'
      }).
          when('/homebase', { 
        templateUrl: 'partials/homebase.html'
      }).
          when('/contact', {
        templateUrl: 'partials/contact.html'
      }).  
          when('/cookieList', {
        templateUrl: 'partials/cookieList.html'
        // controller: 'CookieListCtrl'
      }). 
      otherwise({
        redirectTo: '/homebase'
      });
  }]);

