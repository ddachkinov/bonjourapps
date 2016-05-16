'use strict';

var app = require('../..');
import request from 'supertest';

var newMenuitem;

describe('Menuitem API:', function() {

  describe('GET /api/menuitems', function() {
    var menuitems;

    beforeEach(function(done) {
      request(app)
        .get('/api/menuitems')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          menuitems = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      menuitems.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/menuitems', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/menuitems')
        .send({
          name: 'New Menuitem',
          info: 'This is the brand new menuitem!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMenuitem = res.body;
          done();
        });
    });

    it('should respond with the newly created menuitem', function() {
      newMenuitem.name.should.equal('New Menuitem');
      newMenuitem.info.should.equal('This is the brand new menuitem!!!');
    });

  });

  describe('GET /api/menuitems/:id', function() {
    var menuitem;

    beforeEach(function(done) {
      request(app)
        .get('/api/menuitems/' + newMenuitem._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          menuitem = res.body;
          done();
        });
    });

    afterEach(function() {
      menuitem = {};
    });

    it('should respond with the requested menuitem', function() {
      menuitem.name.should.equal('New Menuitem');
      menuitem.info.should.equal('This is the brand new menuitem!!!');
    });

  });

  describe('PUT /api/menuitems/:id', function() {
    var updatedMenuitem;

    beforeEach(function(done) {
      request(app)
        .put('/api/menuitems/' + newMenuitem._id)
        .send({
          name: 'Updated Menuitem',
          info: 'This is the updated menuitem!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMenuitem = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMenuitem = {};
    });

    it('should respond with the updated menuitem', function() {
      updatedMenuitem.name.should.equal('Updated Menuitem');
      updatedMenuitem.info.should.equal('This is the updated menuitem!!!');
    });

  });

  describe('DELETE /api/menuitems/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/menuitems/' + newMenuitem._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when menuitem does not exist', function(done) {
      request(app)
        .delete('/api/menuitems/' + newMenuitem._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
