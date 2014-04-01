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