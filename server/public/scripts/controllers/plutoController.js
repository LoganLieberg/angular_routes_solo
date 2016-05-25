myApp.controller('PlutoController', ['$scope', function($scope) {
  console.log('Pluto controller running');
  $scope.message = "Pluto Controller!";
  $scope.name = "Pluto the Dog";
  $scope.show = 'The Chain Gang';
  $scope.run =  '1930 - ongoing';
  $scope.episodes = 'unknown';
  $scope.creator = 'Walt Disney';
  $scope.voiceActor = 'Many';
}]);
