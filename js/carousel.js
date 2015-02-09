angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'images/HopHacks.jpg',
      text: 'HopHacks',
      description: 'February 8th, 2015'
    },
    {
      image: 'images/Israel_School.jpg',
      text: 'Ashkelon, Israel',
      description: 'January 14th, 2015'
    }
  ];
});