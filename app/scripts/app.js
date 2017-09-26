'use strict';

/**
 * @ngdoc overview
 * @name thesaurus
 * @description
 * # thesaurus
 *
 * Main module of the application.
 */
angular
  .module('thesaurus', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
