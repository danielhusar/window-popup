'use strict';

var assert = require('assert');
var sinon = require('sinon');
var popup = require('./').windowPopup;

it('It should open popup without title', function() {

  var win = {
    outerWidth: 1000,
    outerHeight: 1000,
    screenX: 250,
    screenY: 250,
    open: sinon.spy()
  };

  popup(500, 500, 'http://www.google.sk', undefined, win);
  assert(win.open.called);
  assert.equal(win.open.getCall(0).args[0], 'http://www.google.sk');
  assert.equal(win.open.getCall(0).args[1], '');
  assert.equal(win.open.getCall(0).args[2], 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=500, height=500, top=500, left=500');
});
