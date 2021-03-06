"use strict";

describe('servicesPage', function(){
  beforeEach(module('womenWorkingWithWomenApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ServicesCtrl', {
      $scope: scope
    });
  }));

  it('should have defined ServicesCtrl', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a title of Services', function() {
    expect(scope.title).toEqual('Services');
  })
});