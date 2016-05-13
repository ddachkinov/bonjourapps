'use strict';

angular.module('bonjourappsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restaurant', {
        url: '/restaurant',
        template: '<restaurant></restaurant>'
      });
  });
