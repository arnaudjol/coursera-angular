(function(){
  'use strict';

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
      $scope.lunchMenu = "";
      $scope.message = "";
      $scope.color = "";
      $scope.checkLunch = function(){
        var menuList;
        if ($scope.lunchMenu==="") {
          $scope.message="Please enter data first!";
          $scope.color="red";
        }else {
          $scope.color="green";
          menuList = $scope.lunchMenu.split(',');
          $scope.message = menuList.length <= 3 ? "Enjoy" : "Too much";
        }
      };
    }
})()
