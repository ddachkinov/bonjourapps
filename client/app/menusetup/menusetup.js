'use strict';

angular.module('bonjourappsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menusetup', {
        url: '/restaurant/menusetup',
<<<<<<< HEAD
        template: '<menusetup></menusetup>'
      })
      .state('menusetup.details',{
        url: '/{id}'
      });
=======
        template: '<menusetup></menusetup>',
      })
>>>>>>> 6d849f7... settings improved
  });
