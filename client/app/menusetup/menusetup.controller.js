'use strict';
(function(){

class MenusetupComponent {
  constructor($scope, menusetupService) {
    menusetupService.query(function(menuitems){
      $scope.menuitems = menuitems;
    });

      $scope.addnewMenuitem = function () {
        menusetupService.save($scope.newMenuitem, function (menuitem) {
          console.log($scope.newMenuitem);
                $scope.newMenuitem = {};
        })
     };
    };
  }
angular.module('bonjourappsApp')
  .component('menusetup', {
    templateUrl: 'app/menusetup/menusetup.html',
    controller: MenusetupComponent
  });


})();
