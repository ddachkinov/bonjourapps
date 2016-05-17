'use strict';

angular.module('bonjourappsApp')
  .factory('menusetupService', function($resource) {
    return $resource('/api/menuitems/',{
        id: '@id'
      });
});
