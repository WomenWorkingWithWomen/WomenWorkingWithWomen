"use strict";

describe('aboutPage', function(){
  beforeEach(module('womenWorkingWithWomenApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should have defined AboutCtrl', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have defined Board Members, Testimonials, Partners', function() {
    expect(scope.boardMembers).toBeDefined();
    expect(scope.testimonials).toBeDefined();
    expect(scope.partners).toBeDefined();
  });
});