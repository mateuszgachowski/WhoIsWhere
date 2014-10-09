/**
 * Copyright (c) 2014 Mateusz Gachowski, contributors.
 * Licensed under the MIT license (see LICENSE file).
 */
(function () {
  'use strict';

  App.controller('DeskController', ['$scope', function ($scope) {

    $scope.showProfile = function (deskId) {

      var user = $scope.desks[deskId - 1].owner;

      if (user) {
        $scope.userProfile = user;
        $('#user-profile-modal').modal('show');
      }
    };
  }]);
})();