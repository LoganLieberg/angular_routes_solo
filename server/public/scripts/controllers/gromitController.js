myApp.controller('GromitController', ['$scope', function($scope) {
  console.log('Gromit controller running');
  $scope.message = "Gromit Controller!";
  $scope.name = "Gromit";
  $scope.show = 'Wallace and Gromit';
  $scope.run =  'Dec 17, 1993 - ongoing';
  $scope.episodes = '9 episodes, 3 movies';
  $scope.creator = 'Bob Baker';
  $scope.voiceActor = 'None';
}]);
