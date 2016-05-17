'use strict';
(function(){

class MenusetupComponent {
  constructor($scope, menusetupService, socket, $stateParams) {
    menusetupService.query(function(menuitems){
      $scope.menuitems = menuitems;
      socket.syncUpdates('menuitem', $scope.menuitems);
    });

      $scope.addnewMenuitem = function () {
        menusetupService.save($scope.newMenuitem, function (menuitem) {
          console.log($scope.newMenuitem);
                $scope.newMenuitem = {};
        })
     };
    
      $scope.goBack = function(){
        window.history.back();
      };

      $scope.editMenuitem = function(menuitem){
        $scope.editingMenuitem = menuitem;
      };

      $scope.undoMenuitemEdit = function(){
        $scope.editingMenuitem = undefined;
      };

    };
  }
angular.module('bonjourappsApp')
  .component('menusetup', {
    templateUrl: 'app/menusetup/menusetup.html',
    controller: MenusetupComponent
  });


})();
