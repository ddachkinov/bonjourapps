'use strict';

angular.module('bonjourappsApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });
