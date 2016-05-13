'use strict';

describe('Component: RestaurantComponent', function () {

  // load the controller's module
  beforeEach(module('bonjourappsApp'));

  var RestaurantComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantComponent = $componentController('RestaurantComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
