'use strict';
(function(){

class MenusetupComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bonjourappsApp')
  .component('menusetup', {
    templateUrl: 'app/menusetup/menusetup.html',
    controller: MenusetupComponent
  });



app.directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);

})();
