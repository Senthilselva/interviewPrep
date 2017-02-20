'use strict';

var should = require('chai').should(),
  isInteger = require('../isInteger.js');

describe('IsInteger', function () {
  it('should return true', function () {
    isInteger(10).should.equal(true);
  });

  it('should return false for decimals', function () {
    isInteger(2.1).should.equal(false);
  });

  it('should return false for string', function () {
    isInteger("int").should.equal(false);
  });

  it('should return false for string', function () {
    isInteger('92')
      .should.equal(false);
  });

  it('should return false for Array', function () {
    isInteger([1,2,3]).should.equal(false);
  });
});
