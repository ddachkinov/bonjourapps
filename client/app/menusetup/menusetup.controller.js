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

})();
