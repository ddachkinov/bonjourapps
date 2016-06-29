'use strict';

angular.module('bonjourappsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restaurant', {
        url: '/restaurant',
        template: '<restaurant></restaurant>'
      })
      .state('restaurant.tables', {
        url: '/restaurant/tables',
        templateUrl: 'tables.html'
      });
  });
