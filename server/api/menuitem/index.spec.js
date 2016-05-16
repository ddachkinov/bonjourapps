'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var menuitemCtrlStub = {
  index: 'menuitemCtrl.index',
  show: 'menuitemCtrl.show',
  create: 'menuitemCtrl.create',
  update: 'menuitemCtrl.update',
  destroy: 'menuitemCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var menuitemIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './menuitem.controller': menuitemCtrlStub
});

describe('Menuitem API Router:', function() {

  it('should return an express router instance', function() {
    menuitemIndex.should.equal(routerStub);
  });

  describe('GET /api/menuitems', function() {

    it('should route to menuitem.controller.index', function() {
      routerStub.get
        .withArgs('/', 'menuitemCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/menuitems/:id', function() {

    it('should route to menuitem.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'menuitemCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/menuitems', function() {

    it('should route to menuitem.controller.create', function() {
      routerStub.post
        .withArgs('/', 'menuitemCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/menuitems/:id', function() {

    it('should route to menuitem.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'menuitemCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/menuitems/:id', function() {

    it('should route to menuitem.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'menuitemCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/menuitems/:id', function() {

    it('should route to menuitem.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'menuitemCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
