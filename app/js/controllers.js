'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone, homebase, pagetwo, contact, teststickynav) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

// phonecatControllers.controller('Banner', function ($scope){
//   $scope.post =  {name: 'Gabrial', id: '1' }

//   )};


phonecatApp.controller('ListCtrl', function ($scope) {
  $scope.Banner = {
    'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'imageUrl': 'img/valentinesbanner.jpg'
  };
});





phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone, pagetwo, homebase) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);


// ngDialog controllers and directives




