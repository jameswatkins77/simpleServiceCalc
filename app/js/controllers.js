trig.controller("TrigController", function($scope, hypotenuseFactory){
  $scope.view = {};
  $scope.view.calculate = function(){
    $scope.view.hypotenuse = hypotenuseFactory.pythagorean($scope.view.sideA, $scope.view.sideB);
  }
});
