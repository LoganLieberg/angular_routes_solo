myApp.controller('JakeController', ['$scope', function($scope) {
  console.log('Jake controller running');
  $scope.message = "Jake Controller!";
  $scope.name = "Jake the Dog";
  $scope.show = 'Adventure Time';
  $scope.run =  'April 5, 2010 - ongoing';
  $scope.episodes = '7 seasons';
  $scope.creator = 'Pendleton Ward';
  $scope.voiceActor = 'John DiMaggio';
}]);
