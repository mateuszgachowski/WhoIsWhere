(function () {
  'use strict';

  App.controller('OfficeController', ['$scope', 'desksFactory', 'peopleFactory', function ($scope, desksFactory, peopleFactory) {

    $scope.desksInverted = false;
    $scope.showNumbers   = false;
    $scope.showTeams     = false;
    $scope.showProjects  = false;

    $scope.userProfile    = null;
    $scope.profileVisible = false;

    desksFactory.success(function (desks) {
      var data = desks.data;

      data = _.map(data, function (desk) {
        desk.x = ~~desk.x;
        desk.y = ~~desk.y;
        return desk;
      });
      $scope.desks = data;
    });

    peopleFactory.success(function (people) {
      _.each(people.data, function (person) {
        if (person.deskId) {
          $scope.desks[person.deskId - 1].owner = person;
        }
      });
    });

    $scope.toggleNumbers = function ($event) {
      $event.preventDefault();
      $scope.showNumbers = !$scope.showNumbers;
    };

    $scope.rotateNames = function ($event) {
      $event.preventDefault();

      _.each($scope.desks, function (desk) {
        if ($scope.desksInverted) {
          desk.x = desk.x + 10;
          desk.y = desk.y - 8;
        }
        else {
          desk.x = desk.x - 10;
          desk.y = desk.y + 8;
        }
      });
      $scope.desksInverted = !$scope.desksInverted;
    };

    $scope.toggleTeams = function ($event) {
      $event.preventDefault();

      $scope.showTeams = !$scope.showTeams;

      if ($scope.showProjects) {
        $scope.showProjects = false;
      }
    };

    $scope.toggleProjects = function ($event) {
      $event.preventDefault();

      $scope.showProjects = !$scope.showProjects;

      if ($scope.showTeams) {
        $scope.showTeams = false;
      }
    }

    $scope.peopleCount = function () {
      return _.reduce($scope.desks, function (sum, desk, key) {
        if (desk.owner) {
          return sum + 1;
        }
        return sum;
      }, 0)
    };

  }]);
})();