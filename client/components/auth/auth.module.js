'use strict';

angular.module('bonjourappsApp.auth', [
  'bonjourappsApp.constants',
  'bonjourappsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
