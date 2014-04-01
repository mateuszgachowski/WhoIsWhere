(function () {
  'use strict';

  App.directive('desk', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/views/desk.html',
      controller: 'DeskController'
    };
  });
})();