angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'images/HopHacks15.jpg',
      text: 'HopHacks Spring 2015',
      description: 'February 8th, 2015'
    },
    {
      image: 'images/Israel_School.jpg',
      text: 'Ashkelon, Israel',
      description: 'January 14th, 2015'
    },
    {
      image: 'images/VCIC.jpg',
      text: 'Venture Capital Investment Competition',
      description: 'January 23rd, 2015'
    },
    {
      image: 'images/ChemECar.jpg',
      text: 'ChemECar Competition',
      description: 'March 13, 2014'
    },
    {
      image: 'images/HopHacks14.jpg',
      text: 'HopHacks Fall 2014',
      description: 'September 8th, 2014'
    },
    {
      image: 'images/Venice.jpg',
      text: 'Venice',
      description: 'August 15th, 2014'
    },
    {
      image: 'images/paris.jpg',
      text: 'Paris',
      description: 'August 11th, 2014'
    }
  ];
});