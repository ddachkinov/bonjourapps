'use strict';

angular.module('bonjourappsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menusetup', {
        url: '/restaurant/menusetup',
        template: '<menusetup></menusetup>'
      })
      .state('menusetup.details',{
        url: '/{id}'
      });
  });
