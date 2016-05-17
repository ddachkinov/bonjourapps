'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $window) {
    this.$http = $http;
    this.socket = socket;
//    this.awesomeThings = [];

//    $scope.$on('$destroy', function() {
//      socket.unsyncUpdates('thing');
//    });
        
 }

//  $onInit() {
//    this.$http.get('/').then(response => {
//      this.awesomeThings = response.data;
//      this.socket.syncUpdates('thing', this.awesomeThings);
//    });
//  }

//  addThing() {
//    if (this.newThing) {
//      this.$http.post('/api/things', { name: this.newThing });
//      this.newThing = '';
//    }
//  }

//  deleteThing(thing) {
///    this.$http.delete('/api/things/' + thing._id);
//  }
}

angular.module('bonjourappsApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
