(function () {
  'use strict';

  var App;
  var Settings;

  Settings = {
    apiBase : 'http://localhost:8001/api'
  };

  App = angular.module('wiwApp', []);

  App.factory('desksFactory', function ($http) {    
    return $http.get(Settings.apiBase + '/getDesks');
  });

  App.factory('peopleFactory', function ($http) {
    return $http.get(Settings.apiBase + '/getPeople');
  });

  App.factory('personFactory', function ($http) {
    return function (personId) {
      return $http.get(Settings.apiBase + '/getPersonById/' + personId);
    };
  });


  window.App = App;

})();