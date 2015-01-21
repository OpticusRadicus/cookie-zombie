'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'ngDialog'
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
      otherwise({
        redirectTo: '/homebase'
      });
  }]);


   // Example of how to set default values for all dialogs
    phonecatApp.config(['ngDialogProvider', function (ngDialogProvider) {
      ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
          console.log('default pre-close callback');
        }
      });
    }]);