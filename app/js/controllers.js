'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone, homebase, pagetwo, contact) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);




// phonecatApp.controller('CookieListCtrl', ['$scope', 'Cookies',
//   function($scope, Cookies) {
//     $scope.cookies = Cookies.query();
//     $scope.orderProp = 'name';
//   }]);


// phonecatApp.controller('CookieListCtrl', function ($scope, $http) {
//   $http.get('posts/posts.json').success(function(data) {
//     $scope.posts = data;
//   });

//   $scope.orderProp = 'age';
// });



phonecatApp.controller('CookieListCtrl', function ($scope, $http){
    $scope.posts = [
    {
        
        "id": "chocChip", 
        "imageUrl": "img/cookies/chocChip.jpg", 
        "name": "chocChip", 
        "snippet": "A delicous Chocolate chip cookie"
    }, 
    {
    
        "id": "orio", 
        "imageUrl": "img/cookies/orio.jpg", 
        "name": "orio", 
        "snippet": "A delicous Orio cookie"
    },
      {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/motorola-xoom.0.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
]
  });


// phonecatApp.controllenr('CookieListCtrl', function ($scope, $http){
//     $scope.posts = function () {
//       $http.get('posts/posts.json').success(function(data) {
//    $scope.posts = data;
//    });  
//     }
//       });


    







// $scope.posts = [
//     {
        
//         "id": "chocChip", 
//         "imageUrl": "img/cookies/chocChip.jpg", 
//         "name": "chocChip", 
//         "snippet": "A delicous Chocolate chip cookie"
//     }, 
//     {
    
//         "id": "orio", 
//         "imageUrl": "img/cookies/orio.jpg", 
//         "name": "orio", 
//         "snippet": "A delicous Orio cookie"
//     },
//       {
//         "age": 1, 
//         "id": "motorola-xoom", 
//         "imageUrl": "img/phones/motorola-xoom.0.jpg", 
//         "name": "MOTOROLA XOOM\u2122", 
//         "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
//     }, 
// ]
// });

// phonecatControllers.controller('Banner', function ($scope){
//   $scope.post =  {name: 'Gabrial', id: '1' }

//   )};


phonecatApp.controller('ListCtrl', function ($scope) {
  $scope.Banner = {
    'name': 'Valentines',
     'snippet': '...And love for everyone',
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



