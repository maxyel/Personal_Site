angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'images/HopHacks.jpg',
      text: 'HopHacks!'
    },
    {
      image: 'images/Israel_School.jpg',
      text: 'Ashkelon!'
    }
  ];
});