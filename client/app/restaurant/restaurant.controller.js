'use strict';
(function(){

class RestaurantComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('bonjourappsApp')
  .component('restaurant', {
    templateUrl: 'app/restaurant/restaurant.html',
    controller: RestaurantComponent
  });

})();
