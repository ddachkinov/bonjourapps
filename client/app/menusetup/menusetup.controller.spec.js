'use strict';

describe('Component: MenusetupComponent', function () {

  // load the controller's module
  beforeEach(module('bonjourappsApp'));

  var MenusetupComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MenusetupComponent = $componentController('MenusetupComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
