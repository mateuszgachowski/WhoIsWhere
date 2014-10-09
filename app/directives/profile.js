/**
 * Copyright (c) 2014 Mateusz Gachowski, contributors.
 * Licensed under the MIT license (see LICENSE file).
 */
(function () {
  'use strict';

  App.directive('profile', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/views/profile.html',
      controller: 'ProfileController'
    };
  });
})();